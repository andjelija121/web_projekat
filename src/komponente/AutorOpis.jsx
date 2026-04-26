import React, { useState } from 'react'
import data from '../data.json'

function AutorOpis({autor,autorId}) {
    let [opcija,setOpcija] = useState("biografija")

    let nizKnjiga = Object.values(data.knjige);
    let knjige = nizKnjiga.filter((el)=> el.id_autora===`autor${parseInt(autorId)+1}`)
    let sekcija = {
        "biografija":<Biografija tekst={autor.biografija}/>,
        "karijera":<Karijera autor={autor}/>,
        "slike":<Slike slike={autor.slike}/>,
        "knjige":<Knjige knjige={knjige}/>,

    }

    const handleChange=(opt)=>{
        setOpcija(opt)
    }

    return (
    <div className='grid grid-cols-[30%_70%] h-full overflow-hidden'>
         <div className='flex flex-col gap-10'>
      {["biografija","karijera","slike","knjige"].map((opt) => (
        <button
          key={opt}
          onClick={() => handleChange(opt)}
          className={`
            border-l-4 text-base px-5 py-3 text-left transition-colors
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

        <div className='p-5 overflow-y-auto h-full'>
            {sekcija[opcija]}
        </div>
    </div>
  )
}


function Biografija({tekst}){
    return <p>
        {tekst}
    </p>
}


function Karijera({autor}){
    return <div className='flex flex-col items-strech justify-around h-full'>
        <div className='flex items-center justify-between border-b-2 border-dark-coffee-400 px-2 py-8 '>
            <p className=' text-3xl'>
                Датум рођења
            </p>
            <span className='font-bold text-xl'>{autor.datum_rodjenja}</span>
        </div>
        <div className='flex items-center justify-between border-b-2 border-dark-coffee-400  px-2 py-8'>
            <p className=' text-3xl'>
                Број освојених награда током каријере:
            </p>
            <span className='font-bold text-xl'>{autor.broj_nagrada}</span>
        </div>
        <div className='flex items-center justify-between border-b-2 border-dark-coffee-400 px-2 py-8'>
            <p className=' text-3xl'>
                Укупан број продатих примерака свих књига
            </p>
            <span className='font-bold text-xl'>{autor.broj_prodatih_primeraka}</span>
        </div>
        <div className='flex items-center justify-between border-b-2  border-dark-coffee-400 px-2 py-8'>
            <p className=' text-3xl'>
                Котакт телефон менаџera
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
    <div>
      {knjige.map((k, i) => (
        <p key={i}>{k.naziv}</p>
      ))}
    </div>
  );
}

export default AutorOpis