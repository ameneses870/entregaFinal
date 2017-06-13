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
  ToastAndroid,
  Platform


} from 'react-native'; 
import { NavigationActions } from 'react-navigation'

import { validarLogin,loguearse,setUsername,getUID,registrarce,uploadImage} from '../../../Firebase/services'


import * as firebase from 'firebase'

/*librerias externas*/
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ImagePicker from 'react-native-image-picker';
/*hoja de estilos*/
import {styles} from './styles';  

/*componentes propios*/
import Spinner from './../../Spinner.js';

/*datos parametrizables*/
import {MESSAGES } from '../../../config/messages';
import {COLOR} from '../../../config/color';



/*const Blob = RNFetchBlob.polyfill.Blob
const fs= RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob
*/
var mensaje=''; 
var mustraIndicator = true;

var options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};
//FIRE.init();
export default class Registrarse extends Component{

  static navigationOptions = {    
    header:false
  };

    state = { 
      username: '',
      'password': '' ,
      'email':'',
      'direccion':'',
      'telefono':'',
      'password':'',
      'password2': '',
      'uid': '',
      'spinner' : false,
      'mustraIndicator' : false,
      'mensaje' : '',
      'button': false,
      'avatarSource':'',
      'imagePath':'',
      'imageHeight':'',
      'imageWidth':'',
      'textoImagen':''
    };
  
  
 
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      'password': '' ,
      'email':'',
      'direccion':'',
      'telefono':'',
      'password':'',
      'password2': '',
      'uid': '',
      'spinner' : false,
      'mustraIndicator' : false,
      'mensaje' : '',
      'button': false,
      'avatarSource':'',
      'imagePath':'https://previews.123rf.com/images/asmati/asmati1602/asmati160202968/52180906-signo-del-usuario-icono-de-estilo-plano-en-el-fondo-transparente-Foto-de-archivo.jpg',
      'imageHeight':'',
      'imageWidth':'',
      'textoImagen':''
    };
    
  }
/*
  async componentWillMount(){
    this.setState({uid: await getUID()})
  }*
/*
saveForm = async()=>{

    registrarce()
console.log(this.state.uid)
 let a= await setUsername(this.state.uid,'alonso')
    console.log(a);

  }*/


  openImagePicker =()=>{
    const options ={
      title:MESSAGES.tituloImagen,
      storageOptions:{
      skipBackup:true,
      path:'images'
      }
    }

  ImagePicker.showImagePicker(options,(response => {
    
    if(response.didCancel){
      ToastAndroid.show(MESSAGES.cargueImagenCancelado, ToastAndroid.LONG);      
    }else if(response.error){
      ToastAndroid.show(response.error, ToastAndroid.LONG);                
    }else{
      this.setState({
      imagePath:response.uri,
      imageHeight:response.height,
      imageWidth:response.width
      
      })
    }
  }))

}

