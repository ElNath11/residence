import gql from 'graphql-tag';

export default gql`
	{
		residences {
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
	}`;