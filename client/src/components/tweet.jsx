import React, { Component } from 'react';

class Tweet extends Component {
    state = {
        tweet: this.props.tweet 
    }
    render() {
        const { tweet } = this.state;
        return (
            <div className="card mb-3">
                <img src={tweet.user.img} className="card-img-right" alt="User Profile"/>
                <div className="card-body">
                    <h5 className="card-title">{tweet.title}</h5>
                    <p className="card-text">{tweet.content}</p>
                    <p className="card-text">
                        <small className="text-muted">
                       comments: {tweet.commentNumber}
                        </small>
                    </p>
                </div>
            </div>
            );
        }
    }
    
    export default Tweet;
