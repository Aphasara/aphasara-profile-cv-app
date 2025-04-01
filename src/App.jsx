import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import Profile from './views/Profile'

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App