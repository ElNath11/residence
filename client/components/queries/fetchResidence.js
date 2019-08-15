//Query Untuk fetching tunggal data residence

import gql from 'graphql-tag';

export default gql`
query ResidenceQuery($id: ID!) {
  residence(id: $id) {
    id
    full_name
    age
	address
	email
	phone
	house_status
	lived_since
	family_member
  }
}
`;