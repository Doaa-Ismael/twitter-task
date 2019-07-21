import React, { Component } from 'react';
import Tweets from './tweets';
class Home extends Component {
    state = {  }
    render() { 
        return (
        <main className="container mt-2">
        <h1 className="d-inline-block">Twitter</h1>
        <input className="form-control mb-2 float-right d-inline-block w-25 " placeholder="Search people..." />
 
            <Tweets />
        </main> );
    }
}
 
export default Home;