import React, { Component } from 'react';
import httpService from './../services/httpService';

class PeopleSearch extends Component {
    state = { users: [] }


    componentDidMount() {
        this.getUsers(this.props.searchTerm)
    }
    componentWillReceiveProps(nextProps){
       this.getUsers(nextProps.searchTerm);
    }
    

    render() { 
        const {users} = this.state;
        return ( 
            <div>
                {users.length == 0 && <div className="text-center"> No Result Found!</div>}
        { users.length != 0 && <ul className="list-group" >
            {users.map((user, index) => 
                <li className="list-group-item d-flex justify-content-between" key={user._id}>
                    <div >
                        <img src={user.img} alt="" style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%'}}/>
                        <span className="ml-2">{user.name}</span>
                    </div>
                    <button className="btn btn-primary btn-sm" style={{ height: '2rem', width: '5rem'}}>Follow</button>
                </li>)}
        </ul>}  
            </div>
         );
    }

    getUsers() {
        httpService.get(httpService.apiEndPoint + 'users',  { params: { searchTerm: this.props.searchTerm }})
        .then(res => {
            this.setState({ users: res.data.users });
        })
    }
}

export default PeopleSearch;