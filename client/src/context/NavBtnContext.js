import { useState, createContext } from 'react';

const NavBtnContext = createContext();

export const NavBtnProvider = ({ children }) => {
  const [selectedNavBtn, setSelectedNavBtn] = useState('map');

  return (
    <NavBtnContext.Provider
      value={{
        selectedNavBtn,
        setSelectedNavBtn,
      }}
    >
      {children}
    </NavBtnContext.Provider>
  );
};

export default NavBtnContext;
