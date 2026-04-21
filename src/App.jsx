import { BrowserRouter, Routes,Route, Navigate } from "react-router-dom"
import AppKostur from "./layout/AppKostur"
import Autori from "./stranice/Autori"
import AutoriAdmin from "./stranice/AutoriAdmin"

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route element={<AppKostur/>}> 
              <Route index element={<Navigate to="/autori" replace />}/>
              <Route path='/autori' element={<Autori/>}/>
              <Route path='/autoriAdmin' element={<AutoriAdmin/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
