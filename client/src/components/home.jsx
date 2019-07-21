import React, { Component } from 'react';
import Tweets from './tweets';
class Home extends Component {
    state = {  }
    render() { 
        return (
        <main className="container">
            <Tweets />
        </main> );
    }
}
 
export default Home;