import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import history from '../history';
import { hashHistory } from 'react-router';

class ResidenceDelete extends React.Component {

    onResidencDelete(id){
    this.props.mutate({ variables: { id } })
     .then(() => this.props.data.refetch());
  }

  renderActions(){
  const {id} = this.props.params;
  return (
    <React.Fragment>
      <button 
      onClick={() => this.props.onResidencDelete(id)} 
      className="ui button negative">Delete</button>
      <Link to={() => hashHistory.push('/dashboard')} className="ui button">Cancel</Link>
    </React.Fragment>
  );
}

renderContent() {
  return 'Apakah anda yakin?';
}

  render(){    
    
    return(
      <Modal 
      title="Delete Comment"
      content={this.renderContent()}
      actions={this.renderActions()}
      onDismiss={() => hashHistory.push('/dashboard')}
      />
    );
  }
};

const deleteResidence = gql`
  mutation DeleteResidence($id: ID){
    deleteResidence(id: $id){
    id
   }
 }
`;

export default graphql(deleteResidence)(ResidenceDelete);