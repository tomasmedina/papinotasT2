import React,{Component} from 'react';
import {Modal,Text,Button,Portal,Switch} from 'react-native-paper';
import {Alert,View,StyleSheet} from 'react-native';


class CharacterItemClass extends Component{
    constructor(props){
        super(props);
        this.state={
            favorite:false,

        }
    }

    favoriteCharacter=()=>{
        this.setState({favorite:!this.state.favorite})

    }

    render(){

        this.state.id = this.props.id


        return(
  
            <View style={styles.container}>
                <Text style={styles.text} key={this.props.id}>{this.props.name} </Text>

                {this.state.favorite ? 
                    <Button compact={true} style={styles.buttonFavorite} icon="star" mode="contained" onPress={()=>{this.favoriteCharacter()}}></Button>
                    : <Button compact={true} style={styles.button} icon="star" mode="contained" onPress={()=>{this.favoriteCharacter()}}></Button>
                }
            </View>

        )
    }

}

const styles = StyleSheet.create({
    text: {
        color:'#000000',
        fontSize:20
    },
    container:{
        flex:1,
        padding:12,
        flexDirection:'row',
        alignItems:'center'
    },
    button:{
        marginLeft:'auto',
        backgroundColor:"#3498db",
        color:"#ffffff",
        padding:2
    },
    buttonFavorite:{
        marginLeft:'auto',
        backgroundColor:"#EBDF39",
        color:"#ffffff",
        padding:2
    }
  });


export default CharacterItemClass;