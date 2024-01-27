import React, { createContext } from 'react'
import { useModelList } from './ContextList'

export const AppContext = createContext(null);

const ContextProvider = (props) => {
  const value = useModelList();

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default ContextProvider;