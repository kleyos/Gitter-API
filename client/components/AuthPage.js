import React from 'react';
//import SigninForm from './SigninForm';

class AuthPage extends React.Component {
  render() {
    return (

        <div className="row">
        	<div className="col-md-4 col-md-offset-4 auth__form">
        		 <p>Sign in to manage your profile</p>
			      <a className="btn btn-default" href='/login'>  
			        Log In with Gitter 
			      </a>
        	</div>
        </div>
    );
  }
}

export default AuthPage;
