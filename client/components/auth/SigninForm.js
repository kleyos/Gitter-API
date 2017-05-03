import React from 'react';

import { Link } from 'react-router';


class SigninForm extends React.Component {

  authHandler(){
    const headers = new Headers ({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Bearer a39d1e6785d4b4ae9ad1debd7a96301e15f72652",
      })
    
    const request = new Request({
      method: 'GET',
      "client_id": 'e68926bc39cb055e572b2ba1ea344095903d819c',
      "response_type": "code",
      "grant_type":"authorization_code",
      "redirect_uri":"http://localhost:7070/login/callback"
    })

    const init = { 
      headers,
      request
      };
    fetch("https://gitter.im/login/oauth/authorize?", init)
    .then(response => console.log(response))
    .then(responseOk => responseOk.redirected('http://localhost:7070/home'))
    .catch( error => console.error(error)); 
  }
 renderLoginButton(){
    return(
    <nav className="login">
      <p>Sign in to manage your profile</p>
      <button onClick={this.authHandler.bind(this)}> 
        Log In with Gitter 
      </button>
    </nav>
  );
  }
  renderHomePage(){
    return(
        <Home />
      )
  }
  render() {
  let logoutButton = <button /*onClick={this.logout}*/>Log Out!</button>

    // first check if they arent logged in
      return (
        <div>{this.renderLoginButton()}</div>
      )
  }
}
export default SigninForm;
      // body:JSON.stringify({
      //       client_id: 'e68926bc39cb055e572b2ba1ea344095903d819c',
      //       client_secret: '83ec633a73a22949ea3e50ef165e0c1fcbde10d5',
      //       code: "CODE",
      //     })
    // const roomId = "58cf9057d73408ce4f522dbf";
    // const mesId = "58f9a455f22385553d606138"
