export interface LocalStorage {
  cities: string[]
}

export type LocalStorageKeys = keyof LocalStorage

export const setStoredCities = (cities: string[]): Promise<void> => {
  const vals: LocalStorage = {
    cities
  }
  return new Promise((resolve) => {
    chrome.storage.local.set(vals,
      () => {
        resolve()
      })
  })
}
export const getStoredCities = (): Promise<string[]> => {

  return new Promise(resolve => {
    const keys: LocalStorageKeys[] = ['cities']

    chrome.storage.local.get(keys, (res: LocalStorage) => {
      resolve(res.cities ?? [])
    })
  })

}
