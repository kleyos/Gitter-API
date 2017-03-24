import React from 'react';

import { Link } from 'react-router';

export default () => {
	return(
		<nav className="navbar navbar-default">
			<div className="container-fluid">
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