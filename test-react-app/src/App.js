import './App.css';
import {useState, useEffect} from 'react';
import main from './main.json';
import bis from './bis.json'
import presentation from './presentation.json'
import changeHistory from './changeHistory.json'
import { LeftNav } from './Components/LeftNav/LeftNav';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <a className='link' href="/presentation"> presentation</a>
        <a className='link' href="/">Getting </a>
        <a className='link' href="/bis">BIS</a>
        <a className='link' href="/changeHistory">Change History</a>
      </header>
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => <LeftNav data={main}/>}/>
            <Route path='/presentation' render={() => <LeftNav data={presentation}/>}/>
            <Route path='/bis' render={() => <LeftNav data={bis}/>}/>
            <Route path='/changeHistory' render={() => <LeftNav data={changeHistory}/>}/>
          </Switch>
        </BrowserRouter>
        <div className='main'>DETAILS</div>
      </main>
    </div>
  );
};

export default App;
