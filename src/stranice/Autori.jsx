import React from 'react'
import AutorKartica from '../komponente/AutorKartica'
import { NavLink } from 'react-router-dom'
import data from '../data.json'
import PretragaAutori from '../komponente/PretragaAutori'


function Autori() {
  const autori = Object.values(data.autori)
  return (
    <div className='p-10'>
      <div className='flex justify-between'>
        <h1 className='font-bold text-5xl mb-20'>
          Истражи ауторе
        </h1>
        <PretragaAutori/>
      </div>
      <div className='grid grid-cols-3 justify-items-center items-cente gap-2 gap-y-20'>{autori.map((autor,index)=>(
        <NavLink key={index} to={`/autori/${index}`}>

          <AutorKartica autor={autor}/>
        </NavLink>
      ))}
      </div>
    </div>
  )
}

export default Autori