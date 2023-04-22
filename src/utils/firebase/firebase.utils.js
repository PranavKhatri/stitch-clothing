import { initializeApp } from 'firebase/app';

import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'; 

//getAUth instantiate firebase/auth method

import { getFirestore, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'; 

// getFirestore instantiate firebase/firestore method
// doc method allows us to do is retrieve documents inside of our fire store databse. It will help us get a document instance
// getDoc: it will help us get the document data
// setDoc : it will help us set the document data


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAr0-zm_egfz9CeURQkaBp-11-lmZ1U5aA",
    authDomain: "stitch-clothing-db.firebaseapp.com",
    projectId: "stitch-clothing-db",
    storageBucket: "stitch-clothing-db.appspot.com",
    messagingSenderId: "1051060446178",
    appId: "1:1051060446178:web:ebbc8043e439b5430c0fbb"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  // This firebaseApp will be responsible for CRUD ops

  // Now, google authentication

  const provider  = new GoogleAuthProvider(); // it provides us google provider instance, it is a class

  provider.setCustomParameters({
    prompt: "select_account"
  });

  // thisprovider will take some configuration object and with it we can tell different ways that we want this google auth provider to behave, So generally speaking, the main one that we want  is really just prompt. prompt: "select_account" it means that every time somebody interacts with our provider, we want to always force them to select an account


  export const auth = getAuth(); // it is a method, to get authenticated.
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


  export const db = getFirestore();
  export const createUserDocumentFromAuth = async(userAuth) => {

    const userDocRef = doc(db, 'users', userAuth.user.uid) // doc(databse, collections, some_identifier[uniqueID])
    console.log('userDocRef', userDocRef);

    const userSnapshot = await getDoc(userDocRef);


    console.log('userSnapshot', userSnapshot);

    // check if user exists..then return userDocRef
    // if not exists..create/set the  document with the data from userAuth in my collection

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth.user;

        const createdAt = new Date();
        const updatedAt = new Date();
        try{
            await setDoc(userDocRef, { // set the userDocRef with objects{displayName, email, createdAt}
                displayName,
                email,
                createdAt,
                updatedAt,

            });

        }catch(error){
            console.log('error creating the user', error.message);
        }
    }

    const updatedAt = new Date();
    try{
        await updateDoc(userDocRef, { // set the userDocRef with objects{displayName, email, createdAt}
            updatedAt
        });

    }catch(error){
        console.log('error creating the user', error.message);
    }
    console.log('userDocRef LLL', userDocRef);

    return userDocRef;

  }