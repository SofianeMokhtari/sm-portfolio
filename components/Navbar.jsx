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
    Avatar
  } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
  
  const Links = [{text:'Mon expérience', url: "#experience"}, {text:'Mes projets', url: "#project"}, {text: 'Me contacter', url: "#contact"}];
  
  const NavLink = ({ children, url }) => (
    <Link
        color="white"
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
        }}
        href={`${url}`}>
      {children}
    </Link>
  );
  
const Nav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
  
    return (
      <>
        <Box bg={useColorModeValue('#00B0FF', 'blue.200')} px={4} position="fixed" w="100%" zIndex="1">
          <Flex h={16} alignItems={'center'} justifyContent={{ md: 'space-between', sm: 'space-around'}}>
            <NavLink url="#">
                <Avatar
                  className="nav-avatar"
                  size={'sm'}
                  src={
                    '/images/sofiane-mokhtari.jpg'
                  }
                />
            </NavLink>
          
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
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </>
    );
  }

export default Nav