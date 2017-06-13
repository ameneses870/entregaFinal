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
		//console.log(props.data);
		this.state = {
			dataSource: ds,
			items:[]
		};
		//this.state={carrito:  this.consultarCarrito()}

		//this.consultarCarrito().then((valor)=>alert(valor))
		
	}

	updateDataSource = (data) => {
		console.log(data)
   		return this.state.dataSource.cloneWithRows(data);    
 	}

	async consultarCarrito(){
		try {
			const value = await AsyncStorage.getItem('carrito2');
			return value;						
		/*await AsyncStorage.getItem('carrito2',(value)=>{
			return value;
		});*/
		} catch (error) {
			alert(error)
		}	
	}

	componentDidMount(){
		this.consultarCarrito().then((data)=>this.setState({items:JSON.parse(data)}))
	}

	render(){		
		return (
			<ListView
			enableEmptySections={true}
			dataSource={this.updateDataSource(this.state.items)}
			renderRow={(item) => <ItemBox image={item.image} codigo={item.codigo} titulo={item.titulo} descripcion={item.descripcion} precio={item.precio}/>}	   						  
			/>
		);	
	}
}