import React from 'react';
import RegisterForm from './RegisterForm';
import { Redirect } from 'react-router-dom';

const Register = () =>{
    return(
        <div className="register-page">
            {localStorage.getItem('token') ? <Redirect to='/dashboard'/> : <RegisterForm />}
        </div>
        
    );
};

export default Register;