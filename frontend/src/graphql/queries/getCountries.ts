import { gql } from "@apollo/client";

export default gql`
  query Countries($continentId: String) {
    countries(continentId: $continentId) {
      id
      name
      emoji
      code
    }
  }
`;
