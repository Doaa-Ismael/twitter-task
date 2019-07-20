import React from 'react';
const Login = () => {
    return (
    <React.Fragment>
        <form action="">
            <div className="form-group">
                <label htmlFor="email"></label>
                <input id="email" name="email" type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="password"></label>
                <input id="password" name="password" type="text" className="form-control" />
            </div>
        </form>
    </React.Fragment>);
}

export default Login;