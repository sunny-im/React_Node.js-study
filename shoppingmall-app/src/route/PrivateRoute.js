import React from 'react'
import { Navigate } from 'react-router-dom'
import ProductDetail from '../page/ProductDetail'

const PrivateRoute = ({authenticate}) => {
  return (
    <div>
        {authenticate==true?<ProductDetail/>:<Navigate to="/login"/>}
    </div>
  )
}

export default PrivateRoute