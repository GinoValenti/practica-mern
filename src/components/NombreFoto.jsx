import React from 'react'

export default function NombreFoto(props) {
let{nombre,foto} = props
  return (
    <div>
        <h2>{nombre}</h2>
        <img src={foto} alt=""></img>
    </div>
  )
}
