
import { gql } from "@apollo/client";

export const FOLLOW = gql`
  mutation ($following: String!, $follower: String!, $unFollow: Boolean!) {
    follow(
      data: { following: $following, follower: $follower, unFollow: $unFollow }
    ) {
      code
      description
      status
    }
  }
`;
