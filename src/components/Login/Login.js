import React, { useContext, useEffect } from 'react';
import firebase from "firebase/app";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import "firebase/auth";
import "firebase/firestore";

import firebaseConfig from "../../firebase.config"
import NavBar from '../Home/Navbar/NavBar';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import Footer from '../Shared/Footer/Footer';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const  Login = () => {
    const  history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    const provider = new firebase.auth.GoogleAuthProvider();

    const logInWithGoogle=()=>{
        
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                const newUser={
                    name:user.displayName,
                    email:user.email,
                    img:user.photoURL
                };
                    fetch("https://expressclean.herokuapp.com/checkIsAdmin", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email: user.email })
                    })
                        .then(res => res.json())
                        .then(data => {
                            sessionStorage.setItem("admin", data)
                        })


                sessionStorage.setItem("email",user.email)
                
                setLoggedInUser(newUser); 

                history.replace("/")
               
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
        
    }

    return (
        
        <div>
            <NavBar></NavBar>
            <div className="mx-5 my-5 d-flex justify-content-center">
                <button onClick={logInWithGoogle} className="p-2 bg-light" style={{borderRadius:"20px"}}>
                    <dov className="row " >
                        <div className="col-md-2">
                            <FontAwesomeIcon icon={faGoogle} size="2x"> </FontAwesomeIcon>

                        </div>
                        <div className="col-md-10">
                            <h3>Login With Google</h3>

                        </div>

                    </dov>
                </button>
               
               
            </div>
        </div>
    );
};

export default Login;