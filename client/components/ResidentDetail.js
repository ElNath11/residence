import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import fetchResidence from './queries/fetchResidence';
import { updateResidence } from './queries/updateResidence';
import { Link, hashHistory } from 'react-router';
import query from './queries/fetchResidences';

class ResidentDetail extends Component {

	onSubmit(event) {
		event.preventDefault();

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

	render(){
		const { residence } = this.props.data;
		
		const optionState = this.props.data.house_status;			

		if (!residence) { return <div>Loading....</div>; }

		return(
			<div>
				<h3>Detail Resident</h3>
				<form onSubmit={this.onSubmit.bind(this)} className="ui form">
  				<label>Full Name</label>
  				<input 
  					onChange={event => this.setState({ full_name: event.target.value })}
  					value={residence.full_name}
  				/>
  				<label>Age</label>
  				<input
  					onChange={event => this.setState({ age: event.target.value })}
  					value={residence.age}
  					type="Number"
  				/>
  				<label>Address</label>
  				<input 
  					onChange={event => this.setState({ address: event.target.value })}
  					value={residence.address}
  				/>
  				<label>Email</label>
  				<input 
  					onChange={event => this.setState({ email: event.target.value })}
  					value={residence.email}
  					type="email"
  				/>
  				<label>Phone</label>
  				<input 
  					onChange={event => this.setState({ phone: event.target.value })}
  					value={residence.phone}
  					type="Number"
  				/>

  				<label>House Status</label>
				<select defaultValue={residence.house_status} onChange={event => this.setState({ house_status: event.target.value })} className="ui fluid dropdown">
					<option value="" disabled>Select</option>
		            <option value="Pribadi">Pribadi</option>
		            <option value="Sewa Keluarga">Sewa Keluarga</option>
		            <option value="Kos">Kos</option>
		            <option value="Sewa Kos">Sewa Kos</option>
		        </select>			    

  				<label>Lived Since</label>
  				<input 
  					onChange={event => this.setState({ lived_since: event.target.value })}
  					value={residence.lived_since}
  					type="Number" 					
  				/>
  				<label>Family Member</label>
  				<input 
  					onChange={event => this.setState({ family_member: event.target.value })}
  					value={residence.family_member}
  					type="Number"
  				/>

  					<button className="ui button" type="submit">Submit Order</button>

  				</form>
			</div>
		);
	}
}

export default graphql(fetchResidence, {
	options: (props) => { return { variables: { id: props.params.id } } }
})(ResidentDetail);