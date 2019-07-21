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
                <ul class="list-group">
                {this.state.tweets.map(tweet => <li class="list-group-item">
                    <Tweet tweet={tweet} />
                </li>)}
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
