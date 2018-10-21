// import React,{Component} from 'react';
// import { View, FlatList, StyleSheet,TouchableOpacity,Alert} from 'react-native';
// import { graphql, Query,ApolloProvider } from 'react-apollo';
// import gql from 'graphql-tag';
// import {Text, Searchbar,Button,Portal,Modal, Card, Title, Paragraph} from 'react-native-paper';
// import CharacterItemClass from '../Character/Character';
// import CharacterInfo from '../CharacterInfo/CharacterInfo';

// const httpLink = {
//     uri:'https://api.graphcms.com/simple/v1/swapi'
//   }
  
//   const client = new ApolloClient({
//     link:new HttpLink(httpLink),
//     cache: new InMemoryCache()
//   });
  
  
//   const getPersons = gql `{ 
//       allPersons{
//         id,
//         name
//       }
//     }`;

// class ListTwo extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             query:'',
//             allPersons:[],
//             visible:false,
//             films:[],
//             starships:[],
//             planetName:'',
//             name:'',
//             data:[],
//             refresh:false
//         };
//         this.arrayholder=[];
//     }


//     componentDidMount(){
        
//     }

    
      
//     render(){     
//         return (
//             <ApolloProvider client={client}>
//             <View style={styles.container}>
//                 <Text>Text</Text>
//             </View>
//             <ApolloProvider>



//         )
//     }
// }



