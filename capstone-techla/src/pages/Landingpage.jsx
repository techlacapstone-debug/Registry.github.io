import React from 'react'
import Banner from '../components/banner'
import Initiiative from '../components/initiiative'

function Landingpage() {
  return (
    <div className='h-screen bg-[#F2F5FF] grid gap-2'>
        <Banner />
        <div>
          <Initiiative />
        </div>
    </div>
  )
}

export default Landingpage