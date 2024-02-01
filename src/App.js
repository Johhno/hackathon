import React, {useEffect} from 'react';
import Character from './Character';
import { Refresh } from './Refresh';
import Metadata from './Metadata';

function App() {

  useEffect(() => {

  }, [])


  return (<>
    <Metadata />
    <Refresh />
    <Character /></>
  );
}

export default App;
