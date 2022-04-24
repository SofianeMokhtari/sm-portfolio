import { Flex, Text, useColorModeValue, Icon } from "@chakra-ui/react";
import Nav from "../components/Navbar";
import { WarningIcon } from '@chakra-ui/icons'

const NotFound = ({}) => {
  const bgColor = useColorModeValue("blue.50", "blue.800")
  const color = useColorModeValue("black", "white")

  return (
      <>
        <Nav />
        <Flex bg={bgColor} h="100vh" justifyContent="center" alignItems="center">
            <Icon as={WarningIcon} variant="outline" padding="2" boxSize={150} />
            <Text fontSize="6xl" color={color} ml="35px">
                La page n'existe pas
            </Text>
        </Flex>
      </>
      
  );
};
export default NotFound;