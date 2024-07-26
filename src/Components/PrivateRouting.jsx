import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'


const PrivateRouting = () => {
    const token = useSelector((state)=> state?.Playlist?.token)
  return (
    <>{!token ? <Navigate to={"/"}/> : <Outlet/>}</>
  )
}

export default PrivateRouting

