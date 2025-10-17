// app/(private)/home/admin/invernaderos/zonas/page.tsx
import { Suspense } from 'react'
import ZonasPageContent from './zonas-content'

export default function Page() {
  return (
    <Suspense fallback={<div>Cargando zonas...</div>}>
      <ZonasPageContent />
    </Suspense>
  )
}
