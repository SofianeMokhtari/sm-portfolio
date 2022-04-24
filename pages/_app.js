import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import themeStyle from '../styles/theme'

const theme = extendTheme(themeStyle)

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp