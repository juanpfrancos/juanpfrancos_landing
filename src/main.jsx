import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { extendTheme, ChakraProvider} from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#2f2d33',
    800: '#E3FF39',
    700: '#ffffff',
  },
}

const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
