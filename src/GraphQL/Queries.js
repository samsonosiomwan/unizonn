import { gql } from "@apollo/client";

export const GET_USER = gql`
  {
    getUser(userId: "60eeb6c09446750021736263") {
      payload {
        userId
        email
        firstname
        lastname
        role
        interests{
            name
        }
        numberOfConnections
        followership {
          numberOfFollowers
          numberOfFollowing
        }
        country {
          
          name
        }
        department {
          subject
        }
        institution {
          name
        }
      }
    }
  }
`;
