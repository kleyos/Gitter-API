import React from 'react';

import { Link } from 'react-router';

class NavigationBar extends React.Component {
  render() {
	const user = this.props.user[0];
	return(
		<nav className="navbar navbar-default">
			<div className="container-fluid">
				<div className="navbar-header">
					<Link className="navbar-brand" to="/">Gi Cli</Link> 
       </div>

				<div className="collapse navbar-collapse">
					<ul className="nav navbar-nav navbar-right log">
						{user 
							? <li className="log__item">
									<img src={user.avatarUrlSmall} width={25} height={25}/> 
									<span>{`HI ${user.username}!`}</span>
									<a className="log__link" href='/logout'>Log Out</a>
								</li>
							: <li className="log__item"> 
									<Link to="/signin" className="log__link">Log In</Link>
								</li>
						}
					</ul>		
				</div>
				</div>
		</nav>
		);
	}
}

export default NavigationBar;
// <Link to="/" className="log__link">
// 	<a href='/logout'>Log Out</a>
// </Link>