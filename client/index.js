import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

import App from './components/App';
import './custom.css';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Dashboard from './components/Dashboard';
import requireAuth from './components/requireAuth';
import ResidenceForm from './components/ResidenceForm';
import ResidenceList from './components/ResidenceList';
import ResidentDetail from './components/ResidentDetail';

const networkInterface = createNetworkInterface({
	uri: '/graphql',
	opts: {
		credentials: 'same-origin'
	}
});

const client = new ApolloClient({
	networkInterface,
	dataIdFromObject: o => o.id 
});

const Root = () => {
  return (
  	<ApolloProvider client={client}>
	    <Router history={hashHistory}>
	    	<Route path="/" component={App}>
	    		<IndexRoute component={ResidenceList} />
	    		<Route path="login" component={LoginForm} />
	    		<Route path="signup" component={SignUpForm} />
	    		<Route path="dashboard" component={requireAuth(Dashboard)} />
	    		<Route path="residenceform" component={ResidenceForm} />
	    		<Route path="residencelist" component={ResidenceList} />
	    		<Route path="residence/:id" component={ResidentDetail} />
	    	</Route>
	    </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
