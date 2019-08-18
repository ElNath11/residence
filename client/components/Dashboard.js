import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router';
import fetchResidences from './queries/fetchResidences';
import residencesFilter from './queries/residencesFilter';

import { Table } from 'semantic-ui-react'


function searchingFor(term){
	return function(x){
		return x.house_status.toLowerCase().includes(term.toLowerCase()) || x.full_name.toLowerCase().includes(term.toLowerCase())
		|| !term;
	}
}

class Dashboard extends Component {
	constructor(props){
		super(props);

			this.state = { 
			residence: this.props.data.residences,
			term: ''
		}

		this.searchHandler = this.searchHandler.bind(this);	
	}

	searchHandler(event){
		this.setState({ term: event.target.value })
	}

	componentDidUpdate(props, state, snapshot) {
    if (this.props.data.residence !== props.data.residence) {
      this.setState(this.props.data.residence);
    }
  }

	onResidencDelete(id){
		this.props.mutate({ variables: { id } })
		 .then(() => this.props.data.refetch());
	}

	onResidenceFilter(house_status){
		this.setState({ house_status: event.target.value });
		this.props.mutate({ variables: { house_status } })
		 .then(() => this.props.data.refetch());
	}



	/*fetching data jamak residence*/

	renderResidences() {

		return this.props.data.residences.filter(searchingFor(this.state.term)).map(residence => {
			return(
					<tr key={residence.id} className="">
				        <td className="">{residence.full_name}</td>
				        <td className="">{residence.age}</td>
				        <td className="">{residence.address}</td>
				        <td className="">{residence.email}</td>
				        <td className="">{residence.phone}</td>
				        <td className="">{residence.house_status}</td>
				        <td className="">{residence.lived_since}</td>
				        <td className="">{residence.family_member}</td>
				        <td className="">
				        	<Link to={`/residence/${residence.id}`}><i className="material-icons">edit</i></Link>
				        	<i className="material-icons" onClick={() => this.onResidencDelete(residence.id)}>delete</i>
				        </td>
				      </tr>
			);
		});
	}

	render(){
		if (this.props.data.loading) { return <div>Loading....</div>; }
		const { term } = this.state;
		return(
			<div>

			<form>
      			<input type="text" 
      			onChange={this.searchHandler}
      			value={term}
      			placeholder="Search"
      			/>
      		</form>

				<div className="tabelList">
				  <table className="ui grey inverted table">
				    <thead className="">
				      <tr className="">
				        <th className="">Full Name</th>
				        <th className="">Age</th>
				        <th className="">Address</th>
				        <th className="">Email</th>
				        <th className="">Phone</th>
				        <th className="">House Status</th>
				        <th className="">Lived Since</th>
				        <th className="">Family Member</th>
				        <th className="">Action</th>
				      </tr>
				    </thead>
				    <tbody className="">
				      {this.renderResidences()}
				    </tbody>
				  </table>
				  	<Link to="residenceform" className="btn-floating btn-large blue right">
						<i className="material-icons">add</i>
					</Link>
				</div>
			</div>	
		);
	}
}

const deleteResidence = gql`
	mutation DeleteResidence($id: ID){
   	deleteResidence(id: $id){
    id
   }
 }
`;

export default graphql(deleteResidence)(
	graphql(fetchResidences)(Dashboard)
);
