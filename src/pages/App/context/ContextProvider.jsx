import React, { createContext } from 'react'
import { useModelList } from './ContextList'

export const AppContext = createContext(null);

const ContextProvider = (props) => {
  const context = {
    useModelList
  }

  return (
    <AppContext.Provider value={context}>
      {props.children}
    </AppContext.Provider>
  )
}

export default ContextProvider;