import { createContext, useState } from 'react';

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [context, setContext] = useState({ value: 'год', returnValue: 'существительное', case: 'р'  });

  return (
    <MainContext.Provider value={[context, setContext]}>
      {children}
    </MainContext.Provider>
  )
};