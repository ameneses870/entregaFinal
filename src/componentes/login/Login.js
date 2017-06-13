import React, { Component } from 'react';
import {  
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
  ToastAndroid


} from 'react-native'; 
import { NavigationActions } from 'react-navigation'

import { validarLogin,loguearse} from '../../Firebase/services'

/* inicializacion del firebase*/
//import FIRE from '../../Firebase/firebase_apiKey'


/*librerias externas*/
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

/*hoja de estilos*/
import {styles} from './styles';  

/*componentes propios*/
import Spinner from './../Spinner.js';

/*datos parametrizables*/
import {MESSAGES } from '../../config/messages';
import {COLOR} from '../../config/color';



var mensaje=''; 
var mustraIndicator = true;

//FIRE.init();
export default class Login extends Component{

  static navigationOptions = {    
    header:false
  };

  state = {
  'username' : '',
  'password' : '',  
  'spinner' : false,
  'mustraIndicator' : false,
  'mensaje' : ''
  }; 
  
  
 
  constructor(props) {
    super(props);
    this.state = { username: 'ameneses870@hotmail.com','password': 'salpicon' ,'spinner' : false,'mustraIndicator' : false,'mensaje' : '','button': false};
    
  }


  doLogin = async()=>{    
    let validacion = '';
    if (this.state.username=='' || this.state.password==''){
      ToastAndroid.show(MESSAGES.VALIDACIONUSUARIO, ToastAndroid.SHORT);      
    }else{
      
      this.setState({mensaje : MESSAGES.MESSAGGESPINNER}); 
      this.setState({'mustraIndicator' : true});
      this.setState({button: true})
     await loguearse(this.state.username,this.state.password)
      .then((responseJson) => {
        validacion = responseJson;
      })

      if (validacion == true){
        this._timer = setTimeout(() => {          
          this.setState({'mustraIndicator' : false});            
          //this.props.navigation.navigate('HomePage');

          let resetAction = NavigationActions.reset({ 
            index: 0, 
            actions: [ 
            NavigationActions.navigate({ routeName: 'HomePage'}) ] 
          }) 
            this.props.navigation.dispatch(resetAction)


        }, 5000);
      }else{
      this.setState({'mustraIndicator' : false});        
      }
    }   
  }

  componentDidMount(){
      validarLogin()          
        .then((responseJson) => {          
          let a = responseJson ? 'homepage':'login'          
        })      
  }

  ejecutar=()=>{
    let resetAction = NavigationActions.reset({ 
            index: 0, 
            actions: [ 
            NavigationActions.navigate({ routeName: 'registrarse'}) ] 
          }) 
            this.props.navigation.dispatch(resetAction)

    this.props.navigation.navigate('registrarse');
  }
    
  /*                <TouchableOpacity activeOpacity={.5}>  
                  <View style={styles.button2}>           
                    <Icon name="facebook" size={30} color="#fff" />                                 
                    <Text style={styles.buttonText}>Login with Facebook</Text>                              
                  </View>          
                </TouchableOpacity>*/
  render(){         
    
      return(		  
        <View style={styles.container}>
          <Image source={MESSAGES.FONDOLOGIN} style={styles.background}>
            <ScrollView>             
              <View style={styles.welcome}>
                <Image source={MESSAGES.LOGOLOGIN} style={styles.logoAplication}>
                </Image>
              </View>

              <View style={styles.containerFormulario}>                  
                  <View style={styles.inputWrap2}>

                    <View style={styles.iconWrap2}>                
                      <Icon name="account-outline" size={30} color={COLOR.COLORICONLOGIN} />
                    </View>
                    <TextInput 
                      ref="1"
                      returKeyType="{next}"
                      onSubmitEditing = {()=> this.refs[2].focus()}
                      onChangeText={(username) => this.setState({username})}
                      placeholder={MESSAGES.placeholderEmail}
                      placeholderTextColor={COLOR.placeholderTextColorLogin}
                      style={styles.input} 
                    />          
                  </View>        
                <View style={styles.inputWrap2}>
                  <View style={styles.iconWrap2}>                
                    <Icon name="lock-outline" size={30} color={COLOR.COLORICONLOGIN} />
                  </View>
                  <TextInput 
                    ref="2"
                    returKeyType="{next}"
                    onSubmitEditing = {this.doLogin}
                    onChangeText={(password) => this.setState({password})}
                    placeholder={MESSAGES.placeholderPassword} 
                    placeholderTextColor={COLOR.placeholderTextColorLogin}
                    style={styles.input} 
                    secureTextEntry
                  />
                </View>
                <TouchableOpacity activeOpacity={.5} onPress={this.doLogin} disabled={this.state.button}>  
                  <View style={styles.button}>           
                    <Icon name="account-outline" size={30} color={COLOR.COLORICONLOGIN} />                                 
                    <Text style={styles.buttonText}>{MESSAGES.textoBotonLogin}</Text>                                        
                  </View>          
                </TouchableOpacity>
                <View style={styles.button3}>            
                  <Icon.Button name="barcode" backgroundColor={COLOR.COLORLOGINBUTTON}>
                    <TouchableOpacity activeOpacity={.5} disabled={this.state.button}>
                      <Text style={styles.buttonText2}>{MESSAGES.textoRecordarContraseña}</Text>
                    </TouchableOpacity>
                  </Icon.Button>              
                </View>
                <View style={styles.button3}>                              
                    <TouchableOpacity activeOpacity={.5} disabled={this.state.button} onPress={this.ejecutar}>
                      <Text style={styles.buttonText2}>{MESSAGES.textoCrearCuenta}</Text>
                    </TouchableOpacity>                  
                </View>
                <View style={styles.button3}> 
                    <Spinner text= {this.state.mensaje} visible= {this.state.mustraIndicator}/>
                </View>
              </View>
              <View style={styles.inputWrap}>
                <Text>{MESSAGES.copyright1}</Text>                                        
              </View>

              <View style={styles.inputWrap}>
                <Text>{MESSAGES.copyright2}</Text>  
              </View>           
            </ScrollView>           
          </Image>      
        </View>     
    	)    
  }
}