import React from 'react';
import { useState } from 'react';
import './App.css';
import OurComponent from './components/OurComponent';

// import UpdateState from './components/state/UpdateState';
// import Props from './components/props/Props';
// import Lifecycle from './components/lifecycle/Lifecycle';

const App = () => {

  const [visible,setVisible] = useState(true);

  return (
    <div className="App">
      <h1>Sample App</h1>
      {/* <UpdateState /> */}
      {/* <Props /> */}
      {/* <Lifecycle /> */}
      <button onClick={ () => {setVisible(!visible)} }>Toggle Me!</button>
      { visible && <OurComponent thing1="a character from a cartoon"/>}
    </div>
  );
};

export default App;
