import React, { Component } from 'react';
import {  
  View,
  Text,
  Image,
  TouchableHighlight,  
  Modal,
  StyleSheet,
  AsyncStorage
} from 'react-native';


const images ='';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageViewer from 'react-native-image-zoom-viewer';
import {MESSAGES } from '../../config/messages';
import {COLOR} from '../../config/color';

/*hoja de estilos*/
import {styles} from './styles'

export default class ItemBox extends Component{

	state={
		modalVisible: false
	}

	showModal(){
		this.setState({modalVisible:true});
	}




	addToCard= async(codigo,titulo,image,descripcion,precio)=>{

		const producto ={

			codigo:this.props.codigo,
			titulo:this.props.titulo,
			image:this.props.image,
			descripcion:this.props.descripcion,
			precio:this.props.precio
		}
		var lista = [];

      	try {
			var value = await AsyncStorage.getItem('carrito2');
											
				if (value){
					console.log("value: ", value);
					value= JSON.parse(value)
					lista = value;
				}

      	} catch (error) {
        	alert(error);
      	}


		lista.push(producto);

		try {
			await AsyncStorage.setItem('carrito2',JSON.stringify(lista) );    
		} catch (error) {
			alert(error);
		}	      	
	}

	constructor(props){
		super();
		images = [{ url: props.image}]
	}

	render(){
		return(
			<View style={styles.container}>

				<View style={styles.imageContainer}>
					<TouchableHighlight activeOpacity={.5} onPress={()=>this.showModal()}> 			        
				        <Image
			        		resizeMode={'cover'}
				          	style={styles.image}
				        	source={{uri: this.props.image}}			          
				          
				        />					
				    </TouchableHighlight>
				</View>

				<View style={styles.detalleContainer}>
					<Text style={styles.titulo}> {this.props.titulo}</Text>
					<Text> {this.props.descripcion}</Text>
					<Text> {MESSAGES.PRECIOPRODUCTO}{this.props.precio}</Text>
				</View>

				<View style={styles.iconContainer}>
					<TouchableHighlight activeOpacity={.5} onPress={this.addToCard.bind(this)}> 
						<Icon name="cart" size={30} color={COLOR.COLORICONCAR} />						
					</TouchableHighlight>						
				</View>

				<View style={styles.modalContainer}>
					<Modal
					animationType={"slide"}
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={()=> this.setState({modalVisible:false})}
					>
					 <ImageViewer imageUrls={[{url: this.props.image}]}/>
					</Modal>
				</View>
			</View>			
		)
	}
}