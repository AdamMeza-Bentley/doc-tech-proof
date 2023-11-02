import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import treeData from './tree.json';
import { LeftNav } from './Components/LeftNav/LeftNav';
import { Link, NavLink } from 'react-router-dom';

// possible URLS are prefrence, presentation and learning
// also noticed that front end and backend arent formnatted the same. they have no URL change and no LeftNav Cahange
// Documentation and getting statrted take you to the same place?

function App() {
  return (
    <div className="App">
        <LeftNav data={treeData}/>
        <div className='main'>
          <button>Switch Content</button>        
        </div>
    </div>
  );
};

export default App;
