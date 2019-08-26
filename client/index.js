import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

import PropTypes from 'prop-types';
import App from './components/App';
import './custom.css';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Dashboard from './components/Dashboard';
import requireAuth from './components/requireAuth';
import ResidenceForm from './components/ResidenceForm';
import ResidenceList from './components/ResidenceList';
import ResidentDetail from './components/ResidentDetail';
import ResidenceDelete from './components/ResidenceDelete';
import Try from './components/modal/Try';

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

PropTypes.shape({
  color: PropTypes.string,
  fontSize: PropTypes.number
})

const Root = () => {
  return (
  	<ApolloProvider client={client}>
	    <Router history={hashHistory}>
	    	<Route path="/" component={App}>
	    		<IndexRoute component={ResidenceList} />
	    		<Route path="login" exact component={LoginForm} />
	    		<Route path="signup" exact component={SignUpForm} />
	    		<Route path="dashboard" exact component={requireAuth(Dashboard)} />
	    		<Route path="residenceform" exact component={ResidenceForm} />
	    		<Route path="residencelist" exact component={ResidenceList} />
	    		<Route path="residence/delete/:id" exact component={ResidenceDelete} />
	    		<Route path="residence/:id" exact component={ResidentDetail} />

	    		<Route path="try" exact component={Try} />
	    	</Route>
	    </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
