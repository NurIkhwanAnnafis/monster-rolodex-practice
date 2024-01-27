import App from './App/App'
import App2 from './App/AppV2'
import ContextProvider from './App/context/ContextProvider'

const index = () => {
  return (
    <ContextProvider>
      <App />
      <App2 />
    </ContextProvider>
  )
}

export default index