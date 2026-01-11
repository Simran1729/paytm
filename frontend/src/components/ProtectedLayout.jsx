import React from 'react'
import PrivateRoute from './PrivateRoute'
import Appbar from './Appbar'
import { Outlet } from 'react-router-dom'

function ProtectedLayout() {
  return (
    <PrivateRoute>
        <Appbar/>
        <Outlet/>
    </PrivateRoute>
  )
}

export default ProtectedLayout