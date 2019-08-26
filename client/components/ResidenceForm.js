import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { addResidence } from './queries/addResidence';
import { Link, hashHistory } from 'react-router';
import query from './queries/fetchResidences';

const Spinner = () => (
  <img src="https://loading.io/spinners/microsoft/index.svg" className="zoom2" height="20"/>
);

class ResidenceForm extends React.Component {
	constructor(props){
		super(props);
		this.state = { 
                  full_name: '', 
                  age: '', 
                  address: '', 
                  email: '', 
                  phone: '', 
                  house_status: '', 
                  lived_since: '', 
                  family_member: '',
                  isLoading: false
                };
	}

	onSubmit(event) {
		event.preventDefault();
    this.setState({ isLoading: true });
		this.props.mutate({
			variables: {
				full_name: this.state.full_name,
				age: this.state.age,
				address: this.state.address,
				email: this.state.email,
				phone: this.state.phone,
				house_status: this.state.house_status,
				lived_since: this.state.lived_since,
				family_member: this.state.family_member
			},  refetchQueries: [{ query }]
		}).then(() => hashHistory.push('/residencelist'));
	}

	render() {		
		return(
			<div>
				<Link to="/" className="ui secondary button mt-1">Back</Link>
				<h3>Create a New Residence</h3>
				<form onSubmit={this.onSubmit.bind(this)} className="ui form">
  				<label>Full Name <i className="required-text">* required</i></label>
  				<input 
  					onChange={event => this.setState({ full_name: event.target.value })}
  					value={this.state.full_name}
            required
  				/>
  				<label>Age <i className="required-text">* required</i></label>
  				<input
  					onChange={event => this.setState({ age: event.target.value })}
  					value={this.state.age}
  					type="Number"
            required
  				/>
  				<label>Address <i className="required-text">* required</i></label>
  				<input 
  					onChange={event => this.setState({ address: event.target.value })}
  					value={this.state.address}
            required
  				/>
  				<label>Email <i className="required-text">* required</i></label>
  				<input 
  					onChange={event => this.setState({ email: event.target.value })}
  					value={this.state.email}
  					type="email"
            required
  				/>
  				<label>Phone <i className="required-text">* required</i></label>
  				<input 
  					onChange={event => this.setState({ phone: event.target.value })}
  					value={this.state.phone}
  					type="Number"
            required
  				/>
  				<label>House Status <i className="required-text">* required</i></label>
				<select value={this.state.house_status} onChange={event => this.setState({ house_status: event.target.value })} className="ui fluid dropdown">
					<option value="" disabled>Select</option>
		            <option value="Pribadi">Pribadi</option>
		            <option value="Sewa Keluarga">Sewa Keluarga</option>
		            <option value="Kos">Kos</option>
		            <option value="Sewa Kos">Sewa Kos</option>
                <option value="Kantor">Kantor</option>
		        </select>
  				<label>Lived Since <i className="required-text">* required</i></label>
  				<input 
  					onChange={event => this.setState({ lived_since: event.target.value })}
  					value={this.state.lived_since}
  					type="Number"
            required
  				/>
  				<label>Family Member <i className="required-text">* required</i></label>
  				<input 
  					onChange={event => this.setState({ family_member: event.target.value })}
  					value={this.state.family_member}
  					type="Number"
            required
  				/>
  				<button className={"ui button blue mt-1 " + (this.state.isLoading ? 'loading disabled' : '') } type="submit">
            Submit
          </button>
          
  				</form>
			</div>
			);
		}
	}
export default graphql(addResidence)(ResidenceForm);