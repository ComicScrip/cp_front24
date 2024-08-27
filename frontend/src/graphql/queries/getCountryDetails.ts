import { gql } from "@apollo/client";

export default gql`
  query Country($code: String!) {
    country(code: $code) {
      id
      code
      name
      emoji
      continent {
        id
        name
      }
    }
  }
`;
