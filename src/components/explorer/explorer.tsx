import { VStack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export default function Explorer () {
    return (
        <VStack h='calc(100vh)' w='100%' alignItems='left'>
            <Text>main.cpp</Text>
            <Text>loader.hpp</Text>
        </VStack>
    );
}