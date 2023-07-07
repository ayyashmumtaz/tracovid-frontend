
import Navbar from './components/Navbar';
import Homepage from './page/Homepage';
import AboutPage from './page/AboutPage';
import IndonesiaPage from './page/IndonesiaPage';
import ProvinsiPage from './page/ProvinsiPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/indonesia" element={<IndonesiaPage />} />
      <Route path="/provinsi" element={<ProvinsiPage />} />
    </Routes>
    </BrowserRouter>

  );
  
}

export default App
