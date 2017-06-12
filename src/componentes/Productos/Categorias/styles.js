
import {StyleSheet,Dimensions} from 'react-native'
const { width, height } = Dimensions.get("window");
import {COLOR} from '../../../config/color';
export const styles = StyleSheet.create({
	container: {
		flex:1,
		flexDirection:'row'
	},
	iconContainer:{
		flex:0.5, 
		alignItems:'center', 
		justifyContent:'center'
	},
	tituloContainer:{
		flex:2, 
		justifyContent:'center', 
		marginLeft:20
	},
	tituloCategoria:{
		fontWeight:'bold',
		fontSize:18 
	}
});