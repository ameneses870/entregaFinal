
import {StyleSheet,Dimensions} from 'react-native'
const { width, height } = Dimensions.get("window");
import {COLOR} from '../../config/color';
export const styles = StyleSheet.create({
	inputWrap2: {
		flexDirection:'row',
		flex:1      
	},
		iconWrap2: {
		paddingHorizontal: 7,
		justifyContent: "center"
	},
		background: {
		paddingHorizontal: 10,
		paddingVertical: 25,
		borderWidth: 1,
		borderLeftColor: 'transparent',
		borderColor: '#FFFFFF',
	},
		imageFontPerfil: {
		height: 200,
		backgroundColor: '#FFFFFF',
		
	},
		profile: {
		height: 200,
		backgroundColor: '#FFFFFF',
		
	},
		background2: {
		paddingHorizontal: 10,
		paddingVertical: 25,		
		borderLeftColor: 'transparent',
		borderColor: '#FFFFFF',
	},
	container:{
		flex:1
	},
	ListCategorias:{
		paddingVertical: 10
	},
	ButtonVerCarrito:{
		alignItems:'center',
		backgroundColor:'yellow'
	},
	TouchableButtonCarrito:{
		flexDirection:'row',
		alignItems:'center'
	}


});