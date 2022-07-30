import React from 'react'
import { useSelector } from 'react-redux'
import GrandSonBox from './GrandSonBox'

const Box = () => {
    let count2 = useSelector((state)=>state.count);
  return (
    <div>
        여긴 Box count  {count2}
        <GrandSonBox />
    </div>
  )
}

export default Box