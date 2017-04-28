import React from 'react';

import { Link } from 'react-router';


class SigninForm extends React.Component {

//   authHandler(){
//     fetch("https://gitter.im/login/oauth/authorize?response_type=code&redirect_uri=http://localhost:7070/login/callback&client_id=e68926bc39cb055e572b2ba1ea344095903d819c")
//     .then(response => response.ok)
//     .then()
// )
//   }
 renderLoginButton(){
  	const client_id = 'e68926bc39cb055e572b2ba1ea344095903d819c'
    return(
		<nav className="login">
			<p>Sign in to manage your profile</p>
      <button > 
        Log In with Gitter 
      </button>
    </nav>
  );
  }
  render() {
  let logoutButton = <button /*onClick={this.logout}*/>Log Out!</button>

    // first check if they arent logged in
    if(!this.state.uid) {
      return (
        <div>{this.renderLoginButton()}</div>
      )
    }
  }
}
export default SigninForm;
			// <a className="github btn btn-inverse" 
   //        href="https://gitter.im/login/oauth/authorize?response_type=code&redirect_uri=http://localhost:7070/login/callback&client_id=e68926bc39cb055e572b2ba1ea344095903d819c"> 
   //          Log In with Gitter 
   //    </a>
