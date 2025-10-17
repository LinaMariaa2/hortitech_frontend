import { Suspense } from 'react'
import ProgramacionIluminacion from './programacion-content'

export default function Page() {
  return (
    <Suspense fallback={<div>Cargando Programaciones...</div>}>
      <ProgramacionIluminacion />
    </Suspense>
  )
}