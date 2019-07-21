import React, { Component } from 'react';
import './../App.css';

class Tweet extends Component {
    state = {
        tweet: this.props.tweet 
    }
    render() {
        const { tweet } = this.state;
        return (
            <div className="card mb-3">
                <div className="card-body">
                    <div className="card-title  mb-0">
                    <img src={tweet.user.img} className="card-img-top profileImg mx-2" alt="User Profile"/>
                    <span className="text-muted mr-2">@{tweet.user.name}</span>
                     {tweet.title}
                </div>
                <div className="ml-5 pl-1">
                <p className="card-text  mb-0">{tweet.content}</p>
                <small className="text-muted">
                       comments: {tweet.commentsNumber}
                    </small>
                </div>
                </div>
            </div>
            );
        }
    }
    
    export default Tweet;
