import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'

const Main = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Main