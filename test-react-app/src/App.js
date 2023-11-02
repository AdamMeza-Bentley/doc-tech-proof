import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import treeData from './tree.json';
import { LeftNav } from './Components/LeftNav/LeftNav';

function App() {
  return (
    <div className="App">
      <LeftNav data={treeData}/>
      <main className='main'>
        <div>
          DISPLAY CONTENT GOES HERE
        </div>
      </main>
    </div>
  );
}

export default App;
