import React, { Component } from 'react';
import Joi from 'joi-browser';
import { Link, Redirect } from 'react-router-dom';
import httpService from './../services/httpService';

class Login extends Component {

    state = {
        account: { email: '', password: '' },
        errors: { }, 
        disableSubmitButton: false
    }
    schema = {
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().required().label('Password')
    }

    render() {
        const { account, errors, disableSubmitButton } = this.state; 
        return (
            <React.Fragment>
                
                <div className="container mt-2">
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                id="email"
                                name="email"
                                className="form-control"
                                value={account.email}
                                onChange={this.handleChange}
                                type="email" />
                            {errors['email'] && <div className="alert alert-danger">{errors['email']}</div>}
                        
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Passwrod</label>
                            <input 
                                id="password"
                                name="password"
                                className="form-control"
                                value={account.password}
                                onChange={this.handleChange}
                                type="password"  />

                        {errors['password'] && <div className="alert alert-danger">{errors['password']}</div>}

                        </div>
                        {errors['form'] && <div className="alert alert-danger">{errors['form']}</div>}

                        <button className="btn btn-primary" disabled={disableSubmitButton} >Login</button>
                    </form>
                    <p>not registerd? <Link to={'/register'}>Sign up</Link></p>
                </div>
            </React.Fragment>
        );
    }

    handleChange = ({target}) => {
        let { account } = this.state;
        account[target.name] = target.value;
        this.setState({account, disableSubmitButton: false});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ disableSubmitButton: true  });
        let errors = this.validate();
        this.setState({ errors: errors || {} });
        if(errors) // Errors Exists
            return;
        httpService.post(httpService.apiEndPoint + 'auth/loginUser', {
                ...this.state.account
            })
            .then(res => {
                if(res.status == 200)  {
                    localStorage.setItem('twitter_token', res.data.token);
                    this.props.history.push('/');
                }
            })
            .catch(error => {
                let msg = error.response.data.msg;
                let { errors } = this.state;
                errors['form'] = msg;
                this.setState({ errors });
                console.log(error.response)
            })
    }

    validate = () => {
        const result = Joi.validate(this.state.account, this.schema, {abortEarly: false});
        console.log(result)
        if(!result.error) return null;
        const errors = {};
        result.error.details.reduce((prev, cur) => (prev[cur.path[0]] = cur.message, prev) ,  errors);
        return errors;
    }
}

export default Login;