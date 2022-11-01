import './index.css'
import NombreFoto from './components/NombreFoto'
import data from "./data/events1"
import NextAndPrev from './components/NextAndPrev'
import Descripcion from './components/Descripcion'
import { useState } from 'react'


function App() {

  let [mostrarInfo,setMostrarInfo] = useState(false)
  let [numeroACambiar,setNumeroACambiar] = useState(0)
  //el hook esta compuesto por dos elementos
  // el primer elemento es la variable que tiene que cambiar
  //el segundo es la funcion que va a modificar esa variable

  let ocultar = ()=>{
    setMostrarInfo (!mostrarInfo)
    console.log(mostrarInfo);
  }

let next = ()=>{
  console.log("esta actuando");
  if(data.length-1>numeroACambiar){
    setNumeroACambiar(++numeroACambiar)

  }else{
    setNumeroACambiar(0)
  }}
  let prev = ()=>{
    console.log("esta actuando");
    if(numeroACambiar>0){
      setNumeroACambiar(--numeroACambiar)
  
    }else{
      setNumeroACambiar(data.length-1)
    }
}

  return (
  
    <div className="card-data">
      <NombreFoto nombre={data[numeroACambiar].name} foto={data[numeroACambiar].image}/>
     
      <div className='d-flex' >
        <NextAndPrev verbo='anterior' onClick={prev}/>
<NextAndPrev verbo='siguiente' onClick={next}/></div>
        
{
  mostrarInfo ? 
  (
    <> 
  <Descripcion descripcion={data[numeroACambiar].description}/> 
<p className="m-10 bg-dark" onClick={ocultar}>Ocultar descripcion</p>
  </>
  ):
  (
<p className="m-10 bg-dark" onClick={ocultar}>Mostrar descripcion</p>
  )

}
      

   
      </div>
   
  
  )
}

export default App