import React from 'react'
import {CssBaseline} from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './views/profile'

export default function () {
  return (
    <>
    <CssBaseline />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}