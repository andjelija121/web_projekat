import React from 'react'
import AutorKartica from '../komponente/AutorKartica'
import { NavLink } from 'react-router-dom'
import data from '../data.json'


function Autori() {
  const autori = Object.values(data.autori)
  return (
    <div className='grid grid-cols-3 justify-items-center items-cente gap-4'>{autori.map((autor,index)=>(
      <NavLink key={index} to={`/autori/${index}`}>

        <AutorKartica autor={autor}/>
      </NavLink>
    ))}
    </div>
  )
}

export default Autori