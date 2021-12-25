import App from './App/App'
import ContextProvider from './App/context/ContextProvider'

const index = () => {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  )
}

export default index