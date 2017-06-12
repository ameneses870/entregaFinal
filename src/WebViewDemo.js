import React, { Component } from 'react';
import {  
  View,
  Text,
  Button,
  Picker,
  DatePickerAndroid,
  Slider,
  WebView
} from 'react-native';

export default class WebViewDemo extends Component{


render(){
return(
<WebView
source={{uri: 'https://github.com/facebook/react-native'}}
style={{marginTop: 0}}
/>
)

}
}