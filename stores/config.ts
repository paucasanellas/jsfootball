import { defineStore } from 'pinia'
import { IGameMode } from '~~/interfaces/config.interface'

export const useConfigStore = defineStore('config', () => {
  const app = {
    name: 'JSFootball',
    version: 'v1.0 Beta'
  }

  const gamemodes: IGameMode[] = [
    { title: 'Amistoso', slug: '#friendly', img: '/images/welcome-friendly.jpg' },
    { title: 'Manager', slug: 'manager', img: '/images/welcome-manager.jpg' },
    { title: 'Desafios', slug: '#challenges', img: '/images/welcome-challenge.jpg' },
    { title: 'Comunidad', slug: '#community', img: '/images/welcome-manager.jpg' },
    { title: 'Base de datos', slug: '#database', img: '/images/welcome-manager.jpg' },
    { title: 'Plantillas', slug: '#squads', img: '/images/welcome-manager.jpg' },
    { title: 'Github', slug: '#github', img: '/images/welcome-github.jpg' },
    { title: 'Opciones', slug: '#settings', img: '/images/welcome-github.jpg' }
  ]

  return {
    app,
    gamemodes
  }
})
