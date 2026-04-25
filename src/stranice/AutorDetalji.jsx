import React from 'react'
import { useParams } from 'react-router-dom'

function AutorDetalji() {
  let {autorId} = useParams();
  return (
    <div>
        <p>{autorId} Autor</p>
    </div>
  )
}

export default AutorDetalji