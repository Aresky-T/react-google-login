import React from 'react'
import { GoogleLogin } from 'react-google-login';

const SignIn = () => {

    const keyGoogleId: string = String(process.env.REACT_APP_GOOGLE_CLIENT_ID);

    const onSuccess = (googleData: any) => {
        console.log(googleData);
    }

    const onFailure = () => {
        alert('Login failed');
    }
    return (
        <div>
            <h1>
                Login With Google App
            </h1>
            <GoogleLogin
                clientId={keyGoogleId}
                buttonText='Sign in with Google'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={false}
            >
            </GoogleLogin>
        </div>
    )
}

export default SignIn;