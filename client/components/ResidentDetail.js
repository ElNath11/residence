import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import fetchResidence from './queries/fetchResidence';
import { updateResidence } from './queries/updateResidence';
import { Link, hashHistory } from 'react-router';
import query from './queries/fetchResidences';

class ResidentDetail extends React.Component {
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
      isLoading: false };
	}		

	onSubmit(event) {
		event.preventDefault();
    this.setState({ isLoading: true });
		this.props.mutate({
			variables: {
				id: this.props.params.id,
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

	

	componentDidUpdate(props, state, snapshot) {
    if (this.props.data.residence !== props.data.residence) {
      this.setState(this.props.data.residence);
    }
  }

	/*static getDerivedStateFromProps(nextProps, prevState) {
       const { id, full_name, age } = nextProps.data.residence;
       if (JSON.stringify(nextProps.data.residence.id) !== JSON.stringify(prevState.data.residence.id)) {
          return {
              id,
              full_name,
              age
          };
       }

    return null;

 }*/
	

	render(){
		const { id, full_name, age } = this.state;
		const { residence } = this.props.data;
		if (!residence) { return <div>Loading....</div>; }

		return(
			<div>
      <Link to="/dashboard" className="ui secondary button mt-1">Back</Link>
				<h3>Detail Resident</h3>
				<form onSubmit={this.onSubmit.bind(this)} className="ui form">
  				<label>Full Name</label>
  				<input 
  					onChange={event => this.setState({ full_name: event.target.value })}
  					value={this.state.full_name}
  				/>
  				<label>Age</label>
  				<input
  					onChange={event => this.setState({ age: event.target.value })}
  					value={this.state.age}
  					type="Number"
  				/>
  				<label>Address</label>
  				<input 
  					onChange={event => this.setState({ address: event.target.value })}
  					value={this.state.address}
  				/>
  				<label>Email</label>
  				<input 
  					onChange={event => this.setState({ email: event.target.value })}
  					value={this.state.email}
  					type="email"
  				/>
  				<label>Phone</label>
  				<input 
  					onChange={event => this.setState({ phone: event.target.value })}
  					value={this.state.phone}
  					type="Number"
  				/>

  				<label>House Status</label>
				<select defaultValue={residence.house_status} onChange={event => this.setState({ house_status: event.target.value })} className="ui fluid dropdown">
					<option value="" disabled>Select</option>
		            <option value="Pribadi" >Pribadi</option>
		            <option value="Sewa Keluarga" >Sewa Keluarga</option>
		            <option value="Kos">Kos</option>
		            <option value="Sewa Kos">Sewa Kos</option>
		        </select>			    

  				<label>Lived Since</label>
  				<input 
  					onChange={event => this.setState({ lived_since: event.target.value })}
  					value={this.state.lived_since}
  					type="Number" 					
  				/>
  				<label>Family Member</label>
  				<input 
  					onChange={event => this.setState({ family_member: event.target.value })}
  					value={this.state.family_member}
  					type="Number"
  				/>
  					<button className={"ui button blue mt-1 " + (this.state.isLoading ? 'loading disabled' : '')} type="submit">Update</button>
  				</form>
			</div>
		);
	}
}


export default graphql(updateResidence)(
	graphql(fetchResidence, {
	options: (props) => { return { variables: { id: props.params.id } } }
})(ResidentDetail)
);