import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextInput from './components/TextInput'
import Button from './components/Button'

function App() {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(0)


  const limpiar = () =>{
    setNum1(0)
    setNum2(0)
    setResult(0)
  }
  
  const [tarea, setTarea] = useState("")
  const [listadoTareas, setListadoTareas] = useState([]);

  const sumar = () =>{
    let suma = parseFloat(num1) + parseFloat(num2)
    setResult(suma)
  }

  const restar = () =>{
    let resta = parseFloat(num1) - parseFloat(num2)
    setResult(resta)
  }

  const multiplicar = () =>{
    let multp = parseFloat(num1) * parseFloat(num2)
    setResult(multp)
  }

  const dividir = () =>{
    let division = parseFloat(num1) / parseFloat(num2)
    setResult(division)
  }

  const agregarTarea = () =>{
    if(tarea.trim() !== ""){
      setListadoTareas([...listadoTareas, tarea]);
      setTarea("")
      console.log(listadoTareas)
    }
  }

  const eliminarTarea =(index) =>{
    const nuevasTareas = listadoTareas.filter((_, i) => i !== index);
    setListadoTareas(nuevasTareas);
  }

  return (
    <>
    <h1>Operaciones con dos números</h1>
    <TextInput 
    labelText="Primer número" 
    value={num1}
    onChange={(e) => setNum1(e.target.value)} 
    type="number"
    id="num1"
    />
    <TextInput 
    labelText="Segundo número" 
    value={num2} 
    onChange={(e) => setNum2(e.target.value)} 
    type="number"
    id="num2"
    />
    <div className='d-flex justify-content-center gap-3'>
    <Button 
    label={"Sumar"} 
    onClick={sumar}
    />
    <Button 
    label={"Restar"} 
    onClick={restar}
    />
    <Button 
    label={"Multiplicar"} 
    onClick={multiplicar}
    />
    <Button 
    label={"Dividir"} 
    onClick={dividir}
    />
    </div>
    <div className='d-flex justify-content-center gap-3 mt-4'>
    <Button 
    label={"Limpiar"} 
    onClick={limpiar}
    />
    </div>
    
    <h2 className='mt-4'>Resultado: {result}</h2>

    <hr className='mt-5'></hr>

    <h1>TO DO LIST:</h1>

    <TextInput
    labelText={"Ingrese tarea"}
    value={tarea}
    onChange={(e)=> setTarea(e.target.value)}
    type={"text"}
    />
    <div className='d-flex justify-content-center gap-3'>

    </div>
    <Button
    label={"Agregar tarea"}
    onClick={agregarTarea}
    />

    <ol className='list-group list-group-numbered mt-4'>
      {listadoTareas.map((tarea, index) =>(
        <li className='list-group-item' key={index}>{tarea} <Button label={"✓"} onClick={() => eliminarTarea(index)}></Button></li>
      ))}
    </ol>
    </>
  )
}

export default App
