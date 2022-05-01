
import { useTeamsStore } from '@/stores/teams'
import { useGameStore } from '@/stores/game'

export const useMemory = () => {
  // Memory Database
  const load = (database) => {
    const game = useGameStore()
    const teams = useTeamsStore()
    game.game = database.game
    teams.teams = database.teams
  }

  const save = () => {
    // TODO: Save dexie from database
  }

  return { load, save }
}
