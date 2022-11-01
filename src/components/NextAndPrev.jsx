import React from 'react'

export default function NextAndPrev(props) {
  let {verbo} = props
  let {onClick} = props
  console.log(props);
  return (
    <p className="m-10 bg-dark" onClick={onClick} > {verbo} </p>
  )
}
