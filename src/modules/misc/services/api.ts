import apiClient from '@/shared/api/apiClient'
import { baseLogger } from '@/shared/config/logger'
const logger = baseLogger.child({scope:"misc-api"}) 
/**
 * Extract API response safely (handles ApiResponse wrapper)
 */
function unwrap(res: any) {
  return res.data?.data ?? res.data
}


/* =========================================================
   GAME LIFT
========================================================= */

export async function fetchGames() {
  const res = await apiClient.get('/gamelift/games')
  logger.info("Fetching all the games")

  return unwrap(res)
}

export async function initUpload(gameData: any) {
  const res = await apiClient.post(
    '/gamelift/games/init-upload',
    gameData
  )
  logger.info("Init uplade complete")



  return unwrap(res)
}

export async function fetchGameManifest(gameId: string) {
  const res = await apiClient.get(
    `/gamelift/games/${gameId}/manifest`
  )

  return unwrap(res)
}
