import React from 'react'
import './index.css'
import Home from './pages/Home/Home'
import GoToTop from './components/GoToTop'
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <GoToTop />
      <AppRoutes />
    </>
  )
}

export default App