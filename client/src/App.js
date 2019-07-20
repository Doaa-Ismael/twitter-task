import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Redirect to="/register" />
      </Switch>
    </main>
  );
}

export default App;
