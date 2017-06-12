import React, {Component} from 'react'
import {
	View, 
	Text, 
	Button,
	ListView, 
	DrawerLayoutAndroid,
	ToolbarAndroid,
	TextInput,
	Image,
	TouchableOpacity
} from 'react-native'
import ItemBox from './componentes/itembox/ItemBox'
import ToolBarEdit from './componentes/ToolBarEdit/ToolBarEdit'
import {DB} from './data/db.js'
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//const mark = require("./componentes/ToolBarEdit/assets/fondoLogin.png");

	const navigationView = (
	    <View style={{flex: 1, backgroundColor: '#fff'}}>
	       
	      	<Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Acceder</Text>
	      
	    </View>
    );

export default class ListViewDemo extends Component {

  static navigationOptions = {    
    header:false
  };
	openDrawer() {
		this.refs['DRAWER'].openDrawer();
	}

	constructor() {
		super();
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(DB),
		};
 	}


	render(){

/*<ToolBarEdit navigation={'aaaaa'}/>

			<Button
			onPress={this.openDrawer.bind(this)}
			title="Consultar"
			color="black"	 
			/>	
	*/
	return(		
		
		<View style={{flex:1}}>
				
	

			<DrawerLayoutAndroid
				drawerWidth={300}
				drawerPosition={DrawerLayoutAndroid.positions.Left}
				renderNavigationView={() => navigationView}
				ref={'DRAWER'}
			>				

			<ToolBarEdit navigation={this.refs['DRAWER']}>
				<TouchableOpacity activeOpacity={.5} onPress={this.openDrawer.bind(this)}>
					<Icon name="menu" size={30} color="gray" />                      
				</TouchableOpacity>
			</ToolBarEdit>	

				<ListView
			       	dataSource={this.state.dataSource}
			       	renderRow={(item) => <ItemBox titulo={item.name} descripcion={item.about} precio={item.p} />}
				/>		
			</DrawerLayoutAndroid>

		</View>
	)
}

}