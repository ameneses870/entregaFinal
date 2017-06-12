
import {StyleSheet,Dimensions} from 'react-native'
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {      
    flex: 0.5,     
  },
  welcome: {   
    alignItems: 'center',
    margin: 30,
  },  
  input: {
    flex: 1,
    paddingHorizontal: 10,
    color: "#FFFFFF"      ,
    height: 60,
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
  },
  logoAplication:{
    width: 150,
    height: 150
  },
  containerFormulario:{
    padding:10,
    flex:1
  },
  textos:{
    color: 'white',
    fontFamily: 'arial',
    fontSize: 35
  }


});