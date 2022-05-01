import defaultDB from '@/db/default.json'

export const useDatabase = () => {
  const get = () => {
    return JSON.parse(false || defaultDB) // TODO: Implement load database
  }

  const save = (database) => {
    return database // TODO: Implement load database
  }

  return { get, save }
}
