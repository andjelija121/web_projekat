import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data.json'
import Ocene from '../komponente/Ocene';
import AutorOpis from '../komponente/AutorOpis';

function AutorDetalji() {
  let {autorId} = useParams();
  let autor = Object.values(data.autori)[autorId]
  let [rating,setRating] = useState(0);
  console.log(autor)
  let statusBoje = {
  'Преминуо': 'bg-gray-500',
  'У пензији': 'bg-red-600',
  'Активан': 'bg-green-400'
}
  console.log(statusBoje[autor.status])
  return (
    <div className='px-15 pt-15 flex flex-col h-screen overflow-hidden'>
      <div className='flex justify-between '>
          <div className='flex flex-col gap-3 items-start'>

                <span className={`${statusBoje[autor.status]} py-2 px-4 text-bela tracking-wide rounded-4xl`} >{autor.status}</span>
                
                <div className='flex items-center gap-15'>
                <p className='text-6xl font-bold tracking-wide '>{autor.ime} {autor.prezime}</p>
                <div className='flex items-center gap-2'>
                  <span className='text-5xl'>4.7</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#443022" className="size-17">
  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
</svg>

                </div>
                </div>
          </div>
          <Ocene rating={rating} setRating={setRating}/>
      </div>
      <div className='mt-40 flex-1 min-h-0'>
          <AutorOpis autor={autor} autorId={autorId}/>

      </div>
    </div>
  )
}

export default AutorDetalji