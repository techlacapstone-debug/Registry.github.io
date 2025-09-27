import React from 'react'
import Landingpage from './pages/Landingpage'

import Navbar from './components/navigation'
import { Home } from 'lucide-react'

import './styles/global.css'


function App() {

  return (
    <>
      <div>
          <Navbar />
      </div>
      <div>
          <Landingpage />  
      </div>
    </>
  )
}

export default App
