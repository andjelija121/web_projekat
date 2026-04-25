import React from 'react'

function AutorKartica({ autor }) {
  console.log(autor)
  return (
    <div className='grid grid-cols-[60%_40%] grid-rows-[70%_30%] gap-3 items-center bg-bela py-5 px-5 rounded-2xl h-50 w-96'>
      <img className='h-25 w-25 object-cover rounded-2xl col-start-1 row-start-1' src={autor.slike[0]}/>
     
        
      <div className='col-start-1 row-start-2'>

       <p className='font-bold text-xl'>
          {autor.ime} {autor.prezime}
        </p>
      </div>

        <div className='row-end-3 flex flex-col gap-2 h-full justify-around col-start-2 row-start-1 '>
          <div className='flex flex-col'>
          <p className='text-lg font-bold text-dark-coffee-950'>
            {autor.broj_nagrada}
          </p>
          <span className='text-sm text-dark-coffee-600'>
            Nagrade
          </span>
          </div >
          <div className='flex flex-col'>
          <p className='text-lg font-bold text-dark-coffee-950'>
            {autor.broj_prodatih_primeraka}
          </p>
          <span className='text-sm text-dark-coffee-600'>
            Prodati Primerci
          </span>
          </div>
          <div className='flex flex-col'>
            <span className='text-lg font-bold text-dark-coffee-950' >

            {autor.status}
            </span>
            <span className='text-sm text-dark-coffee-600'>
              Status
            </span>
          </div>
        </div>
      
    </div>
  )
}
export default AutorKartica

