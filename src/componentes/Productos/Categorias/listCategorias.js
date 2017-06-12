import React, { Component } from 'react';
import {  
  View,
  Text,
  ListView
} from 'react-native';


import ItemBox from './ItemBoxCategorias'

export default class listProductos extends Component{

	state={
		dataSource:''
	}

	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});		
		this.state = {
			dataSource: ds.cloneWithRows(DB),		
		};    

	}	

	render(){
		return(           
              <ListView
              dataSource={this.state.dataSource}
              renderRow=
                {(item) =><ItemBox codigo={item.code} titulo={item.title}  image={item.icon}/>}
              />             
		)
	}
}