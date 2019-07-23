import React, { Component } from 'react';

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
            <form onSubmit={this.handleSubmit}>
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
                        <div className="d-flex justify-content-end mt-2">
                            <button className="btn btn-primary" disabled={!tweet.title} >Tweet</button>
                        </div>
            </form>
        );
    }

    handleChange = ({target}) => {
        const { tweet } = this.state;
        tweet[target.name] = target.value;
        this.setState({ tweet });
    }
}
 
export default TweetForm;