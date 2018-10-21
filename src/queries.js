import gql from 'graphql-tag';

const fetchCharacters = gql `{ 
    allPersons{
      id,
      name
    }
  }`;

//   const fetchCharacterData = gql `{ 
//     query getPerson($id:ID!){
//         allPersons(id:$id){
//           homeworld{
//               name
//           },
//           starships{
//               name
//           }
//         }
//     }
//   }`;

export {
    fetchCharacters,
    // fetchCharacterData
}