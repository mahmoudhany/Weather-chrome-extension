import React, { useEffect } from 'react';
import ReactDOM from 'react-dom'
import { getCityWeather } from '../API';


const Options: React.FC<{}> = () => {

  const getWeather = async () => {
    const weather = await getCityWeather('cairo')
    console.log(weather);
  }
  useEffect(() => {

  }, [])
  return <div>hello options</div>
}


const root = document.createElement('div')
document.body.appendChild(root)

ReactDOM.render(<Options />, root)
