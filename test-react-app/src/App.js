import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import main from './main.json';
import bis from './bis.json'
import presentation from './presentation.json'
import { LeftNav } from './Components/LeftNav/LeftNav';
import { Route, Switch } from 'react-router-dom';

// possible URLS are prefrence, presentation and learning
// also noticed that front end and backend arent formnatted the same. they have no URL change and no LeftNav Cahange
// Documentation and getting statrted take you to the same place?

function App() {
  return (
    <div className="App">
      <header className='header'>
        <a className ='link' href="/presentation"> PRESENTATION</a>
        <a className ='link' href="/"> main </a>
        <a className ='link' href="/bis"> BIS</a>
      </header>
      <main>
        <Switch>
          <Route path='/' render={() => <LeftNav data={main}/>}/>
          <Route path='/presentation' render={() => <LeftNav data={presentation}/>}/>
          <Route path='/bis' render={() => <LeftNav data={bis}/>}/>
        </Switch>

        <div className='main'></div>
      </main>
    </div>
  );
};

export default App;
