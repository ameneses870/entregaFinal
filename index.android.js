/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//import React, { Component } from 'react';
//import {
  //AppRegistry,

//} from 'react-native';

//import Login from './src/componentes/login/Login';
//import Login from './src/SesionDos.js';
//port Login from './src/WebViewDemo.js';
//import Login from './src/FlatListDemo.js';
//import PanResponderDemo from './src/PanResponderDemo';
/*export default class ejercicio1 extends Component {
  render() {
    return (
      <View style={{flex: 1}}>      
        <PanResponderDemo/>      
      </View>
    );
  }
}*/
//AppRegistry.registerComponent('ejercicio1', () => PanResponderDemo);


import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

//import practicalogin from './src/app'
//import PanResponderDemo from './src/PanResponderDemo'
//import PanResponderDemo from './src/ListViewDemo'
import {App} from './src/app.js'
import GeolocationExample from './src/TabsInDrawer'
//import WebViemSDemo from './src/WebViemSDemo'

AppRegistry.registerComponent('ejercicio1', () => App);