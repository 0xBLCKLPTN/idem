import { Textarea, Text} from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";


export default function CodeEditor() {
    const filename = 'main.cpp';
    const filedata = '#include <iostream>';

    return (
        <VStack w='100%'>
            <Text>{filename}</Text>
            <Textarea h='calc(90vh)'/>
        </VStack>
        
    );
}