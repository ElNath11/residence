import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/CurrentUser';
import mutation from '../mutations/Logout';
import { Input, Menu } from 'semantic-ui-react';


class Header extends Component {
	onLogoutClick() {
		this.props.mutate({
			refetchQueries: [{ query }]
		});
	}

	renderButtons(){
		const { loading, user } =  this.props.data;

		if (this.props.data.loading) { return <div />; }

		if (user) {
			return (
					<div>
						<li><Link to="/dashboard">Residence Table</Link></li>
						<li><a onClick={this.onLogoutClick.bind(this)}>Logout</a></li>
					</div>
				);
		} else {
			return (
				<div>
					<li>
						<Link to="/residenceform">Residence Form</Link>
					</li>
					<li>
						<Link to="/signup">SignUp</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
				</div>
			);
		}

	}

	

	render() {
		return(
			<nav>
				<div className="nav-wrapper">
				<Link to="/" className="brand-logo left px-15">
					Home
				</Link>
					<ul className="right">
						{this.renderButtons()}
					</ul>
				</div>
			</nav>
		);
	}
}

export default graphql(mutation)(
	graphql(query)(Header)
);