import { gql } from "@apollo/client";

export default gql`
  mutation AddCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
      code
      id
      emoji
      name
    }
  }
`;
