import { defineStore } from 'pinia'
import defaultDB from '@/db/default.json'

export const useDatabaseStore = defineStore('database', () => {
  const get = () => {
    console.info('sss')
    return JSON.parse(false || defaultDB) // TODO: Implement load database
  }

  const save = (database) => {
    return database // TODO: Implement load database
  }

  return { get, save }
})
