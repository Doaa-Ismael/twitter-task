import React, { Component } from 'react';
import  Tweet  from './tweet';
import httpService from '../services/httpService';

class tweetWithComments extends Component {
    state = { 
        tweet: ''
     }


    async componentWillMount() {
        console.log("SSSSSSSSSSSS")
        await this.getTweetWithComments();
    }

    
    render() { 
        const { tweet, comments } = this.state;
        return ( 
            <div>
                {tweet &&  <Tweet tweet={tweet} ></Tweet> }
                {comments && <div>
                    <h3 className="ml-5">Comments</h3>
                    <ul className="list-group ml-5"> { comments.map(comment => 
                <li className="list-group-item" key={comment._id}>
                    <div >
                        <img src={comment.user.img} alt="" style={{ width: '3rem', height: '3rem', borderRadius: '50%'}}/>
                        <span className="ml-2">{comment.user.name}</span>
                    </div>
                    <p className="ml-5">{comment.content}</p>
                        {/*************  Sub Comments   ********************/}
                        { comment.subComments.length != 0 &&  
                        <ul className="list-group ml-5"> { comment.subComments.map( (subComment, indx) => 
                            <li className="list-group-item" key={indx}>
                                <div >
                                    <img src={subComment.user.img} alt="" style={{ width: '3rem', height: '3rem', borderRadius: '50%'}}/>
                                    <span className="ml-2">{subComment.user.name}</span>
                                </div>
                                <p className="ml-5">{subComment.content}</p>
                            </li>
                        )}
                            </ul>
                        }
                </li>
                ) }
                </ul>

                </div>   }
            </div>
        );
    }

    async getTweetWithComments() {
        httpService.get(httpService.apiEndPoint + `tweets/${this.props.match.params.tweetId}`,{})
        .then(res => this.setState({ tweet: res.data.tweet, comments: res.data.comments }))
        .catch(e => console.log(e))
    }
}
 
export default tweetWithComments;