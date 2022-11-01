import React from 'react'

export default function Descripcion(props) {
    let {descripcion} = props
  return (
    <div className="description m-15 wrap">
        <p>
            {descripcion}
        </p>
    </div>
  )
}
