import { BrowserRouter, Routes,Route, Navigate } from "react-router-dom"
import AppKostur from "./layout/AppKostur"
import Autori from "./stranice/Autori"
import AutoriAdmin from "./stranice/AutoriAdmin"
import KatalogKnjiga from "./stranice/KatalogKnjiga"
import KnjigaAdmin from "./stranice/KnjigaAdmin"
import PojedinacnaKnjiga from "./stranice/PojedinacnaKnjiga"

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route element={<AppKostur/>}> 
              <Route index element={<Navigate to="/autori" replace />}/>
              <Route path='/autori' element={<Autori/>}/>
              <Route path='/autoriAdmin' element={<AutoriAdmin/>}/>
              <Route index element={<Navigate to="/knjige" replace />}/>
              <Route path='/knjige' element={<KatalogKnjiga/>}/>
              <Route path='/knjigaAdmin' element={<KnjigaAdmin/>}/>
              <Route path='/pojedinacnaKnjiga' element={<PojedinacnaKnjiga/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
