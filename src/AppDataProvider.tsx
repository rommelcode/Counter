import React, { createContext } from 'react';

interface ICounter {
  count: number;
}

const MainContext = createContext<ICounter>(null);

const MainContextProvider: React.FC = ({ children }) => {
  return <MainContext.Provider>{children}</MainContext.Provider>;
};

export default MainContextProvider;
