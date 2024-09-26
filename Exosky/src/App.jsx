import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Planet from './pages/PlanetPage';
import Map from './pages/Map';
import NotFoundPage from './pages/NotFoundPage';
import Render from './pages/render';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/planet/:planetId" element={<Planet />} />
        <Route path="/map" element={<Map />} />
        <Route path='render' element={<Render />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}