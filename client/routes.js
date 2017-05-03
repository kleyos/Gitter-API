import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import Home from './components/Home';
import Room from './components/Room';

import AuthPage from './components/auth/AuthPage'; 

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Greetings} />
		<Route path="/signin" component={AuthPage} />
		<Route path="/home" component={Home} >
			<Route path=":roomName" component={Room} />
		</Route>
	</Route>
)