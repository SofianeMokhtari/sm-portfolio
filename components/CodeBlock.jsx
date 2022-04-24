import { CopyBlock, dracula, obsidian } from "react-code-blocks";
import { Box, useColorModeValue, Divider } from "@chakra-ui/react";

const CodePresentation = () => {
    
    const theme = useColorModeValue(dracula, obsidian)

    let code = `const Presentation = () => {
          return (
            <div>
              <h1>Mokhtari Sofiane</h1>
              <p>21 ans</p>
              <textarea>
              Lorem Ipsum is simply dummy text of the printing 
              Lorem Ipsum has been the industry's standard dummy
              </textarea>
            </div>
          );
      }
      
      export default Presentation`

    return (
        <Box w="575px" padding="20px">
            <CopyBlock
                showLineNumbers={false}
                text={code}
                language="jsx"
                theme={theme}
                codeBlock
            />
        </Box>
    );
  }

export default CodePresentation