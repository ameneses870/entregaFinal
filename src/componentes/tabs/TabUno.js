import React, { Component } from 'react';
import {View, Text, Button, Image, ListView,DrawerLayoutAndroid} from 'react-native';
import {styles} from './styles';
import ItemBox from './../itembox/ItemBox'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomePage from './../HomePage/HomePage'; 
export default class TabUno extends Component{

	state ={
		listaArtistas : [],
		dataSource : ''
	};

	static navigationOptions = {
	    tabBarLabel: 'Tab uno',
	    tabBarIcon: ({ tintColor }) => (
	      <Icon name="playlist-check" size={25} color="#fff" />
	    ),
  	};

	componentDidMount(){
		this.getArtistas()
		.then((response) => response.json())
		.then((responseJson) => {	
			this.updateDataSource(responseJson.albums.album);	
		})
 	    .catch((error) => {
        	alert(error);        
      	});   	   		   
	}
	updateDataSource = (data)=>{
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(data)
		})
	}	

	getArtistas=()=>{
		return fetch('http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=disco&api_key=d87aee4b15a927041b1d10f8deb22221&format=json')		
	}
	constructor() {
	   super();

	   const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});      
	   this.state = {
	   	dataSource: ds.cloneWithRows([]),
	   };
 	}
	render(){

		return(

			<ListView	
				enableEmptySections={true}			
				dataSource={this.state.dataSource}
				renderRow={(item) => <ItemBox imagen={item.image[3]['#text']} titulo={item.url} descripcion={item.name} precio={item.image['#text']} />}
			/>

			
		)
	}
}
