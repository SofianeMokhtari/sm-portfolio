import { useColorModeValue, Box,Wrap, Flex, Stack, Button, Divider, Container, useMediaQuery } from '@chakra-ui/react'
import Waves from '../components/Waves'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import TextReveal from '../components/TextReveal'
import CodePresentation from "../components/CodeBlock"
import Nav from "../components/Navbar"
import Me from "../components/Me"
import { MotionButton } from '../components/Motion'

//import styles from '../styles/Home.module.css'

export default function Home() {
  const color = useColorModeValue("blue.50", "blue.800")
  const borderColor = useColorModeValue("black", "white")
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')

  return (
    <>
      <Flex bg={color} w="100%" h="100vh" display="flex"
        flexDirection="column"
        justifyContent="space-between">
      <Nav />
      <Flex id="accueil" justifyContent="center" position="relative" top="15%" alignItems="center" mb="15px">
          <Box>
            <TextReveal textValue={["MOKHTARI Sofiane", "Développeur frontend", "En cours de développement"]}/>
            <Box p="25px">
            <Stack direction='row' spacing={4}>
              <MotionButton whileHover={{scale: 1.1}}  whileTap={{ scale: 0.8 }} rightIcon={<ArrowForwardIcon />} colorScheme='black' variant='outline'>
              À propos de moi
              </MotionButton>
              <MotionButton whileHover={{scale: 1.1}}  whileTap={{ scale: 0.8 }} colorScheme="green" variant='solid'>
              Mon CV
              </MotionButton>
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
