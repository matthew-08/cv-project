/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { PersonalDetails, PersonalDetailsOut } from './components/PersonalDetails';

function App() {


  return (
    <div className="App">
      <div className="input-information-container">
        <PersonalDetails />
      </div>
    </div>
  );
}

export default App;
