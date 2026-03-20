import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TextInput from './components/TextInput'
import './App.css'

function App() {

  const [nombre, setNombre] = useState("")
  const [edad, setEdad] = useState(0)
  const [carnet, setCarnet] = useState("")

  return (
    <>
      <div className='justify-content-center mainDiv p-3'>
        <h1><b>Registro de Estudiantes</b></h1>
        <TextInput 
        labelText={"Nombre"}
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        type="text"
        id={"nombre"}
        />
      </div>
    </>
  )
}

export default App
