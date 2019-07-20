import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/login';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </main>
  );
}

export default App;
