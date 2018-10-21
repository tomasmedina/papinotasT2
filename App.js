/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,AppRegistry,FlatList, Alert} from 'react-native';
import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost';
import {ApolloProvider, Query} from 'react-apollo';
import gql from 'graphql-tag';
import {DefaultTheme, Provider as PaperProvider,Appbar, Searchbar} from 'react-native-paper';
import AppBar from './src/components/AppBar/AppBar';
import CharactersList from './src/components/CharactersList/CharactersList';
import ListTwo from './src/components/ListTwo/ListTwo';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const httpLink = {
  uri:'https://api.graphcms.com/simple/v1/swapi'
}

const client = new ApolloClient({
  link:new HttpLink(httpLink),
  cache: new InMemoryCache()
});


const getPersons = gql `{ 
    allPersons{
      id,
      name
    }
  }`;

// client.query({query:getPersons}).then(result=>{console.log(result)}).catch(error=>{console.log(error)});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <PaperProvider >
      <AppBar></AppBar>
        <ApolloProvider client={client}>
        <CharactersList></CharactersList>        
        </ApolloProvider>

      </PaperProvider>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    alignItems:'center',
    color: '#333333'
  },
});


const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#eeeeee',
    accent: '#f1c40f',
  }
}

AppRegistry.registerComponent('MyApplication', () => App);
