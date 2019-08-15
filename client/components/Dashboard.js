import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchResidences from './queries/fetchResidences';

import { Table } from 'semantic-ui-react'

class Dashboard extends Component {
	onResidencDelete(id){
		this.props.mutate({ variables: { id } })
		 .then(() => this.props.data.refetch());
	}

	//fetching data jamak residence
	renderResidences() {
		return this.props.data.residences.map(residence => {
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
		return(
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