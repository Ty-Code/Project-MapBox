import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapPage from './pages/MapPage.js';
import { LocationProvider } from './context/LocationsContext';
import { SelectedLocationProvider } from './context/SelectedLocationsContext';

function App() {
  return (
    <BrowserRouter>
      <LocationProvider>
        <SelectedLocationProvider>
          <Routes>
            <Route path="/" element={<MapPage />} />
          </Routes>
        </SelectedLocationProvider>
      </LocationProvider>
    </BrowserRouter>
  );
}

export default App;
