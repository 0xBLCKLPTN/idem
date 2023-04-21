import React from 'react';
import { VStack, HStack, Button} from '@chakra-ui/react';

import Explorer from './components/explorer/explorer';
import CodeEditor from './components/code_editor';

function App() {
  return (
    <HStack backgroundColor='grey'>
      <Explorer />
      <CodeEditor />
    </HStack>
  );
}

export default App;
