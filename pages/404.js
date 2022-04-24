import { Flex, Text, useColorModeValue, Icon } from "@chakra-ui/react";
import React from "react";
import Nav from "../components/Navbar";
import { WarningIcon } from '@chakra-ui/icons'

const NotFound = ({}) => {
  const bgColor = useColorModeValue("blue.50", "blue.800")

  return (
      <>
        <Nav />
        <Flex bg={bgColor} h="100vh" justifyContent="center" alignItems="center">
            <Icon as={WarningIcon} colorScheme='black' variant='outline' padding="2" boxSize={150} />
            <Text fontSize="7xl" color="primary.500" ml="35px">
                La page n'existe pas
            </Text>
        </Flex>
      </>
      
  );
};
export default NotFound;