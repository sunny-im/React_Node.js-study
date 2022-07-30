import React from 'react'
import { useSelector } from 'react-redux'

const GrandSonBox = () => {
    let count3 = useSelector((state)=>state.count);
  return (
    <div>props없어도 가져올수있다 ! {count3}</div>
  )
}

export default GrandSonBox