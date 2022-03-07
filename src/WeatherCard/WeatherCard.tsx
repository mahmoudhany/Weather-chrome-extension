import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getCityWeather } from '../API';
import { RootObject, WeatherCardState } from '../Types';
import './weatherCard.css'
import WeatherCardContainer from './WeatherCardContainer'




export const WeatherCard: React.FC<{
  city: string,
  onDelete?: () => void
}> = ({ city, onDelete }) => {
  const [weather, setWeather] = useState<RootObject | null>(null)
  const [cardState, setCardState] = useState<WeatherCardState>('loading')


  const getWeather = async () => {
    try {
      const cityWeather = await getCityWeather(city)
      setWeather(cityWeather)
      setCardState('ready')
    } catch (error) {
      setCardState('error')
    }
  }
  useEffect(() => {
    getWeather()
  }, [city])

  if (!weather || (cardState == 'loading' || cardState == 'error')) {
    return <WeatherCardContainer onDelete={onDelete}>
      <Typography variant='body1'>
        {cardState == 'loading' ? 'loading...' : 'City not found'}
      </Typography>
    </WeatherCardContainer>
  }

  return (
    <WeatherCardContainer onDelete={onDelete}>
      <Typography variant='h5'>{weather.name}</Typography>
      <Typography variant='body1'>{Math.round(weather.main.temp)}</Typography>
      <Typography variant='body1'>Feels like: {Math.round(weather.main.feels_like)}</Typography>
    </WeatherCardContainer>
  )
}
