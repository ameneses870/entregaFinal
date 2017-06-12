import React, { Component } from 'react';
import {  
  View,
  Text,
  ListView,
  Button
} from 'react-native';

import {DB} from './productos'
import ItemBox from './ItemBox'

export default class listProductos extends Component{

	ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	state={
		dataSource:''		
	}



	constructor(props) {
		super(props);				
		this.state = {dataSource: this.ds.cloneWithRows(this.filtrar(this.props.categoria))};
	}	

	filtrar = (categoria)=>{		
		
		lista = [];

		if(categoria){
			
			lista = DB.filter((value)=>{			
				return (categoria==value.categoria)
			});	
		}else{
			lista = DB;
		}
		return lista;	
		
	}


	render(){
		const categoria= this.props.categoria;
		
		return(
				
              <ListView
              enableEmptySections={true}
              dataSource={this.state.dataSource}
              renderRow=
                {(item) => <ItemBox codigo={item.code} titulo={item.title} descripcion={item.descripcion} image={item.image} precio={item.precio}/>

                }

              />
                        
		)
		
	}
}