import { HStack, VStack, Text, TabIndicator, useColorModeValue} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useState } from "react";
import Explorer from "./explorer/explorer";
export default function Toolbar () {

    return (
        <HStack w='100%'>
            <Tabs size='md' variant='enclosed'>
                <TabList>
                    <Tab _selected={{ bg: '#D9D9D9'}}>Explorer</Tab>
                    <Tab _selected={{ bg: '#D9D9D9'}} isDisabled>Git</Tab>
                    <Tab _selected={{ bg: '#D9D9D9'}} isDisabled>Docs</Tab>
                    <Tab _selected={{ bg: '#D9D9D9'}} isDisabled>Chat</Tab>
                </TabList>
                <TabIndicator bg='D9D9D9' />
                
                <TabPanels>
                    <TabPanel><Explorer/></TabPanel>
                </TabPanels>
            </Tabs>
        </HStack>
    );
}