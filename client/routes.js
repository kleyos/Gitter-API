import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import Home from './components/Home';
import User from './components/User';
import Room from './components/Room';

import AuthPage from './components/auth/AuthPage'; 

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Greetings} />
		<Route path="/signin" component={AuthPage} />
		<Route path="/home" component={Home} />
		<Route path="/home/:roomId" component={Room} />
		<Route path="/user" component={User} />
	</Route>
)