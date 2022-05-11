import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapPage from './pages/MapPage.js';
import { LocationProvider } from './context/LocationsContext';

function App() {
  return (
    <BrowserRouter>
      <LocationProvider>
        <Routes>
          <Route path="/" element={<MapPage />} />
        </Routes>
      </LocationProvider>
    </BrowserRouter>
  );
}

export default App;
