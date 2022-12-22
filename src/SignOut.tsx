import React from 'react'
import { GoogleLogout } from 'react-google-login';
const SignOut = () => {

    const keyGoogleId: string = String(process.env.REACT_APP_GOOGLE_CLIENT_ID);

    const onSuccess = () => {
        console.log('Logout Success!');
        
    }
    return (
        <div>
            <GoogleLogout
                clientId={keyGoogleId}
                buttonText="Sign Out"
                onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    )
}

export default SignOut
