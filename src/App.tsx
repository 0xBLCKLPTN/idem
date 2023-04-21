import React from 'react';
import { VStack, HStack, Button} from '@chakra-ui/react';

import CodeEditor from './components/code_editor';
import Toolpanel from './components/toolpanel';

function App() {
  return (
    <HStack backgroundColor='#D9D9D9'>
      < Toolpanel />
      <CodeEditor/>
    </HStack>
  );
}

export default App;
