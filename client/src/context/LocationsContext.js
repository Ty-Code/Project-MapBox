import { createContext } from 'react';
import useFetch from '../hooks/useFetch';

const LocationsContext = createContext();

export const LocationProvider = ({ children }) => {
  const { data: locations, setData: setLocations, isError, isLoading } = useFetch('/locations');

 
  return (
    <LocationsContext.Provider
      value={{
        locations,
        setLocations,
        isError,
        isLoading

      }}
    >
      {children}
    </LocationsContext.Provider>
  );
};

export default LocationsContext;
