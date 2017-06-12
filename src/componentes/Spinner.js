import React, { Component } from 'react';
import {ActivityIndicator,Text,View}from 'react-native'; 
	

export default class Spinner extends Component{


	render(){
		if (this.props.visible){
			return(
				<View style={{flexDirection:'row'}}>
					<ActivityIndicator
						animating={true}
						size="small"
					/>
					<Text>{this.props.text}</Text>
				</View>
			);
		}else{
			return null;
		}
	}

}