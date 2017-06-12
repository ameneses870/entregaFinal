import React, { Component } from 'react';
import {  
  View,
  Text,
  Image,
  TouchableHighlight,
  FlatList,
  Share
} from 'react-native';
import {styles} from './../styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default class MenuComponent2 extends Component{

	state={
		picker:'',
		framework:'',
		frameworks:[],
		slider: 0,
		falseSwitchIsOn : false,
		modalVisible : false,
		fill: 50
	}

	constructor(props) {
		super(props);		
 	}

	render(){
		return(			
			<View style={styles.inputWrap2}>									            				
				<View style={styles.ListCategorias}>
					<Text style={{color:this.props.colorFont}}>{this.props.titulo}</Text> 								
				</View>
			</View>
		)
	}
}