
import Navbar from './components/Navbar';
import Homepage from './page/Homepage';
import AboutPage from './page/AboutPage';
import IndonesiaPage from './page/IndonesiaPage';
import ProvinsiPage from './page/ProvinsiPage';
import store from './store/store';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/indonesia" element={<IndonesiaPage />} />
          <Route path="/provinsi" element={<ProvinsiPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );

}

export default App
