import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import themeStyle from '../styles/theme'
import { useEffect, useState } from 'react'

const theme = extendTheme(themeStyle)

function MyApp({ Component, pageProps }) {
  
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
      setMounted(true)
  }, [])

  return (
    mounted && <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp