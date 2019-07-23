import React, { Component } from 'react';
import httpService from '../services/httpService';
import Tweet from './tweet';
import TweetForm from './tweetForm';
import { Link } from 'react-router-dom';

class Tweets extends Component {

    state = {
        tweets: [],
        filter: {
            lastCreated: false,
            commentsNumber: null
        }
    }

    componentDidMount() {
        this.getTweets();
    }

    render() {
        return (
            <div>
                <TweetForm onTweet={this.handleOntweet} />
                <form className="mb-2 row" onSubmit={this.handleFilter}>
                    <p className="d-inline-block m-0 ml-1 pt-2">Filter by</p>
                    <div className="form-inline col ">
                        <label className="mr-1" for="lastCreated">Last Created:</label>
                        <select
                            className="form-control d-inline-block"
                            style={{ width: 'auto' }} 
                            id="lastCreated"
                            name="lastCreated"
                            onChange={this.handleChange}>
                                <option value={false}>None</option>
                                <option value={true}>Last Created</option>
                        </select>
                        <div className="form-inline col ">
                            <label className="mr-1" for="commentsNumber">Number of comments:</label>
                            <input
                                className="form-control"
                                type="range"
                                id="commentsNumber"
                                name="commentsNumber"
                                onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <button className="btn btn-primary">Filter</button>
                </form>
                <ul className="list-group">
                    {this.state.tweets.map(tweet => <Link  key={tweet._id} to={`tweets/${tweet._id}`}> <Tweet key={tweet._id} tweet={tweet} /> </Link>)}
                </ul>

            </div>
        );
    }

    getTweets(options) {
        options = options? {params: options}: {};
        httpService.get(httpService.apiEndPoint + 'tweets', options)
            .then(({ data: { tweets } }) => {
                this.setState({ tweets });
            })
    }

    handleFilter = (e) => {
        e.preventDefault();
        this.getTweets(this.state.filter)
    }

    handleChange = ({ target }) => {
        const {filter} = this.state;
        filter[target.name] = target.value;
        this.setState({ filter });
    }

    handleOntweet = (tweet) => {
        const {tweets} = this.state;
        tweets.unshift(tweet);
        this.setState({ tweets  });
    }
}

export default Tweets;
