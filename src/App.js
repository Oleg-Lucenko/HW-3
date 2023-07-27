import React from 'react';
import { useState } from 'react';
import './App.css';
import Comments from './components/Comments';
import Box from './components/Box.jsx';

function App() {

  const [colorStatus, changeColorStatus] = useState(false);
  const [boxStatus, changeBoxStatus] = useState(true);



  return (
    <div className="App">

      {boxStatus &&  <Box colorStatus={colorStatus} changeColorStatus={changeColorStatus} />}
      <button onClick={() => changeBoxStatus(!boxStatus)} className='delete-button'>Toggle element</button>
      <Comments colorStatus={colorStatus} />

    </div>
  );
}

export default App;
