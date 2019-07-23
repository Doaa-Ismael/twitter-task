import React, { Component } from 'react';
import httpService from '../services/httpService';
import Tweet from './tweet';
import TweetForm from './tweetForm';
import { Link } from 'react-router-dom';

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
                <TweetForm />
                <ul className="list-group">
                {this.state.tweets.map(tweet => <Link to={`tweets/${tweet._id}`}> <Tweet key={tweet._id} tweet={tweet} /> </Link>)}
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
