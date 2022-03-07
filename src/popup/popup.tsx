import React, { useEffect } from 'react';
import ReactDOM from 'react-dom'
import './popup.css'
import { WeatherCard } from '../WeatherCard/WeatherCard';

const Popup: React.FC<{}> = () => {
  return (
    <>
      <WeatherCard city='cairo' />
      <WeatherCard city='berlin' />
      <WeatherCard city='netherlands' />
      <WeatherCard city='netherlansssds' />
    </>
  )
}


const root = document.createElement('div')
document.body.appendChild(root)

ReactDOM.render(<Popup />, root)
