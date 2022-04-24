import { useColorModeValue, Box,Wrap, Flex, Stack, Button, Divider, Container, useMediaQuery } from '@chakra-ui/react'
import Waves from '../components/Waves'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import TextReveal from '../components/TextReveal'
import CodePresentation from "../components/CodeBlock"
import Nav from "../components/Navbar"
import Me from "../components/Me"
import { useEffect, useState } from 'react'

//import styles from '../styles/Home.module.css'

export default function Home() {
  const color = useColorModeValue("blue.50", "blue.800")
  const borderColor = useColorModeValue("black", "white")
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
      setMounted(true)
  }, [])

  return (
    mounted &&
    <>
      <Flex bg={color} w="100%" h="100vh" display="flex"
        flexDirection="column"
        justifyContent="space-between">
      <Nav />
      <Flex id="accueil" justifyContent="center" position="relative" top="15%" alignItems="center">
          <Box>
            <TextReveal textValue={["MOKHTARI Sofiane", "Développeur frontend", "En cours de développement"]}/>
            <Box p="25px">
            <Stack direction='row' spacing={4}>
              <Button rightIcon={<ArrowForwardIcon />} colorScheme='black' variant='outline'>
              À propos de moi
              </Button>
              <Button colorScheme="green" variant='solid'>
              Mon CV
              </Button>
            </Stack>
            </Box>
          </Box>
        {isLargerThan1000 && 
        <>
          <Box>
            <Divider orientation='vertical' h="250px" borderColor={borderColor} borderLeftWidth="3px" ml="50px" mr="25px" />
          </Box>
          <CodePresentation />
        </>
        
        }
      </Flex>  
      <Waves/>    
    </Flex>        
    {/* <Me /> */}
    </>

  )
}
