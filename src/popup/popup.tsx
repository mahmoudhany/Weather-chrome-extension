import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import './popup.css'
import { WeatherCard } from '../WeatherCard/WeatherCard';
import { Box } from '@mui/system';
import { Grid, IconButton, InputBase, Paper } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { setStoredCities, getStoredCities } from '../utilites/storage';

const Popup: React.FC<{}> = () => {
  const [cityInput, setCityInput] = useState<string>('')
  const [cities, setCities] = useState<string[]>([])

  const getLocalCities = async () => {
    const cities = await getStoredCities()
    setCities(cities)
  }
  useEffect(() => {
    getLocalCities()
  }, [])

  const addCity = () => {
    if (!cityInput) {
      return
    }
    const updateCities = [...cities, cityInput]
    setStoredCities(updateCities)
      .then(() => {
        setCities(updateCities)
        setCityInput('')
      })
  }

  const deleteCity = (index: number) => {
    cities.splice(index, 1)
    const updatedCities = [...cities]
    setStoredCities(updatedCities)
      .then(() => {
        setCities(updatedCities)
      })
  }

  return (
    <Box className='popup' my='16px'>
      <Grid container flexDirection={'column'}>
        <Grid item>
          <Paper>
            <Box px='15px' py='5px' display={'flex'} justifyContent='space-between'>
              <InputBase
                placeholder='Add a city name'
                value={cityInput}
                onChange={(e) => setCityInput(e.target.value)}
              />
              <IconButton
                onClick={addCity}
              >
                <AddIcon />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      {cities.map((city, index) => (
        <WeatherCard
          city={city}
          key={index}
          onDelete={() => deleteCity(index)}
        />
      )
      )}
    </Box>
  )
}


const root = document.createElement('div')
document.body.appendChild(root)

ReactDOM.render(<Popup />, root)
