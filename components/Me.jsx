import { Box, useColorModeValue, Text } from "@chakra-ui/react";
import Anchor from "./Anchor";

const Me = () => {
    
  const color = useColorModeValue("radial-gradient(circle, #dde8ed 0%, #62cfffeb 100%);", "radial-gradient(rgba(0,176,255,1) 20%, #002b3f 100%);")
    return (
        <>
            <Box id="experience" h="calc(100vh - 64px)" bg={color}>
                <Text>test</Text>
                <Text>test</Text><Text>test</Text>
                <Text>test</Text>
                <Text>test</Text>
                <Text>test</Text>
            </Box>
        </>
        
    );
  }

export default Me