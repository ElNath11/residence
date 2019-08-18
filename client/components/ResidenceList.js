import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchResidences from './queries/fetchResidences';

class ResidenceList extends Component {
	onResidencDelete(id){
		this.props.mutate({ variables: { id } })
		 .then(() => this.props.data.refetch());
	}


	renderResidences() {
		return this.props.data.residences.map(residence => {
			return(
				<li key={residence.id} className="collection-item">
				{residence.full_name}
				</li>
			);
		});
	}

	render(){
		if (this.props.data.loading) { return <div>Loading....</div>; }
		return(
			<div>
				<ul className="collection">
					{this.renderResidences()}
				</ul>
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
	graphql(fetchResidences)(ResidenceList)
);