import React from 'react';

class SigninForm extends React.Component {
  render() {
	return(
		<nav className="login">
			<p>Sign in to manage your profile</p>
			<button className="github btn btn-inverse" >Log In with Github</button>
			<button className="facebook btn btn-primary"  >Log In with Facebook</button>
			<button className="twitter btn btn-info"  >Log In with Twitter</button>
		</nav>
		);
	}
}
export default SigninForm;