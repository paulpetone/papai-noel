import { gql } from "@apollo/client";


const cepQuery = gql`
  query CepQuery($cep: String!) {
    getResult(cep: $cep) {
      message
      shouldReceivePresent
    }
  }
`

export default cepQuery;