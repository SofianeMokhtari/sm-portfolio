import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    Button,
    useDisclosure,
    useColorModeValue,
    useColorMode,
    Stack,
    Avatar,
    useMediaQuery
  } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { MotionAvatar, MotionLink } from './Motion';
  
  const Links = [{text:'Mon expérience', url: "/#experience"}, {text:'Mes projets', url: "/#project"}, {text: 'Me contacter', url: "/#contact"}];
  
  const NavLink = ({ children, url }) => (
    <MotionLink
        whileHover={{ scale: 1.2, textDecoration: "underline" }}
        whileTap={{ scale: 1.1, textDecoration: "underline" }}
        color="white"
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
        }}
        href={`${url}`}>
      {children}
    </MotionLink>
  );
  
const Nav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    
    const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
  
    return (
      <>
        <Box bg={useColorModeValue('#00B0FF', 'blue.200')} px={4} position="fixed" w="100%" zIndex="1">
          <Flex h={16} alignItems={'center'} justifyContent="space-between">
            {isLargerThan1000 && 
              <NavLink url="#">
                  <MotionAvatar
                    whileHover={{scale: 1.1}}
                    whileTap={{ rotate: 360, transition: { duration: 0.8 } }}
                    className="nav-avatar"
                    size={'sm'}
                    src={
                      '/images/sofiane-mokhtari.jpg'
                    }
                  />
              </NavLink>
            }
          
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <NavLink key={link.text} url={link.url}>{link.text}</NavLink>
                ))}
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
            </Flex>
          </Flex>
  
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link.text} url={link.url}>{link.text}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </>
    );
  }

export default Nav