muestraImage=()=>{
  if (this.state.imagePath!=''){
    return(<Image source={{uri:this.state.imagePath}} style={styles.logoAplication}/>)
  }
  
}
  saveForm= async()=>{
      let register =''
      let validacion= ''
    if (this.state.username== ''|| this.state.lastName==''||this.state.email==''||this.state.direccion==''||this.state.telefono==''||this.state.password==''||this.state.password2==''){
      ToastAndroid.show(MESSAGES.validacionRegistrarse, ToastAndroid.LONG); 
      return
    }else{            
      if(this.state.imagePath=='https://previews.123rf.com/images/asmati/asmati1602/asmati160202968/52180906-signo-del-usuario-icono-de-estilo-plano-en-el-fondo-transparente-Foto-de-archivo.jpg'){  
        ToastAndroid.show(MESSAGES.validacionCamara, ToastAndroid.LONG); 
        return
      }else{
        if (this.state.password == this.state.password2){
        this.setState({mensaje : MESSAGES.MESSAGGESPINNER}); 
        this.setState({'mustraIndicator' : true});
        this.setState({button: true})

        register = await registrarce(this.state.email,this.state.password)
        if (register){

          await loguearse(this.state.email,this.state.password)
          .then((responseJson) => {
            validacion = responseJson;
          })  

          if (validacion){
            this.setState({uid: await getUID()});
            if (this.state.uid!=false && this.state.uid!=''){
              let datosUsuario = {
                'nombres'   :this.state.username,
                'apellidos' :this.state.lastName,
                'correo'    :this.state.email,
                'direccion' :this.state.direccion,
                'telefono'  :this.state.telefono,
                'url'       :this.state.url
              }
              setUsername(this.state.uid,datosUsuario);
              await uploadImage(this.state.imagePath,`${this.state.uid}.JPG`)
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
              return;
            }
            
          }else{            
            this.setState({'mustraIndicator' : false});
            this.setState({button: false})
          }
        }       
        }else{
         ToastAndroid.show(MESSAGES.validacionClaves, ToastAndroid.LONG);             
        return
        }

        
      }
    }
        this.setState({'mustraIndicator' : false});
        this.setState({button: false})

  }

  /*doLogin = async()=>{    
    alert('abcd')
    let validacion = '';
    if (this.state.username=='' || this.state.password==''){
      ToastAndroid.show(MESSAGES.VALIDACIONUSUARIO, ToastAndroid.SHORT);      
    }else{
      
      this.setState({mensaje : MESSAGES.MESSAGGESPINNER}); 
      this.setState({'mustraIndicator' : true});

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
  }*/

  /*componentDidMount(){
      validarLogin()          
        .then((responseJson) => {          
          let a = responseJson ? 'homepage':'login'
          console.log(responseJson);
        })      
  }*/

  /*ejecutar(){
        validarLogin()          
        .then((responseJson) => {          
          let a = responseJson['uid'] ? 'homepage':'login'
          console.log(responseJson);
        })
  }*/
    
  /*                <TouchableOpacity activeOpacity={.5}>  
                  <View style={styles.button2}>           
                    <Icon name="facebook" size={30} color="#fff" />                                 
                    <Text style={styles.buttonText}>Login with Facebook</Text>                              
                  </View>          
                </TouchableOpacity>*/
  render(){         
    /*         */
      return(		  
        <View style={styles.container}>
          <Image source={MESSAGES.FONDOLOGIN} style={styles.background}>
            <ScrollView>             
              <View style={styles.welcome}>
                {this.muestraImage()} 
                <Text style={styles.textos}>{MESSAGES.tituloRegistrar}</Text>
              </View>

              <View style={styles.containerFormulario}>                  
                <View style={styles.inputWrap2}>
                  <View style={styles.iconWrap2}>                
                    <Icon name="account-check" size={30} color={COLOR.COLORICONLOGIN} />
                  </View>
                  <TextInput 
                    ref="1"
                    maxLength={20}
                    returKeyType="{next}"  
                    onSubmitEditing = {()=> this.refs[2].focus()}                  
                    onChangeText={(username) => this.setState({username})}
                    placeholder={MESSAGES.name} 
                    placeholderTextColor={COLOR.placeholderTextColorLogin}
                    style={styles.input} 
                    
                  />
                </View> 

                <View style={styles.inputWrap2}>
                  <View style={styles.iconWrap2}>                
                    <Icon name="account-check" size={30} color={COLOR.COLORICONLOGIN} />
                  </View>
                  <TextInput 
                    ref="2"
                    returKeyType="{next}"   
                    maxLength={35} 
                    onSubmitEditing = {()=> this.refs[3].focus()}                
                    onChangeText={(lastName) => this.setState({lastName})}
                    placeholder={MESSAGES.apellido} 
                    placeholderTextColor={COLOR.placeholderTextColorLogin}
                    style={styles.input} 
                    
                  />
                </View>                               
                  <View style={styles.inputWrap2}>
                    <View style={styles.iconWrap2}>                
                      <Icon name="email" size={30} color={COLOR.COLORICONLOGIN} />
                    </View>
                    <TextInput 
                      ref="3"
                      maxLength={30}
                      returKeyType="{next}"
                      onSubmitEditing = {()=> this.refs[4].focus()}
                      onChangeText={(email) => this.setState({email})}
                      placeholder={MESSAGES.correo}
                      placeholderTextColor={COLOR.placeholderTextColorLogin}
                      style={styles.input} 
                    />          
                  </View>        
                <View style={styles.inputWrap2}>
                  <View style={styles.iconWrap2}>                
                    <Icon name="map-marker-radius" size={30} color={COLOR.COLORICONLOGIN} />
                  </View>
                  <TextInput 
                    ref="4"
                    returKeyType="{next}"
                    maxLength={100}
                    onSubmitEditing = {()=> this.refs[5].focus()}
                    onChangeText={(direccion) => this.setState({direccion})}
                    placeholder={MESSAGES.direccion} 
                    placeholderTextColor={COLOR.placeholderTextColorLogin}
                    style={styles.input} 
                    
                  />
                </View>
                <View style={styles.inputWrap2}>
                  <View style={styles.iconWrap2}>                
                    <Icon name="phone-hangup" size={30} color={COLOR.COLORICONLOGIN} />
                  </View>
                  <TextInput 
                    ref="5"
                    returKeyType="{next}"
                    keyboardType='numeric'
                    maxLength={10}
                    onSubmitEditing = {()=> this.refs[6].focus()}                    
                    onChangeText={(telefono) => this.setState({telefono})}
                    placeholder={MESSAGES.telefono} 
                    placeholderTextColor={COLOR.placeholderTextColorLogin}
                    style={styles.input} 
                    
                  />
                </View>
                <View style={styles.inputWrap2}>
                  <View style={styles.iconWrap2}>                
                    <Icon name="lock-outline" size={30} color={COLOR.COLORICONLOGIN} />
                  </View>
                  <TextInput 
                    ref="6"
                    returKeyType="{next}"
                    onSubmitEditing = {()=> this.refs[7].focus()}                    
                    onChangeText={(password) => this.setState({password})}
                    placeholder={MESSAGES.contrasena} 
                    placeholderTextColor={COLOR.placeholderTextColorLogin}
                    style={styles.input} 
                    secureTextEntry
                  />
                </View>                
                <View style={styles.inputWrap2}>
                  <View style={styles.iconWrap2}>                
                    <Icon name="lock-outline" size={30} color={COLOR.COLORICONLOGIN} />
                  </View>
                  <TextInput 
                    ref="7"
                    returKeyType="{next}"
                    onSubmitEditing = {this.saveForm}
                    onChangeText={(password2) => this.setState({password2})}
                    placeholder={MESSAGES.contraseña2} 
                    placeholderTextColor={COLOR.placeholderTextColorLogin}
                    style={styles.input} 
                    secureTextEntry
                  />
                </View>                                
                <TouchableOpacity activeOpacity={.5} onPress={this.openImagePicker} disabled={this.state.button}>  
                  <View style={styles.button}>           
                    <Icon name="camera" size={30} color={COLOR.COLORICONLOGIN} />                                 
                    <Text style={styles.buttonText}>{MESSAGES.botonFotografia}</Text>                                        
                  </View>          
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={.5} onPress={this.saveForm} disabled={this.state.button}>  
                  <View style={styles.button}>           
                    <Icon name="account-plus" size={30} color={COLOR.COLORICONLOGIN} />                                 
                    <Text style={styles.buttonText}>{MESSAGES.registrarme}</Text>                                        
                  </View>          
                </TouchableOpacity>
                <View style={styles.button3}> 
                    <Spinner text= {this.state.mensaje} visible= {this.state.mustraIndicator}/>
                </View>
              </View>            
            </ScrollView>           
          </Image>          
        </View>     
    	)    
  }
}