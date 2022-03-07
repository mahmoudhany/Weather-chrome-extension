import axios from 'axios';
import { RootObject } from '../Types';
const API_KEY = '791831ebc5fc26f70949b2e0e395db99'

export const getCityWeather = async (city: string): Promise<RootObject | null> => {
  try {
    const response = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
    return response.data
  } catch (error) {
    return null
  }


}
