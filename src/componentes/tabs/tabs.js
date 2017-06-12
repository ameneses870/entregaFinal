import React, {Component} from 'react';
import {TabNavigator } from 'react-navigation';


import TabUno from './../tabs/TabUno';
import TabDos from './../tabs/TabDos';
import TabTres from './../tabs/TabTres';

export const tabs = TabNavigator({
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
);