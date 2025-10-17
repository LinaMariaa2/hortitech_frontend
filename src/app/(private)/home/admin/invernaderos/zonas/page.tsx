// app/(private)/home/admin/invernaderos/zonas/page.tsx
import { Suspense } from 'react'
import ZonasPage from './zonas-content'

export default function Page() {
  return (
    <Suspense fallback={<div>Cargando zonas...</div>}>
      <ZonasPage />
    </Suspense>
  )
}
