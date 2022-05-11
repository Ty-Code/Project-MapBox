import { createContext, useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const LocationsContext = createContext();

export const LocationProvider = ({ children }) => {
  // const [locations, setLocations] = useState([]);

  const { data: locations } = useFetch('/locations');

  return (
    <LocationsContext.Provider
      value={{
        locations,
      }}
    >
      {children}
    </LocationsContext.Provider>
  );
};

export default LocationsContext;
