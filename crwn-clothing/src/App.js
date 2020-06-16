import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';

export const HatsPage = () =>
  (
    <div>
      <h1>HATS PAGES</h1>
    </div>
  )


function App() {
  return (
    <div>
      <Switch> 
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
