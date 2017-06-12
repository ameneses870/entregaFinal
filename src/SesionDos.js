import React, { Component } from 'react';
import {  
  View,
  Text,
  Button,
  Picker,
  DatePickerAndroid,
  Slider,
  Switch,
  Modal,
  ProgressBarAndroid 
} from 'react-native';

import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default class SesionDos extends Component{

	state={
		picker:'',
		framework:'',
		frameworks:[],
		slider: 0,
		falseSwitchIsOn : false,
		modalVisible : false,
		fill: 50
	}

	
	items=[
		{	name:'PHP',
			framework:[	'Laravel',
						'Yii'
					  ],
			key:'php'
		},
		{name:'JAVA',framework:['Sprint', 'Hibernate'],key:'java'}
	];

	showDatePicker= async ()=>{		
		try {
		  const {action, year, month, day} = await DatePickerAndroid.open({
		    // Use `new Date()` for current date.
		    // May 25 2020. Month 0 is January.
		    date: new Date(),
		    minDate: new Date(),		    
		    mode: 'spinner'
		  });

		  if (action !== DatePickerAndroid.dateSetAction) {
		    alert('Cancelado...');
		  }

		  if (action !== DatePickerAndroid.dismissedAction) {
		    alert(year+'/'+month+'/'+day);
		  }

		} catch ({code, message}) {
		  console.warn('Cannot open date picker', message);
		}

	}

	showModal=()=>{
		if (this.state.modalVisible){
		this.setState({modalVisible : false});	
		}else{
			this.setState({modalVisible : true});	
		}
		
	}


	selectedFrameworks = (key)=>{
		
		this.setState({picker:key});

		this.setState({frameworks:[]});

		for (let i = 0; i < this.items.length; i++) {
			
			let actual = this.items[i];
			
			if(actual.key == key){
				
				this.setState({frameworks:actual.framework})
			}
		}
	}

	render(){
		return(
			<View style={{flex:1}}>
				<Text>Pantalla Dos</Text>
				<Button
				  onPress={this.showDatePicker}
				  title="ver datepicker"
				  color="#841584"				  
				/>


				
				<Picker
				  selectedValue={this.state.picker}
				  onValueChange={(mivariable) => this.selectedFrameworks(mivariable)}>
				  <Picker.Item label={'Seleccione'} value={''} />
				  {this.items && this.items.map((value,index)=>{
				  	//Validamos si existen Items y los recorremos con map
				  		return (<Picker.Item key={index} label={value.name} value={value.key} />)
				  })}				  
				  
				</Picker>
				{this.state.frameworks && this.state.frameworks.length > 0 ?
					<Picker
					  selectedValue={this.state.framework}
					  onValueChange={(seleccion) => this.setState({framework:seleccion})}>
					  
					  {this.state.frameworks && this.state.frameworks.map((value,index)=>{

					  		return (<Picker.Item key={index} label={value} value={value} />)
					  })}				  
					  
					</Picker>    
					: 
					null
				}
			<Text>{this.state.slider}</Text>

			<Switch
	         onValueChange={this.showModal}
	         style={{marginBottom: 100}}
	         thumbTintColor="#0000ff"
	         tintColor={'red'}
	         value={this.state.falseSwitchIsOn} />

	        <Modal
	          animationType={"slide"}
	          transparent={false}
	          visible={this.state.modalVisible}
	          onRequestClose={() => {alert("Modal has been closed.")}}
          	>

          		<Text> Helo mi socio</Text>
					<Slider 
						maximumValue={100} 
						step={10} 
						value={50} 
						onValueChange ={(spinner)=>this.setState({slider: spinner})} 
					/>


				<AnimatedCircularProgress
				  size={200}
				  width={3}
				  fill={this.state.slider}
				  tintColor="#00e0ff"
				  backgroundColor="#3d5875">
				  {
				    (fill) => (
				      <Text >
				        {this.state.slider}
				      </Text>
				    )
				  }
				</AnimatedCircularProgress>

				<Switch
		         onValueChange={this.showModal}
		         style={{marginBottom: 100}}
		         thumbTintColor="#0000ff"
		         tintColor={'red'}
		         value={this.state.falseSwitchIsOn} />		         
          	</Modal>     

          	<ProgressBarAndroid indeterminate={true} styleAttr="Horizontal"/>
			</View>
		)
	}
}