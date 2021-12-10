import React, { useEffect, useState } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {signInHeadingContainer} from './signup.module.css'
import IndexPage2 from '../pages/indexv2'

const firebaseConfig = {
    apiKey: '',
    authDomain: 'hackathon-marriage.firebaseapp.com',
    projectId: 'hackathon-marriage',
    storageBucket: 'hackathon-marriage.appspot.com',
    messagingSenderId: '788084586238',
    appId: '1:788084586238:web:b3b039b523f5d5279797af',
    measurementId: 'G-21BQ4SFR4X'
  };


  firebase.initializeApp(firebaseConfig);

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false,
      },
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        {
                provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                requireDisplayName: true
        },

      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      
    ],
  };

export default function Signup(props) {

    const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if(!isSignedIn){
    return (        
        <div className="signInContainer">
            <div className={signInHeadingContainer}>
                <h1>{props.title}</h1>
            </div>
               
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
    )
}
return (
    <div>
      <IndexPage2/>
      {/* <a onClick={() => firebase.auth().signOut()}>Sign-out</a> */}
    </div>
  );

}
