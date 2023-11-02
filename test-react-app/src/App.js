import './App.css';
import {useState, useEffect} from 'react';
import main from './main.json';
import bis from './bis.json'
import presentation from './presentation.json'
import { LeftNav } from './Components/LeftNav/LeftNav';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

// possible URLS are prefrence, presentation and learning
// also noticed that front end and backend arent formnatted the same. they have no URL change and no LeftNav Cahange
// Documentation and getting statrted take you to the same place?

function App() {
  return (
    <div className="App">
      <header className='header'>
        <a className='link' href="/presentation"> presentation</a>
        <a className='link' href="/">Getting Started </a>
        <a className='link' href="/bis"> bis</a>
      </header>
      <main>
        <Switch>
          <Route exact path='/' render={() => <LeftNav data={main}/>}/>
          <Route path='/presentation' render={() => <LeftNav data={presentation}/>}/>
          <Route path='/bis' render={() => <LeftNav data={bis}/>}/>
        </Switch>
        <div className='main'>DETAILS</div>
      </main>
    </div>
  );
};

export default App;
