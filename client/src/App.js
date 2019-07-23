import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import tweetWithComments from './components/tweetWithComments';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/tweets/:tweetId" component={tweetWithComments } />
        <Route path="/" component={Home} exact/>
        <Redirect to="/login" />
      </Switch>
    </main>
  );
}

export default App;
