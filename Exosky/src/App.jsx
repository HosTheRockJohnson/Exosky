import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Planet from './pages/PlanetPage'
import Map from './pages/Map'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/planet" element={< Planet />} />
        <Route path="/map" element={< Map />} />
      </Routes>
    </BrowserRouter>
  )
}


