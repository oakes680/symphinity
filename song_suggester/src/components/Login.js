import React from 'react';
import LoginForm from './LoginForm';
import { Redirect } from 'react-router-dom';

const Login = ()=>{
    return(
        <div className="login-page">
        {localStorage.getItem('token') ? <Redirect to='/dashboard'/> : <LoginForm />}
    </div>
    
);
};

export default Login;