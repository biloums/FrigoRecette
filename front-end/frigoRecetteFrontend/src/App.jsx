import { useState } from 'react'
import './App.css'
import { Recette } from './composants/Recette'
import { Produit } from './composants/Produit'
import { RecetteDisponible } from './composants/RecetteDisponible'
import { MonFrigo } from './composants/MonFrigo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MonFrigo/>
    </>
  )
}

export default App
