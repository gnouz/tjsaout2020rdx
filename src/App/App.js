import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import TchatLogin from './components/TchatLogin/TchatLogin';
import Tchat  from './components/Tchat/Tchat';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/tchat/:id'>
            <Tchat></Tchat>
          </Route>
          <Route path='/'>
            <TchatLogin></TchatLogin>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
