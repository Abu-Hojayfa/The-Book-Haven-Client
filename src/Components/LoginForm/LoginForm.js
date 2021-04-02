import React, { useContext, useState } from 'react';
import './LoginForm.css';
import firebase from "firebase/app";
import "firebase/auth";
import fb from '../../images/icons/Group 2.png';
import google from '../../images/icons/Group 573.png';
import firebaseConfig from '../../firebase.config';
import { useHistory, useLocation } from 'react-router';
import { userContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const LoginForm = () => {

  const [loggedIn ,setLoggedIn] = useContext(userContext);

  const [form, setForm] = useState(true);
  const changeForm =() =>{
    setForm(!form);
  };

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  
  const loginWithGoogle = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      const{displayName, email, photoURL} = result.user;

      const info = {
        name: displayName,
        email: email,
        img: photoURL
      };
      setLoggedIn(info);      
      history.replace(from);

    }).catch((error) => {
        alert(error.message);
    });
  };
  
  return (
    <div className="form-body">
      {
        form ? 
          <div className="main-form">
            <h2>
              Login
            </h2>
            <input className="text" type="text" name="" placeholder="Username or Email"/> <br/>
            <input className="text" type="password" name="" placeholder="Password" />
            <div className="chkbox">
              
              <label htmlFor="remember"><input type="checkbox" name="" id="remember"/> Remember Me</label>

              <a href="/">Forgot Password</a>
            </div>
            <button>
              Login
            </button>
            <p>
              Don't have a account?  
              <span onClick={changeForm}>Create an account</span>
            </p>
          </div> : 

          
          <div className="main-form">
            <h2>
              Sign Up
            </h2>
            <input className="text" type="text" name="" placeholder="Username" id=""/> <br/>
            <input className="text" type="text" name="" placeholder="Email" id=""/> <br/>
            <input className="text" type="password" name="" placeholder="Password" id=""/>
            <input className="text" type="password" name="" placeholder="Retype Password" id=""/>
            <button>
              Sign Up
            </button>
            <p>
              Already have an account?  
              <span onClick={changeForm}>Login</span>
            </p>
          </div>
      }

      <div className="autoLogin">
        <div className="spanStyle">
          <span></span>
          <p>Or</p>
          <span></span>
        </div>
        <div className="oneClick">
          <div className="fb">
            <img src={fb} alt=""/>
            <p>Connect With Facebook</p>
          </div>
          <div onClick={loginWithGoogle} className="google">
            <img src={google} alt=""/>
            <p>Connect With Google</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default LoginForm;