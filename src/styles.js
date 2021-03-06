
import {StyleSheet,Dimensions} from 'react-native'
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {      
      flex: 1,     
  },
 welcome: {   
  
   alignItems: 'center',
   margin: 30,
 },
 instructions: {
   textAlign: 'center',
   color: '#333333',
   marginBottom: 5,
 },  
    input: {
      flex: 1,
      paddingHorizontal: 10,
      color: "#FFFFFF"      ,
      height: 60,
    },
    signupLinkText: {
      color: "#FFF",
      marginLeft: 5,
    },
        mark: {
      width: 200,
      height: 200,   
      alignItems: 'center',   
    },
    buttonText: {
      fontFamily: 'Arial', 
      fontSize: 15, 
      color:'#fff'
    },
    buttonText2: {

      fontFamily: 'Arial', 
      fontSize: 15, 
      color:'#fff',
      backgroundColor: "transparent"
    },
    background: {
       flex: 1,
      width:null,
      height:null,
      resizeMode: "cover"
      
    },
    background2: {
      width : width-35,
      height,

    },
    inputWrap: {
      flexDirection: "row",
      marginVertical: 0,
      height: 30, 
      width,    
      alignItems: "center", 
      justifyContent: "center", 
    },
    button: {
      flexDirection: "row",
      backgroundColor: "#660066",
      paddingVertical: 10,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
    },
    button2: {      
           flexDirection: "row",
      backgroundColor: "#3b5998",
      paddingVertical: 10,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
    },
        button3: {      
      backgroundColor: "transparent",
      paddingVertical: 10,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
    },
    inputWrap2: {
     flexDirection: "row",
     marginVertical: 10,
     height: 40,
     borderBottomWidth: 1,
     borderBottomColor: "#CCC",     
   },
   iconWrap2: {
     paddingHorizontal: 7,
     alignItems: "center",
     justifyContent: "center",
   }

});