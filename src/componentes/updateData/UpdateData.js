import React,{Component} from 'react'
import {
  View, 
  Text, 
  Button,
  ListView,
  ScrollView,
  Image,
  Dimensions,
  Modal,
  TouchableHighlight,
  TextInput
} from 'react-native'

const { width, height } = Dimensions.get("window");
import ImageViewer from 'react-native-image-zoom-viewer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles'; 
export default class UpdateData extends Component {

  state={
    modalVisible: false
  }
  showModal(){
    this.setState({modalVisible:true});
  }

  editImage(){
    alert('leguigui');
  }

  render(){    
    return(
      <View >
        <ScrollView>

          <View>  
            <Image
            resizeMode={'cover'}
            style={{width: width, height: height/3,justifyContent:'center',alignItems:'center'}}
            source={{uri:'https://previews.123rf.com/images/tomo00/tomo001411/tomo00141100150/33823081-Fondos-de-escritorio-de-material-de-fondo-la-radiaci-n-de-polvo-de-estrellas-y-colores-del-arco-iris-Foto-de-archivo.jpg'}}
            >
              <View style={{}}>
                <TouchableHighlight activeOpacity={.5} onPress={()=>this.showModal()}>              
                  <Image
                  resizeMode={'cover'}
                  style={{width: 150, height:150,borderRadius: 100}}
                  source={{uri:'https://yt3.ggpht.com/-YL7Ytul0gVU/AAAAAAAAAAI/AAAAAAAAAAA/IZGgDUKL5ro/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'}}
                  />
                </TouchableHighlight>

                <View style={{alignItems:'flex-end'}}>
                  <TouchableHighlight activeOpacity={.5} onPress={()=>this.editImage()} style={{alignItems:'center',justifyContent:'center'}}> 
                  <Icon name="camera" size={30} color="red" />
                  </TouchableHighlight>
                </View>
              </View>

            </Image>
          </View>


            <View style={{padding:10,flex:1}}>
                
                <View style={styles.inputWrap2}>

                  <View style={styles.iconWrap2}>                
                    <Icon name="account-outline" size={30} color="#fff" />
                  </View>
                  <TextInput 
                    ref="1"
                    returKeyType="{next}"
                    onSubmitEditing = {()=> this.refs[2].focus()}
                    onChangeText={(username) => this.setState({username})}
                    placeholder="Email addres" 
                    placeholderTextColor="#FFFFFF"
                    style={styles.input} 
                  />          
                </View>        

              <View style={styles.inputWrap2}>

                <View style={styles.iconWrap2}>                
                  <Icon name="lock-outline" size={30} color="#fff" />
                </View>
                <TextInput 
                  ref="2"
                  returKeyType="{next}"
                  onSubmitEditing = {this.doLogin}
                  onChangeText={(password) => this.setState({password})}
                  placeholder="Password" 
                  placeholderTextColor="#FFFFFF"
                  style={styles.input} 
                  secureTextEntry
                />
              </View>

              <View style={styles.inputWrap2}>
              
                <View style={styles.iconWrap2}>                
                  <Icon name="lock-outline" size={30} color="#fff" />
                </View>
                <TextInput 
                  ref="2"
                  returKeyType="{next}"
                  onSubmitEditing = {this.doLogin}
                  onChangeText={(password) => this.setState({password})}
                  placeholder="Password" 
                  placeholderTextColor="#FFFFFF"
                  style={styles.input} 
                  secureTextEntry
                />
              </View>                

              <View style={styles.inputWrap2}>
              
                <View style={styles.iconWrap2}>                
                  <Icon name="lock-outline" size={30} color="#fff" />
                </View>
                <TextInput 
                  ref="2"
                  returKeyType="{next}"
                  onSubmitEditing = {this.doLogin}
                  onChangeText={(password) => this.setState({password})}
                  placeholder="Password" 
                  placeholderTextColor="#FFFFFF"
                  style={styles.input} 
                  secureTextEntry
                />
              </View>

              <View style={styles.inputWrap2}>
              
                <View style={styles.iconWrap2}>                
                  <Icon name="lock-outline" size={30} color="#fff" />
                </View>
                <TextInput 
                  ref="2"
                  returKeyType="{next}"
                  onSubmitEditing = {this.doLogin}
                  onChangeText={(password) => this.setState({password})}
                  placeholder="Password" 
                  placeholderTextColor="#FFFFFF"
                  style={styles.input} 
                  secureTextEntry
                />
              </View> 

              <View style={styles.inputWrap2}>
              
                <View style={styles.iconWrap2}>                
                  <Icon name="lock-outline" size={30} color="#fff" />
                </View>
                <TextInput 
                  ref="2"
                  returKeyType="{next}"
                  onSubmitEditing = {this.doLogin}
                  onChangeText={(password) => this.setState({password})}
                  placeholder="Password" 
                  placeholderTextColor="#FFFFFF"
                  style={styles.input} 
                  secureTextEntry
                />
              </View>                                               
            </View>
          <View>
            
          </View>                    
        </ScrollView>

      <View style={{alignItems:'center'}}>
          <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={()=> this.setState({modalVisible:false})}
          >
           <ImageViewer imageUrls={[{url: 'https://yt3.ggpht.com/-YL7Ytul0gVU/AAAAAAAAAAI/AAAAAAAAAAA/IZGgDUKL5ro/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'}]}/>
          </Modal>
      </View>

      </View>


    )
  }

}