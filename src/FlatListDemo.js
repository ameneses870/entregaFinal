import React, { Component } from 'react';
import {  
  View,
  Text,
  Button,
  FlatList
} from 'react-native';

import { AnimatedCircularProgress } from 'react-native-circular-progress';
import ItemBoxDemo from './componentes/itembox/ItemBox';
export default class FlatListDemo extends Component{

	state={
		picker:'',
		framework:'',
		frameworks:[],
		slider: 0,
		falseSwitchIsOn : false,
		modalVisible : false,
		fill: 50
	}

	render(){
		return(
			<View style={{flex:1}}>
				<FlatList
				 data={[
					{'t':'Mentas','d':'Heladas Colombina','p':'$100'},
					{'t':'Mentas1','d':'Heladas Colombina','p':'$100'},
					{'t':'Mentas2','d':'Heladas Colombina','p':'$200'},
					{'t':'Mentas3','d':'Heladas Colombina','p':'$300'},
					{'t':'Mentas4','d':'Heladas Colombina','p':'$400'},
					{'t':'Mentas5','d':'Heladas Colombina','p':'$500'},
				  ]}
					renderItem={({item}) => <ItemBoxDemo titulo={item.t} descripcion={item.d} precio={item.p} />}
				/>	
			</View>
		)
	}
}