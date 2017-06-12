import React, { Component } from 'react';
import {  
  View,
  Text,
  Image,
  TouchableHighlight,
  FlatList,
  Share
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLOR} from '../../../config/color';
/*hoja de estilos*/
import {styles} from './styles'

export default class ItemBox extends Component{

	render(){
		return(
			<View style={styles.container}>

				<View style={styles.iconContainer}>
			        <Icon name={this.props.image} size={45} color={COLOR.COLORICONCATEGORIA} />				
				</View>

				<View style={styles.tituloContainer}>
					<Text style={styles.tituloCategoria}> {this.props.titulo}</Text>
				</View>
			</View>
		)
	}
}