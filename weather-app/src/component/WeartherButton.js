import React from 'react'
import { Button } from 'react-bootstrap';

const WeartherButton = ({cities, setCity}) => {
    console.log('cities',cities)

  return (
    <div className="weatherBtnBox">
        <Button variant="dark">Current Location</Button>
        {cities.map((item, idx)=>(
            <Button variant="secondary" key={idx} onClick={()=>setCity(item)}>{item}</Button>
        ))}
    </div>
  )
}

export default WeartherButton