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
  ScrollView,
  AsyncStorage,
  Dimensions
  
} from 'react-native'
import {TabNavigator } from 'react-navigation';

/*tamaño de la pantalla*/
const { width, height } = Dimensions.get("window");

/*librerias externas*/
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialTabs from 'react-native-material-tabs'

/*imagenes utilizadas*/
const mark = require('./assets/fondoLogin.png');
const mark2 = require('./assets/perfilUser.png');

/*componentes propios*/
import ToolBarEdit from './../ToolBarEdit/ToolBarEdit'
import MenuComponent from './MenuItems/MenuComponent'
import MenuComponent2 from './MenuItems/MenuComponent2'
import ListProductos from '../Productos/listProductos'
import ItemBox from '../Productos/Categorias/ItemBoxCategorias'
import ListCarrito from '../Carrito/listCarrito'

/*hoja de estilos*/
import {styles} from './styles'

/*datos parametrizables*/
import {DB} from './MenuItems/MenuItems'
import {DB2} from './MenuItems/MenuItems2'
import {Categorias} from '../Productos/Categorias/categorias'
import {MESSAGES } from '../../config/messages';
import {COLOR} from '../../config/color';



const aap='';
export default class HomePage extends Component {

  static navigationOptions = {    
    header:false    
  };

  
  componentDidMount(){

  }

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const ds2 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const cate = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(DB),
      dataSource2: ds2.cloneWithRows(DB2),
      categoria: cate.cloneWithRows(Categorias),
      selectedTab:0,          
      categoriaC:'',
      data:[]
    }; 

        /*try {
          data= await AsyncStorage.getItem('carrito2');     
             ;
        } catch (error) {
          alert(error);
        } */          
  }

  setTab(tab,categoria) {    
    this.setState({selectedTab: tab});    
    this.setState({categoriaC: categoria});
    //this.changeTab(tab,categoria);   
  }  

  changeTab(tab,categoria) {    
        switch (tab) {
      case 0:
        return (
          <ListView
            dataSource={this.state.categoria}
            renderRow=
            {(item) =>
              <TouchableOpacity activeOpacity={.5} onPress={()=>this.setTab(1,item.code)}> 
                <ItemBox codigo={item.code} titulo={item.title}  image={item.icon}/>
              </TouchableOpacity>
            }
          />
        ) 
        
      case 1:       
        return (<ListProductos categoria={categoria}/>)
      case 2:
        return (<ListCarrito  data={data}/>)        
    } 
  }


  showButton(){
    if (this.state.selectedTab!=2){

      return(
        <View style={styles.ButtonVerCarrito}>
          <TouchableOpacity activeOpacity={.5} onPress={this.openDrawer.bind(this)} style={styles.TouchableButtonCarrito}>          
            <Icon name="cart" size={50} color={COLOR.COLORICONCAR} />
            <Text>{MESSAGES.VERCARRITO}</Text>
          </TouchableOpacity>   
        </View>    
      );            
    }
  }

  openDrawer() {
    this.refs['DRAWER'].openDrawer();
  }


  render(){
     




    const navigationView = (
      <View style={styles.container}>
        <Image source={mark} style={styles.container}>
          <View style={styles.profile}>
            <Image source={mark2} style={styles.imageFontPerfil}>
            </Image>
          </View>
          <ScrollView>  
            <View style={styles.background}>
              <ListView
              dataSource={this.state.dataSource}
              renderRow=
                {(item) => 
                  <TouchableOpacity activeOpacity={.5} onPress={()=>this.props.navigation.navigate(item.action)}>
                    <MenuComponent titulo={item.title} iconName={item.icon} colorIcon={item.colorIcon} colorFont={item.colorFont}/>
                  </TouchableOpacity>
                }
              />  
            </View>

            <View style={styles.background2}>
              <ListView
              dataSource={this.state.dataSource2}
              renderRow=
                {(item) => 
                  <TouchableOpacity activeOpacity={.5} onPress={()=>this.props.navigation.navigate(item.action)}>
                    <MenuComponent2 titulo={item.title} iconName={item.icon} colorIcon={item.colorIcon} colorFont={item.colorFont}/>
                  </TouchableOpacity>
                }
              />
            </View>
          </ScrollView>
        </Image>
      </View>
    );


    return (
      
      <View style={styles.container}>  
        <DrawerLayoutAndroid
          drawerWidth={width-(width/5)}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}
          ref={'DRAWER'}>       

          <ToolBarEdit navigation={this.refs['DRAWER']}>
            <TouchableOpacity activeOpacity={.5} onPress={this.openDrawer.bind(this)}>
              <Icon name="apps" size={30} color={COLOR.COLORICON} />                      
            </TouchableOpacity>
          </ToolBarEdit>  
                  
          <MaterialTabs 
            items={[MESSAGES.TAB1,MESSAGES.TAB2,MESSAGES.TAB3]}          
            selectedIndex={this.state.selectedTab}
            onChange={this.setTab.bind(this)}
            barColor={COLOR.COLORTOOLBAR}
            indicatorColor={COLOR.INDICADORCOLOR}
            activeTextColor={COLOR.ACTIVETEXTCOLOR}
          />        

          {this.changeTab(this.state.selectedTab,this.state.categoriaC)}       
          {this.showButton()}
        </DrawerLayoutAndroid>          
      </View>
    )    
  }
}