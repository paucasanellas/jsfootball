import { defineStore } from 'pinia'
import { ITeam } from '~~/interfaces/models.interfaces'

export const useTeamsStore = defineStore('teams', () => {
  const teams = reactive<ITeam[]>([])

  return { teams }
})
