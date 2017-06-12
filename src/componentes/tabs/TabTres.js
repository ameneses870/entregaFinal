import React, { Component } from 'react';
import {View, Text, Button, Image} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class TabTres extends Component{


	static navigationOptions = {
	    tabBarLabel: 'TabTres',
	    tabBarIcon: ({ tintColor }) => (
			<Icon name="shopping" size={25} color="#fff" />
	    ),
  	};

	render(){
		return(
			<View>
				<Text>Página Tres</Text>
			</View>
		)
	}



}
