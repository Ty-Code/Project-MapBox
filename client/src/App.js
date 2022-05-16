import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapPage from './pages/MapPage.js';
import { LocationProvider } from './context/LocationsContext';
import { SelectedLocationProvider } from './context/SelectedLocationsContext';
import { NewPinProvider } from './context/NewPinContext';
import FavoritesPages from './pages/FavoritesPages';
import NavBar from './components/Navbar';
import { NavBtnProvider } from './context/NavBtnContext';

function App() {
  return (
    <BrowserRouter>
      <NavBtnProvider>
        <NavBar />

        <LocationProvider>
          <NewPinProvider>
            <SelectedLocationProvider>
              <Routes>
                <Route path="/" element={<MapPage />} />
                <Route path="/favorites" element={<FavoritesPages />} />
              </Routes>
            </SelectedLocationProvider>
          </NewPinProvider>
        </LocationProvider>
      </NavBtnProvider>
    </BrowserRouter>
  );
}

export default App;
