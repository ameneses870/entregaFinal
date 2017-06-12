import React,{Component} from 'react'
import {
  View, 
  Text, 
  Button,
  ListView, 
  DrawerLayoutAndroid,
  ToolbarAndroid,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import ToolBarEdit from './HomePage/HomePage'

export const toolbar = (ejecution)=>{

  return(

        <ToolBarEdit/>                  
        
    )
}/*
import {TabNavigator } from 'react-navigation';

import TabUno from './tabs/TabUno';
import TabDos from './tabs/TabDos';
import TabTres from './tabs/TabTres';

export const toolbar = ()=>{
  return(
TabNavigator({
  PaginaUno: {
    screen: TabUno,
  },
  PaginaDos: {
    screen: TabDos,
  },
  PaginaTres: {
    screen: TabTres,
  },

}, {
  tabBarOptions: {
    activeTintColor: 'white',
    showIcon: true,
    style: {
      backgroundColor: 'purple',
    },
  },
}
)
)
}*/