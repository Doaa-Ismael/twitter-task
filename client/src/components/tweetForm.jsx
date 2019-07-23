import React, { Component } from 'react';
import httpService from '../services/httpService';

class TweetForm extends Component {
    state = { 
        tweet: {
            title: '', 
            content: ''
        }
    }
    render() { 
        const { errors, tweet } = this.state;
        return ( 
            <form onSubmit={this.handleSubmit} action="">
                        <div className="form-group">
                            <input 
                                id="title"
                                name="title"
                                className="form-control"
                                placeholder="tweet title"
                                type="title" 
                                value={tweet.title}
                                onChange={this.handleChange}
                                />
                        
                        </div>
                        <textarea
                            className="form-control"
                            onChange={this.handleChange}
                            placeholder="tweet.." 
                            name="content"
                            value={tweet.content}/>
                        <div className="d-flex justify-content-end my-2">
                            <button className="btn btn-primary" disabled={tweet.title.trim() == ''}  >Tweet</button>
                        </div>
            </form>
        );
    }

    handleChange = ({target}) => {
        const { tweet } = this.state;
        tweet[target.name] = target.value;
        this.setState({ tweet });
    }

    handleSubmit = (e) => {
        const {onTweet} = this.props;
        const { tweet } = this.state;

        e.preventDefault();
        this.setState({ tweet: {
            title: '', 
            content: ''
        } });
        httpService.post(httpService.apiEndPoint + 'tweets', { ...tweet })
        .then(res => {
          onTweet(res.data.tweet);
        })
        .catch(e => console.log(e))
    }
}
 
export default TweetForm;