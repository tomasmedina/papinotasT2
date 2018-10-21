import React,{Component} from 'react';
import { View, FlatList, StyleSheet,TouchableOpacity,Alert} from 'react-native';
import { graphql, Query } from 'react-apollo';
import gql from 'graphql-tag';
import {Text, Searchbar,Button,Portal,Modal, Card, Title, Paragraph} from 'react-native-paper';
import CharacterItemClass from '../Character/Character';
import CharacterInfo from '../CharacterInfo/CharacterInfo';


class CharactersList extends Component{
    constructor(props){
        super(props);
        this.state={
            query:'',
            allPersons:[],
            visible:false,
            films:[],
            starships:[],
            planetName:'',
            name:'',
            data:[],
        };
        this.tempData=[];
    }


    showModal = ()=>this.setState({visible:true});
    hideModal = ()=>this.setState({visible:false});

    btnPress =(films,characterName,starships,homeworld)=>{
        let filmList = [];
        let starshipList = [];
        let home = '';
        films.map((film)=>{
            filmList.push(film.title)
        });

        starships.map((ship)=>{
            starshipList.push(ship.name)
        });
        this.filtered = [];

        this.setState({name:characterName})
        this.setState({films:[...filmList]})
        this.setState({starships:[...starshipList]});
        if(homeworld){
            this.setState({planetName:homeworld.name})
        }
        else{
            this.setState({planetName:'This character haves not a planet.'})
        }

        this.setState({visible:true});


    }

    filterPerson = text => {
        if(text.length == 0){
            this.setState({data:[]})
        }
        else{
            const newData = this.tempData.filter(person => {  

                const personNameToUpper = `${person.name.toUpperCase()}`;
                const textToUpper = text.toUpperCase();
                return personNameToUpper.indexOf(textToUpper) > -1;    
              });
              this.setState({allPersons:newData})
              this.setState({data:newData})
              this.state.allPersons === newData
        }
      };



    render(){

        const {allPersons} = this.props.data;
        const {visible} = this.state
        this.tempData = this.props.data.allPersons
        
        if(this.state.data.length==0){
            this.state.allPersons = this.tempData
        }
        else{
            this.state.allPersons = this.state.data
        }
        
        const {test} = true
        return (
            <View style={styles.container}>
            <Searchbar 
             placeholder="Search..." 
             onChangeText={text=>this.filterPerson(text)}>
            
            </Searchbar>
                <FlatList
                data = {this.state.allPersons}
                keyExtractor= {(item,index) => index.toString()}
                ListEmptyComponent={<Text style={styles.container}>Loading</Text>}      
                renderItem={({item})=>
                    <TouchableOpacity 
                    id={item.id}
                    onPress={()=>this.btnPress(item.films,item.name,item.starships,item.homeworld)}>
                        <CharacterItemClass 
                        id={item.id} films={item.films}
                        starships={item.starships}
                        name={item.name}
                        >
                        </CharacterItemClass>
                    </TouchableOpacity>}
                                
                    >
            </FlatList>
            <Portal>
            <Modal visible={visible} onDismiss={this.hideModal}>
                <Card>
                    <Card.Content>
                    <Title>{this.state.name}</Title>
                    <Paragraph><Text>Homeworld: {this.state.planetName}</Text></Paragraph>
                    <CharacterInfo data={this.state.films} dataName={"Movies: "}></CharacterInfo>
                    <CharacterInfo data={this.state.starships} dataName={"StarShips: "}></CharacterInfo>
                    </Card.Content>
                </Card>
                </Modal>
            </Portal>
            </View>



        )
    }
}


const getCharacters =  graphql(gql`
{ 
    allPersons(orderBy:name_ASC){
      id,
      name,
      films(orderBy:episodeId_ASC){
          title
      },
      starships(orderBy:name_ASC){
          name
      },
      homeworld{
          name
      }
    }
  }
`);

const styles = StyleSheet.create({
    text: {
        color:'#000000',
        fontSize:20
    },
    container:{
        flex:1,
    }
  });

CharactersList = (getCharacters)(CharactersList)
export default CharactersList;