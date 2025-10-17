import { Suspense } from "react";
import ZonasPage from "./ZonasPage";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center p-10 text-slate-500">Cargando zonas...</div>}>
      <ZonasPage />
    </Suspense>
  );
}
