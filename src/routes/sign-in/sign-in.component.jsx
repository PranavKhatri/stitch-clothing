import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () =>{

        // whenevr we want to make a call to some databse this is going to be asynchronous
    const logGoogleUser = async () =>{
        const response = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(response);

    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick = {logGoogleUser}>
                Sign in with Google Popup
            </button>
        </div>
    )
}


export default SignIn;