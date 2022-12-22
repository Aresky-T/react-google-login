import React, { useEffect } from 'react';
import './App.css';
import { GoogleLogin } from 'react-google-login';
import SignOut from './SignOut';
import SignIn from './SignIn';

const App = () => {

  useEffect(() => {
    // google.accounts!.id.initialize({});
  })

  return (
    <div className='App'>
      <SignIn/>
    </div>
  );
}

export default App;
