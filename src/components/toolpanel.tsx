import { VStack, HStack, Text} from "@chakra-ui/react";
import Toolbar from "./toolbar";


export default function Toolpanel () {
    return (
        <VStack h='calc(100vh)' w='300px' backgroundColor='#BFBFBF'>
            <Toolbar />
        </VStack>
    );
}