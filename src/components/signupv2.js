import React, { useEffect, useState } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {signInHeadingContainer} from './signup.module.css'
import { useBetween } from "use-between";
import IndexPage from '../pages/index'

// Configure Firebase.
const firebaseConfig = {
    apiKey: 'AIzaSyAdC2-OS8crosJu0RL8N2f1YvOfWDJ0t6o',
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
    signInSuccessUrl: '/',
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

// Make a custom hook with your future shared state
const useSignInState = () => {

    const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
    return {
      isSignedIn, setIsSignedIn
    };
  };


// Make a custom hook for sharing your form state between any components
export const useSharedSignedInState = () => useBetween(useSignInState);


export default function Signupv2() {


    const {isSignedIn, setIsSignedIn} = useSharedSignedInState();

    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
          setIsSignedIn(!!user);
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
      });

      if (!isSignedIn) {
        return (
          <div>
            <div className={signInHeadingContainer}>
                <h1>Please Sign In</h1>
            </div>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          </div>
        );
      }
      return (
        <div>
          <IndexPage/>
          {/* <h1>My App</h1>
          <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
          <a onClick={() => firebase.auth().signOut()}>Sign-out</a> */}
        </div>
      );
}
