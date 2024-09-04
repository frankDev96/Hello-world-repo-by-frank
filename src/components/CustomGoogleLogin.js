import React from 'react';
import { GoogleLogin } from 'react-google-login';

const Login = () => {
  const responseGoogle = (response) => {
    // Handle the response from Google login
    console.log(response);
  };

  return (
    <div className={'header'}>
      <h2>Login with Google</h2>
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Sign in with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default Login;
