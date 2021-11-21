import React, {useEffect} from 'react'
import FooterV2 from '../components/footerv2'
import TopbarV2 from '../components/topbarv2'
import {useSharedSignedInState} from '../components/signupv2'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Login from './login';


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


export default function SurnameChange() {

    const {isSignedIn, setIsSignedIn} = useSharedSignedInState();

    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
          setIsSignedIn(!!user);
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
      });

      if(!isSignedIn){
        return (
            <div>            
                 
                <Login/> 
               
            </div>
        )
      }
      return (
        <div>            
            <TopbarV2/>   
             1. check if user is logged in first
             2. Display the forms.  
            <FooterV2/>
        </div>
    )
    
}
