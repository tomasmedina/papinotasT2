import React,{Component} from 'react';
import {Paragraph, Text} from 'react-native-paper';
import {Alert,View,StyleSheet} from 'react-native';


class CharacterInfo extends Component{
    constructor(props){
        super(props);
        this.state={
            favorite:false,
        }
    }

    favoriteCharacter(){
        this.setState({favorite:true})
    }

    render(){
        const{visible} = this.state
        const{favorite} = this.state
        let data = this.props.data
        return(
            <View>
                <Text style={styles.text}>{this.props.dataName}</Text>
                {this.props.data.length>0 ? data.map((item,key)=>{return(<Text key={key+item}>{item}</Text>)}): <Text >This character haves a starship not.</Text>}
            </View>

        )
    }

}

const styles = StyleSheet.create({
    text: {
        color:'#000000',
        fontSize:15,
        marginTop:'auto'
    },
    container:{
        flex:1,
        padding:12,
    },
    button:{
        marginLeft:'auto',
        backgroundColor:"#3498db",
        color:"#ffffff"
    }
  });


export default CharacterInfo;