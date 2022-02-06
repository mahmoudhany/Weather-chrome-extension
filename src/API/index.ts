import axios from 'axios';
import { RootObject } from '../Types';
const API_KEY = '87fd02e84b090ed6cbc1d1db95f7491f'

export const getCityWeather = async (city: string = 'london'): Promise<RootObject> => {
  const response = await axios(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)


  if (response.status != 200) {
    throw new Error('error')
  }
  return response.data
}
