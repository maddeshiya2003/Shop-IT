import React from 'react'
import { useState } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import {auth} from "../firebase"
// import { useHistory } from 'react-router-dom';
// use history not work because it is old version that's why use of usenavigate
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";

import { useStateValue } from '../providers/StateProvider';

function Login() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [{basket,user},dispatch] = useStateValue();

    // const history = useHistory();
    const navigate = useNavigate();
    
    const signIn = (e) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("User signin : ",user)
            
            // this dispatch function is use for store the user info in react state
            dispatch({
                type:"SET_USER",
                user:user,
            });
            
            navigate('/');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    
    const register = (e) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("User registered : ",user);
            
            // this dispatch function is use for store the user info in react state
            dispatch({
                type:"SET_USER",
                user:user,
            });
            
            navigate('/');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    
    return (
        <div className='login'>

            <Link to='/'>
                <img  className='login__logo' 
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                >
                </img>
            </Link>

            <div className='login__container'>

                <h1>Sign In</h1>

                <form>
                    <h5>Email </h5>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)}/>
                    
                    <h5>Password </h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                </form>
                
                <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae expedita exercitationem odit, ullam earum corporis error ipsum velit, vero fugiat. Nihil blanditiis provident, optio facere officia maxime veritatis asperiores?</p>

                <span>Don't have an account? </span><button onClick={register} className='login__registerButton'>Register now</button>
            </div>
        
        </div>
    )
}

export default Login
