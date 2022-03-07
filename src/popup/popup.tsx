import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import './popup.css'
import { WeatherCard } from '../WeatherCard/WeatherCard';
import { Box } from '@mui/system';
import { Grid, IconButton, InputBase, Paper } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

const Popup: React.FC<{}> = () => {
  const [cityInput, setCityInput] = useState<string>('')
  const [cities, setCities] = useState<string[]>([
    'cairo',
    'berlin',
    'error'
  ])
  const addCity = () => {
    if (cityInput) {
      setCities([...cities, cityInput])
      setCityInput('')
    }
  }

  const deleteCity = (index: number) => {
    cities.splice(index, 1)
    setCities([...cities])
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
