import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { About } from "../pages/About"
import { Details } from "../pages/Details"
import { EcologicalAttractions } from "../pages/EcologicalAttractions"
import { HistoricAttractions } from "../pages/HistoricAttractions"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/attractions/eco" element={<EcologicalAttractions />} />
      <Route path="/attractions/historic" element={<HistoricAttractions />} />
    </Routes>
  )
}
