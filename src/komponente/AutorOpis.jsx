import React, { useState } from 'react'
import data from '../data.json'
import { NavLink } from 'react-router-dom';

function AutorOpis({autor,autorId}) {
    let [opcija,setOpcija] = useState("biografija")

    let nizKnjiga = Object.values(data.knjige);
    let knjige = nizKnjiga.map((el,i)=>({ ...el, id: i })).filter((el)=> el.id_autora===`autor${parseInt(autorId)+1}`)
    let sekcija = {
        "biografija":<Biografija tekst={autor.biografija} slike={autor.slike}/>,
        "karijera":<Karijera autor={autor}/>,
        "knjige":<Knjige knjige={knjige}/>,

    }

    const handleChange=(opt)=>{
        setOpcija(opt)
    }

    return (
    <div className='grid grid-cols-[20%_80%] h-full overflow-hidden'>
         <div className='flex flex-col gap-10 border-r-2 border-dark-coffee-400 h-[97%]'>
      {["biografija","karijera","knjige"].map((opt) => (
        <button
          key={opt}
          onClick={() => handleChange(opt)}
          className={`
            border-l-4 text-lg px-5 py-3 text-left transition-colors cursor-pointer
            ${opcija === opt 
              ? 'border-l-dark-coffee-900 font-semibold' 
              : 'border-l-dark-coffee-400 '
            }
          `}
        >
          {opt.charAt(0).toUpperCase() + opt.slice(1)}
        </button>
      ))}
    </div>

        <div className=' overflow-y-auto h-full pb-10 px-5 '>
            {sekcija[opcija]}
        </div>
    </div>
  )
}


function Biografija({tekst,slike}){
    return <div className='grid grid-cols-[1fr_400px] gap-18'>

         <p className='text-lg leading-10 text-dark-coffee-700'>
            {tekst}
        </p>
        <img src={slike[0]} className='aspect-3/4 rounded-xl object-cover '/>
    </div>
}


function Karijera({autor}){
    return <div className='flex flex-col '>
        <div className='flex items-center justify-between border-b-2 border-dark-coffee-400 px-2 pb-8 '>
            <p className=' text-3xl text-dark-coffee-700'>
                Датум рођења
            </p>
            <span className='font-bold text-xl'>{autor.datum_rodjenja}</span>
        </div>
        <div className='flex items-center justify-between border-b-2 border-dark-coffee-400  px-2 py-8'>
            <p className=' text-3xl text-dark-coffee-700'>
                Број освојених награда током каријере:
            </p>
            <span className='font-bold text-xl'>{autor.broj_nagrada}</span>
        </div>
        <div className='flex items-center justify-between border-b-2 border-dark-coffee-400 px-2 py-8'>
            <p className=' text-3xl text-dark-coffee-700'>
                Укупан број продатих примерака свих књига
            </p>
            <span className='font-bold text-xl'>{autor.broj_prodatih_primeraka}</span>
        </div>
        <div className='flex items-center justify-between border-b-2  border-dark-coffee-400 px-2 py-8'>
            <p className=' text-3xl text-dark-coffee-700'>
                Котакт телефон менаџeра
            </p>
            <span className='font-bold text-xl'>{autor.kontakt_telefon_menadzera}</span>
        </div>
    </div>
}


function Slike({slike}){
    return <div className='grid grid-cols-2 gap-10'>
        {slike.map((img,index)=>(
            <img key={index} src={img} className='object-fit '/>
        ))}
    </div>
}

function Knjige({ knjige }) {
  return (
    <div className='grid grid-cols-2 gap-3'>
      {knjige.map((k, i) => (
        <NavLink key={i} to={`/knjige/${k.id}`}>

        <div key={i} className='bg-bela border border-dark-coffee-400 rounded-xl p-4'>
          <p className='font-semibold text-braon'>{k.naziv}</p>
          <p className='text-sm text-dark-coffee-500 mt-1'>{k.godina}</p>
        </div>
        </NavLink>
      ))}
    </div>
  );
}

export default AutorOpis;