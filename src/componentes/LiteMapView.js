import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  Button
} from 'react-native';

import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE='37'; 
const LONGITUDE='64'; 
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;



class LiteMapView extends React.Component {

  state = {
    
    latitude: 52.3015493,
    longitude: 4.6939769,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,  
    markers: [],
    amount: 99

  };
 
  componentWillMount() {
    
  }

  async _buttonClick(){
/*    this.setState({        
            latitude: 0,
            longitude: 0          
        });*/
        var position='';
    navigator.geolocation.getCurrentPosition(
      (position) => {
          position = position;
      },
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    return position;
  }


  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: this.state.latitude,
            longitude:this.state.longitude,
            latitudeDelta: 3,
            longitudeDelta: 4,
          }}
          showsUserLocation = {true}
          
          showsMyLocationButton

        />


      <Button
      onPress={this._buttonClick.bind(this)}
      title="Consultar"
      color="black"  
      />    

      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
 bubble: {
   backgroundColor: 'rgba(255,255,255,0.7)',
   paddingHorizontal: 18,
   paddingVertical: 12,
   borderRadius: 20,
 },
 latlng: {
   width: 200,
   alignItems: 'stretch',
 },
 button: {
   width: 80,
   paddingHorizontal: 12,
   alignItems: 'center',
   marginHorizontal: 10,
 },
 buttonContainer: {
   flexDirection: 'row',
   marginVertical: 20,
   backgroundColor: 'transparent',
 },
});

module.exports = LiteMapView;