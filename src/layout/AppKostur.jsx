import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../komponente/Sidebar'

function AppKostur() {
  return (
    <div className='flex h-screen bg-braon font-OpenSana'>
        <Sidebar/>
        <main className=' overflow-y-auto flex-1 rounded-2xl bg-svetla text-dark-coffee-950 '>
            <Outlet/>
        </main>
    </div>
  )
}

export default AppKostur