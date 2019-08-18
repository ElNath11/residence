//Query Untuk fetching tunggal data residence

import gql from 'graphql-tag';

export default gql`
query ResidencesFilter($house_status: String!) {
  residencesFilter(house_status: $house_status) {
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