import React from 'react';

import { Link } from 'react-router';

class NavigationBar extends React.Component {
  render() {
	return(
		<nav className="navbar navbar-default">
			<div className="container">
				<div className="navbar-header">
					<Link className="navbar-brand" to="/">Gi Cli</Link> 
				</div>

				<div className="collapse navbar-collapse">
					<ul className="nav navbar-nav navbar-right">
						<li><Link to="/signin">Sign in</Link></li>
					</ul>		
				</div>
			</div>
		</nav>
		);
	}
}

export default NavigationBar;