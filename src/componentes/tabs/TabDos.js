import React, { Component } from 'react';
import {
	View, 
	Text, 
	Button, 
	Image, 
	TouchableOpacity,
	AppState,
	TextInput,
	AsyncStorage
}from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class TabDos extends Component{

	state = {
	'appState' : AppState.currentState,
	'nombre' : '',
	'telefono':''

	}; 
	static navigationOptions = {
	    tabBarLabel: 'TabDos',
	    tabBarIcon: ({ tintColor }) => (
	    <Icon name="email" size={25} color="#fff" />
	    ),

  	};
		 
 	componentDidMount() {
		AppState.addEventListener('change', this._handleAppStateChange);
		this.consulta();
	}

	componentWillUnmount() {
		AppState.removeEventListener('change', this._handleAppStateChange);
      	try {
			AsyncStorage.getItem('nombre',(value)=>{
				alert(value);
    		});
      	} catch (error) {
        	alert(error);
      	}
	}

	_handleAppStateChange = (nextAppState) => {
		if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
		  console.log('App has come to the foreground!')
		}
		this.setState({appState: nextAppState});
	}

	guardar = ()=>{
      	try {
			AsyncStorage.setItem('nombre',this.state.nombre)
      	} catch (error) {
        	alert(error);
      	}
	}

	consulta = async()=>{
      	try {
			var value = await AsyncStorage.getItem('nombre');			
				alert(value);    		
      	} catch (error) {
        	alert(error);
      	}
	}

	render(){
		return(
			

		<View>
			<Text>Current state is: {this.state.appState}</Text>

			<TextInput 						
			onChangeText={(nombre) => this.setState({nombre})}
			placeholder="nombre" 
			placeholderTextColor="#FFFFFF" 
			value={this.state.nombre}                   
			/>  

			<TextInput 						
			onChangeText={(txt) => this.setState({telefono : txt})}
			placeholder="nombre" 
			placeholderTextColor="#FFFFFF"                      
			value={this.state.telefono}                   
			/>  

			<Button
			onPress={this.guardar.bind(this)}
			title="Guardar"
			color="#841584"	 
			/>	

			<Button
			onPress={this.consulta.bind(this)}
			title="Consultar"
			color="black"	 
			/>		
		</View>
		)
	}



}
