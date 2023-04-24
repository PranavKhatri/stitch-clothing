import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

// Redirect Methods: when ever button for signInWithGoogleRedirect is hit, It Mounts the application again from the scratch, so we use UseEffect to capture it.
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import SignInForm from "../../components/sign-in-form copy/sign-in-form.component";

import './authentication.styles.scss';

const Authentication = () => {
  // We want to run the below, when the application mounts
  useEffect(() => {
    async function fun() {
      const response = await getRedirectResult(auth); // It get the respinse while the redirect page mounts the application again

      if (response) {
        const userDocRef = createUserDocumentFromAuth(response);
      }
    }
    fun();
  }, []);

  // whenevr we want to make a call to some databse this is going to be asynchronous
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(response);
  };

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
