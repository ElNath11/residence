import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';

const App = (props) => {
	return(
		<div className="container">
			<Header />
			{props.children}
		</div>
	);
};

export default App;