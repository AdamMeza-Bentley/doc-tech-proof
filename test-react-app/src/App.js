import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import treeData from './tree.json';
import { LeftNav } from './Components/LeftNav/LeftNav';
import { Link, NavLink } from 'react-router-dom';

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
