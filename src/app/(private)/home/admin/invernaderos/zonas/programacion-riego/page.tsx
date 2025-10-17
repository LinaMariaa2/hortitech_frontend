import { Suspense } from 'react'
import ProgramacionRiego from './programacion-content'

export default function Page() {
  return (
    <Suspense fallback={<div>Cargando Porgramaciones...</div>}>
      <ProgramacionRiego />
    </Suspense>
  )
}