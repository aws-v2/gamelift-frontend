// import { connectWebSocket, sendMessage, disconnectWebSocket } from '@/modules/streaming/services/ws'



// function buildWsUrl(wsUrl, token, vmIp) {
//   const url = new URL(`${wsUrl}/game`)
//   if (token) url.searchParams.set('token', token)
//   if (vmIp) url.searchParams.set('vm_ip', vmIp)
//   return url.toString()
//   // → ws://localhost:9030/game?token=...&vm_ip=10.0.1.12
// }
// // --- Game State (Godot position data) ---
// function handleGameState(data) {
//   // console.log(The data looks like this ${data.type, data.data})
//   console.log(`The state data looks like this: type=${data.type}, data=${JSON.stringify(data.data)}`)
//   const nodeName = data.node || manifest.value?.player_node
//   const entity = entities.get(nodeName)

//   if (entity) {
//     if (typeof data.x === 'number') entity.target.x = data.x
//     if (typeof data.y === 'number') entity.target.y = data.y
//     if (typeof data.z === 'number') entity.target.z = data.z
//     if (typeof data.yaw === 'number') entity.target.yaw = data.yaw
//     if (typeof data.pitch === 'number') entity.target.pitch = data.pitch
//   }
// }





// const onKeyDown = (e) => {
//   if (loading.value) return
//   sendMessage({
//     type: 'game_input',
//     session_id: sessionId.value,  // your current session id
//     data: { type: 'keydown', key: e.key }
//   })
// }

// const onKeyUp = (e) => {
//   if (loading.value) return
//   sendMessage({
//     type: 'game_input',
//     session_id: sessionId.value,
//     data: { type: 'keyup', key: e.key }
//   })
// }


 




// function onMouseDown(e: MouseEvent) {
//   sendMessage({
//     type: 'game_input',
//     session_id: sessionId.value,
//     data: { type: 'mousedown', button: e.button, target_node: 'Player' },
//   })
// }

// function onMouseUp(e: MouseEvent) {
//   sendMessage({
//     type: 'game_input',
//     session_id: sessionId.value,
//     data: { type: 'mouseup', button: e.button, target_node: 'Player' },
//   })
// }




// function onWindowResize() {
//   logger.info("Window size event listener triggered")

//   if (!camera || !renderer || !threeContainer.value) return
//   const width = threeContainer.value.clientWidth
//   const height = threeContainer.value.clientHeight
//   camera.aspect = width / height
//   camera.updateProjectionMatrix()
//   renderer.setSize(width, height)
// }
