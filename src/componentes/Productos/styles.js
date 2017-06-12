
import {StyleSheet,Dimensions} from 'react-native'
const { width, height } = Dimensions.get("window");
import {COLOR} from '../../config/color';
export const styles = StyleSheet.create({
	container: {
		flex:1,
		flexDirection:'row', 
		borderBottomWidth:0.4
	},
	imageContainer:{
		flex:0.5, 
		alignItems:'center', 
		justifyContent:'center'
	},
	image:{
		width: 80, 
		height: 90
	},
	detalleContainer:{
		flex:2, 
		justifyContent:'center', 
		marginLeft:20
	},
	titulo:{
		fontWeight:'bold',
		fontSize:16
	},
	iconContainer:{
		flex:0.3, 
		alignItems:'center', 
		justifyContent:'center'
	},
	modalContainer:{
		alignItems:'center'
	}
});