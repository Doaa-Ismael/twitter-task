import React, { Component } from 'react';
import httpService from '../services/httpService';
import Tweet from './tweet';

class Tweets extends Component {

    state = {
        tweets: []
    }

    componentDidMount() {
        this.getTweets();
    }
    
    render() {
        return (
            <div>
                <ul className="list-group">
                {this.state.tweets.map(tweet => <Tweet key={tweet._id} tweet={tweet} />)}
                </ul>
                
            </div>
        );
    }

    getTweets() {
        httpService.get(httpService.apiEndPoint + 'tweets', {})
        .then( ({data: {tweets}}) => {
            this.setState({tweets});
        })
    }
}

export default Tweets;
