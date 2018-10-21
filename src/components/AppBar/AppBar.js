import  React, {Component} from 'react';
import { Appbar, DefaultTheme,Searchbar } from 'react-native-paper';
import {StyleSheet} from 'react-native';

class AppBar extends Component{
    render(){
        return(<Appbar.Header style={styles.appbar} >
            <Appbar.Content style={styles.text}
            title="StarWars"
            subtitle="The Test"
            >
    
            </Appbar.Content>
          </Appbar.Header>

          
          )
            
        
    }
}

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
      accent: '#ffffff',
    }
  }
const styles = StyleSheet.create({
  appbar:{
    backgroundColor:"#1875BE",
    color:"#ffffff",
    fontSize:30
  },
  text:{
    color:"#ffffff"
  }
})
export default AppBar;