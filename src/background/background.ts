import { setStoredCities } from '../utilites/storage';

chrome.runtime.onInstalled.addListener(() =>
  setStoredCities([])
)
