import { BrowserRouter, Routes,Route, Navigate } from "react-router-dom"
import AppKostur from "./layout/AppKostur"
import Autori from "./stranice/Autori"
import AutoriAdmin from "./stranice/AutoriAdmin"
import KatalogKnjiga from "./stranice/KatalogKnjiga"
import KnjigaAdmin from "./stranice/KnjigaAdmin"
import PojedinacnaKnjiga from "./stranice/PojedinacnaKnjiga"
import AutorDetalji from "./stranice/AutorDetalji"

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route element={<AppKostur/>}> 
              <Route path='/autori' element={<Autori/>}/>
              <Route path='/autoriAdmin' element={<AutoriAdmin/>}/>
              <Route path='autori/:autorId' element={<AutorDetalji/>}/>
              <Route path='/knjige' element={<KatalogKnjiga/>}/>
              <Route path='/knjigaAdmin' element={<KnjigaAdmin/>}/>
              <Route path='knjige/:knjigaId' element={<PojedinacnaKnjiga/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
