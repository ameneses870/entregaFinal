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
export default class MenuComponent extends Component{

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
				<Icon name=	{this.props.iconName} size={30} color={this.props.colorIcon} />
				<View style={styles.iconWrap2}>
					<Text style={{color:this.props.colorFont}}>{this.props.titulo}</Text> 								
				</View>
			</View>
		)
	}
}