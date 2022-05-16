import { useState, createContext } from 'react';

const NewPinContext = createContext();

export const NewPinProvider = ({ children }) => {
  const [newPin, setNewPin] = useState(null);


  return (
    <NewPinContext.Provider
      value={{
        newPin,
        setNewPin,
      }}
    >
      {children}
    </NewPinContext.Provider>
  );
};

export default NewPinContext;
