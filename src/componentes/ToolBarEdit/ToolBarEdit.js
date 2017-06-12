import React, {Component,Dimensions} from 'react'
import {
  View, 
  Text, 
  Drawer,
  ListView, 
  DrawerLayoutAndroid,
  ToolbarAndroid,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Image
} from 'react-native'
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SpeechAndroid from 'react-native-android-voice';

import {MESSAGES } from '../../config/messages';
import {COLOR} from '../../config/color';

export default class ListViewDemo extends Component {

  static navigationOptions = {    
    header:false
  };

  state ={
    'search':''
  }

  constructor(props) {
    super(props);  

  }

  async _buttonClick(){
    var spokenText;    

    try{
        //More Locales will be available upon release. 
        spokenText = await SpeechAndroid.startSpeech("Hable ahora", SpeechAndroid.SPANISH);                        
        ToastAndroid.show(spokenText, ToastAndroid.LONG);
          this.setState({'search':spokenText})
    }catch(error){
      switch(error){
          case SpeechAndroid.E_VOICE_CANCELLED:
              ToastAndroid.show("Reconocimiento de voz cancelado" , ToastAndroid.LONG);
              break;
          case SpeechAndroid.E_NO_MATCH:
              ToastAndroid.show("No se escucho bien el mensaje" , ToastAndroid.LONG);
              break;
          case SpeechAndroid.E_SERVER_ERROR:
              ToastAndroid.show("Error al conectarse a google" , ToastAndroid.LONG);
              break;
          /*And more errors that will be documented on Docs upon release*/
      }
    }
    
    //this.setState({'search':spokenText})
        //alert(this.state.search+'2');
      //  ToastAndroid.show(spokenText , ToastAndroid.LONG);
  }

	render(){

	return(    
		<View style={styles.container}>		
     	<View style={styles.inputWrap2}>       
        <View style={styles.iconWrap2}>                
          {this.props.children}
        </View>
        <TextInput 
          ref="1"
          returKeyType="{next}"        
          onChangeText={(search) => this.setState({search})}
          placeholder={MESSAGES.NAMEAPP} 
          placeholderTextColor={COLOR.COLORICON}
          style={styles.input} 
          value={this.state.search}
        /> 
        <View style={styles.iconWrap2}> 
          <TouchableOpacity activeOpacity={.5} onPress={this._buttonClick}>
            <Icon name="microphone-outline" size={30} color={COLOR.COLORICON} />                      
          </TouchableOpacity>
        </View>
      </View>           
		</View>
    
	)
}

}