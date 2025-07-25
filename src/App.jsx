import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MainRoutes from './routes/MainRoutes'
import { useDispatch } from 'react-redux'
import { asyncGetProduct } from './store/actions/ProductAction'

const App = () => {
const dispatch = useDispatch()
  

  return (
    <main className='tracking-tight'>
      <Navbar/>
      <MainRoutes/>
    </main>
  )
}

export default App
