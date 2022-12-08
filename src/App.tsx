
import { ChakraProvider } from '@chakra-ui/react'

import MainProvider from './hooks'

import Home from './page'

export default function App() {
  return (
    <MainProvider>
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </MainProvider>
  )
}