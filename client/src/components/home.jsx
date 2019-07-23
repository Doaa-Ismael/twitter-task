import React, { Component } from 'react';
import Tweets from './tweets';
import PeopleSearch from './peopleSearch';
import {Link} from 'react-router-dom';

class Home extends Component {
    state = { 
        peopleSearchPageRenderd: false,
        searchTerm: '',
        isLoggedIn: false
    }

    render() { 
        return (
        <main className="container mt-2">
        <h1 className="d-inline-block">Twitter</h1>
        <input className="form-control mb-2 float-right d-inline-block w-25 " placeholder="Search people..." onChange={this.handleChnage} />
         <span><Link to={"/login"}> Login </Link> </span> 
        { !this.state.peopleSearchPageRenderd  &&  <Tweets />}
        { this.state.peopleSearchPageRenderd  && <PeopleSearch searchTerm={this.state.searchTerm} />}
        </main> );
    }

    handleChnage = ({target}) => {
        if(target.value.trim() == '') {
            this.setState({ peopleSearchPageRenderd: false, searchTerm: '' });
        }
        else {
            this.setState({ peopleSearchPageRenderd: true, searchTerm: target.value });
        }  
    }

    showPeopleSearchPage = () => {
        this.setState({ peopleSearchPageRenderd: true });
    }

    isLoggedIn() {
        let isLoggedIn = localStorage.getItem('twitter_token');
        this.setState({ isLoggedIn: isLoggedIn? true: false  });
    }
}
 
export default Home;