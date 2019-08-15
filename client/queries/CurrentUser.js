//query root  current user

import gql from 'graphql-tag';

export default gql`
{
  user {
    id 
    email
  }
}
`;

