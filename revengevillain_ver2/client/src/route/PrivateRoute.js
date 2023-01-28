import React from 'react'
import { Navigate } from 'react-router-dom'
import InputBox from '../components/InputBox'
import { useSelector } from 'react-redux'

const PrivateRoute = () => {
  const authenticate = useSelector((state) => state.auth.authenticate);
  return authenticate == true ? <InputBox /> : <Navigate to="/adminLogin" />;
}

export default PrivateRoute