import { gql } from "@apollo/client";

export default gql`
  query Countries {
    countries {
      id
      code
      name
      emoji
    }
  }
`;
