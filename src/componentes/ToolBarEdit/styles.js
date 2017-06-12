
import {StyleSheet,Dimensions} from 'react-native'
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    height:80,
    backgroundColor: '#9A2EFE',
    alignItems:'center',
    flexDirection: "row",
    justifyContent: "center"
},  
    input: {      
      width : 270,
      color: "black"
    },
    inputWrap2: {
     flexDirection: "row",
     marginVertical: 10,
     height: 40,
     backgroundColor: '#fff',
     flexDirection: "row",
     width:350     
   },
   iconWrap2: {
     paddingHorizontal: 7,
     alignItems: "center",
     justifyContent: "center"
   }

});