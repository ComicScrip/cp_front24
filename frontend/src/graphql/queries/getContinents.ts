import { gql } from "@apollo/client";

export default gql`
  query Continents {
    continents {
      id
      name
    }
  }
`;
