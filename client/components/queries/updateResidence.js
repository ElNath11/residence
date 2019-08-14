import gql from "graphql-tag";

export const updateResidence = gql`
    mutation($id: String!) {
        updateResidence(
            where: {id: {_eq: $id}} 
            _set: {full_name: $full_name, age: $age, address: $address, email: $email, phone: $phone, house_status: $house_status, lived_since: $lived_since, family_member: $family_member}
            ){
            affected_rows
          }
    }
`;