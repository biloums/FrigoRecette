import React from 'react'
import { Recette } from './Recette'
import { Produit } from './Produit'
import { RecetteDisponible } from './RecetteDisponible'

export const MonFrigo = () => {
  return (
    <div>
        MonFrigo
        <Recette/>
        <Produit/>
        <RecetteDisponible/>
    </div>
  )
}
