extends Node

# StateStreamer.gd - Captures and sends player state to the backend
# Attach this to the Player (CharacterBody3D) node.

var socket := WebSocketPeer.new()
var url := "ws://localhost:8080/ws"
var last_update_time := 0.0
var update_interval := 0.05 # 20Hz

@onready var player: CharacterBody3D = get_parent()
@onready var camera: Camera3D = player.get_node("Camera3D")

func _ready():
	print("[StateStreamer] Connecting to ", url)
	var err = socket.connect_to_url(url)
	if err != OK:
		printerr("[StateStreamer] Could not connect: ", err)
		set_process(false)

func _process(delta):
	socket.poll()
	var state = socket.get_ready_state()
	
	if state == WebSocketPeer.STATE_OPEN:
		while socket.get_available_packet_count():
			var packet = socket.get_packet()
			var msg = packet.get_string_from_utf8()
			_handle_incoming_message(msg)
		
		# Send player state at 20Hz
		last_update_time += delta
		if last_update_time >= update_interval:
			last_update_time = 0.0
			send_player_state()
			
	elif state == WebSocketPeer.STATE_CLOSING:
		pass
	elif state == WebSocketPeer.STATE_CLOSED:
		var code = socket.get_close_code()
		var reason = socket.get_close_reason()
		print("[StateStreamer] WebSocket closed with code: %d, reason %s. Reconnecting..." % [code, reason])
		socket.connect_to_url(url)

# --- INPUT RELAY LOGIC ---

func _handle_incoming_message(json_string: String):
	var json = JSON.new()
	var error = json.parse(json_string)
	if error != OK:
		return
		
	var data = json.get_data()
	if typeof(data) != TYPE_DICTIONARY:
		return
		
	var type = data.get("type", "")
	var key = data.get("key", "")
	
	if type == "keydown":
		_process_key_event(key, true)
	elif type == "keyup":
		_process_key_event(key, false)

func _process_key_event(key: String, is_pressed: bool):
	var action = _map_key_to_action(key)
	if action != "":
		if is_pressed:
			Input.action_press(action)
			print("[StateStreamer] Action Pressed: ", action, " (Key: ", key, ")")
		else:
			Input.action_release(action)
			print("[StateStreamer] Action Released: ", action, " (Key: ", key, ")")

func _map_key_to_action(key: String) -> String:
	match key.to_lower():
		"w", "arrowup":
			return "move_forward"
		"s", "arrowdown":
			return "move_back"
		"a", "arrowleft":
			return "move_left"
		"d", "arrowright":
			return "move_right"
		" ": # Space
			return "jump_up"
		"f", "enter":
			return "shoot"
	return ""

func send_player_state():
	if not player:
		return
		
	var payload = {
		"id": "player_1",
		"x": player.global_position.x,
		"y": player.global_position.y,
		"z": player.global_position.z,
		"yaw": player.rotation.y,
		"pitch": camera.rotation.x,
		"vx": player.velocity.x,
		"vy": player.velocity.y,
		"vz": player.velocity.z,
		"anim": get_current_animation(),
		"is_on_floor": player.is_on_floor(),
		"health": 100 # Placeholder for now
	}
	
	var json_data = JSON.stringify(payload)
	var err = socket.send_text(json_data)
	
	if err == OK:
		# Log the data being sent as requested
		print("[StateStreamer] Sent: ", json_data)
	else:
		printerr("[StateStreamer] Send error: ", err)

func get_current_animation() -> String:
	# Basic heuristic for animation state since we don't have an AnimationPlayer reference here yet
	if not player.is_on_floor():
		return "jumping"
	if player.velocity.length() > 0.1:
		return "running"
	return "idle"
