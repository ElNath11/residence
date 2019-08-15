//query update residence

import gql from "graphql-tag";

export const updateResidence = gql`
    mutation Update($id: String!, $full_name: String, $age: Int, $address: String, $email: String, $phone: String, $house_status: String, $lived_since: Int, $family_member: Int){
  		updateResidence(id: $id ,full_name: $full_name, age: $age, address: $address, email: $email, phone: $phone, house_status: $house_status, lived_since: $lived_since, family_member: $family_member){
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