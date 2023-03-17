import React, { useState }  from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { auth } from './firebase';


function Login() {
    const navigate =useNavigate();
    const [email ,SetEmail] =useState('');
    const [password, SetPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            navigate('/')
        })
        .catch(error => alert(error.message))

        

    }
    const register = e =>{
        // some firebase stuff
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // it means it successfully created a user with email and password
            if(auth){
                navigate('/')
            }
        })
        .catch(error => alert(error.message))


    }
    
    return (
    <div className='login'>
        <Link to='/'>
        <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
        
        </Link>
        <div className="login__container">
            <h1>Sign-in</h1>
            <form >
                <h5>E-mail</h5>
                <input type="text" value={email} onChange ={e => SetEmail(e.target.value)} />

                <h5>Password</h5>
                <input type="password" value={password} onChange ={e => SetPassword(e.target.value)}/>

                <button onClick={signIn} type='submit' className='login__signInButton'>Sign in</button>

                <p>
                    By signing in you are agree to Amazon's FAKE CLONE condition of the Use & Sale. Please see our privacy notice, our Cookies Notice and our interest based Ads Notice.  
                </p>
                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </form>
        </div>
    </div>
  )
}

export default Login