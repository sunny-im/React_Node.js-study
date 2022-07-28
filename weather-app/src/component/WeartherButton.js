import React from 'react'
import { Button } from 'react-bootstrap';

const WeartherButton = ({cities, setCity, handleCityChange}) => {
    console.log('cities',cities)
  return (
    <div className="weatherBtnBox">
        <Button 
            variant={`${setCity == "" ? "dark" : "secondary"}`} 
            onClick={()=>handleCityChange("current")}>
            Current Location
        </Button>
        {cities.map((item,idx)=>(
            <Button 
            variant={`${setCity == item ? "dark" : "secondary"}`} 
            key={idx}
            onClick={()=>handleCityChange(item)}>
            {item}</Button>
        ))}
    </div>
  )
}

export default WeartherButton