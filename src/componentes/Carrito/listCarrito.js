import React, { Component } from 'react';
import {  
  View,
  Text,
  ListView,
  AsyncStorage
} from 'react-native';


import ItemBox from './ItemBox'

export default class listCarrito extends Component{


	state={
		dataSource:''
	}


	constructor(props) {
		super(props);      							
      	
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		console.log(props.data);
		this.state = {
			dataSource: ds.cloneWithRows(props.data),		
		};    

	}

              /*<ListView
              dataSource={this.state.dataSource}
              renderRow=
                {(item) =>

                	(categoria)?	
                	(
	                	(categoria===item.categoria) ? 
	                		<ItemBox codigo={item.code} titulo={item.title} descripcion={item.descripcion} image={item.image} precio={item.precio}/>
	                	:null
					)
					:
					<ItemBox codigo={item.code} titulo={item.title} descripcion={item.descripcion} image={item.image} precio={item.precio}/>

                }

              />     */   
	render(){
		const categoria= this.props.categoria;
		const contador=0
		return( 

			<ListView
              dataSource={this.state.dataSource}
              renderRow=
                {(item) =>
					<ItemBox codigo={item.codigo} titulo={item.titulo} descripcion={item.descripcion} image={item.image} precio={item.precio}/>
				}
			/> 			        
		)
	}
}