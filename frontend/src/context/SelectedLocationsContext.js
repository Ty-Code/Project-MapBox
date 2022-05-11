import { createContext, useState } from 'react';

const SelectedLocationsContext = createContext();

export const SelectedLocationProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <SelectedLocationsContext.Provider
      value={{
        selectedLocation,
        setSelectedLocation,
      }}
    >
      {children}
    </SelectedLocationsContext.Provider>
  );
};

export default SelectedLocationsContext;
