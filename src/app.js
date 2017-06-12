import React, {Component,} from 'react';
import { StackNavigator} from 'react-navigation';


import Login from './componentes/login/Login.js';
import Registrarse from './componentes/login/Registrarse/Registrarse.js';
import HomePage from './componentes/HomePage/HomePage'; 
import updateData from './componentes/updateData/UpdateData';
import solicitarProducto from './componentes/solicitarProducto/solicitarProducto';
import historialCompra from './componentes/historialCompra/historialCompra';
import listaDeseos from './componentes/listaDeseos/listaDeseos';
import estadoMisPedidos from './componentes/estadoMisPedidos/estadoMisPedidos';
import configuraciones from './componentes/configuraciones/configuraciones';
import ayuda from './componentes/ayuda/ayuda';
import valorarApp from './componentes/valorarApp/valorarApp';
import acercaDe from './componentes/acercaDe/acercaDe';

import Carrito from './componentes/Carrito/listCarrito';
/*conexion con firebase*/
import { validarLogin} from './Firebase/services'

/* inicializacion del firebase*/
import FIRE from './Firebase/firebase_apiKey'

/*datos parametrizables*/
import {MESSAGES} from './config/messages';

/*Inicializacion del firebase*/
FIRE.init();



export const App = StackNavigator (
	
	{		

  		HomePage: { screen: HomePage},  		
		Login: { screen: Login},						
		updateData: {screen :updateData,navigationOptions:{title:MESSAGES.Actualizar}},
		solicitarProducto: {screen :solicitarProducto,navigationOptions:{title:MESSAGES.NuevoProducto}},
		history: {screen :historialCompra,navigationOptions:{title:MESSAGES.Historial}},
		wish: {screen :listaDeseos,navigationOptions:{title:MESSAGES.Deseos}},
		state: {screen :estadoMisPedidos,navigationOptions:{title:MESSAGES.Estdo}},
		settings: {screen :configuraciones,navigationOptions:{title:MESSAGES.Configuracion}},
		ayuda: {screen :ayuda,navigationOptions:{title:MESSAGES.Ayuda}},
		valorarApp: {screen :valorarApp,navigationOptions:{title:MESSAGES.Valora}},
		acercaDe: {screen :acercaDe,navigationOptions:{title:MESSAGES.acercaDe}},
		registrarse:{screen:Registrarse}
		
	},

	{
		initialRouteName: 'Login'
	}

);