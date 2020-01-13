import React, { Component, Fragment } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
 // Navigator
  
} from 'react-native'
import Constants from 'expo-constants'
//import Icon from 'react-native-vector-icons/Ionicons';
//import { createAppContainer, withNavigation} from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
//import AppSettingsPage from './src/screens/AppSettingsPage';
//import UserSettingsPage from './src/screens/UserSettingsPage';
//import OrganizationSettingsPage from './src/screens/OrganizationSettingsPage'



function Separator() {
  return <View style={styles.separator} />;
}


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { titleText:"Settings"}

  
  }


 
  
  onPress = () => {
    this.setState({
      
    })
  }

  






 render() {
   return (
    <Fragment>
      {/*} 
    <AppContainer/>
   {*/}
    <View
    
    style={styles.container}
    >
      
     <View style={styles.header}>
      
      </View>
       
      <Text 
        style={styles.titleText}
        >
      Settings 
    </Text>
       <View
       style={{backgroundColor: 'black'}}>
         
       <TouchableOpacity
         style={styles.button}
         //onPress={()=> this.props.navigation.navigate('OrganizationSettingsPage')}
        >
        <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
        style={{width: 35, height: 35,marginLeft:-250, marginTop:10, borderRadius: 35}}/>
         <Text style={{color:'cyan', marginTop:-20}}> Organization Settings</Text>
         
       </TouchableOpacity>  
       </View>
       
       
       <Separator/>

       
       <View
       style ={{backgroundColor: 'black'}}>
       
       <TouchableOpacity
       style={styles.button}
      // onPress={()=> this.props.navigation.navigate('UserSettingsPage')}
       >
         <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
        style={{width: 35, height: 35,marginLeft:-250, marginTop:10, borderRadius: 35}}/>
        <Text style={{color: 'cyan', marginTop:-20}}>User Settings</Text>

       </TouchableOpacity>
        
        </View>

        <Separator/>
        <View
        style= {{backgroundColor: 'black'}}>
        <TouchableOpacity
        style={styles.button}
       // onPress={()=> this.props.navigation.navigate('OrganizationSettingsPage')}
        >
          <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
        style={{width: 35, height: 35,marginLeft:-250, marginTop:10, borderRadius: 35}}/>

        <Text style={{color: 'cyan', marginTop:-20}}> App Settings</Text>
        </TouchableOpacity>


        </View>
        
        </View>
    

   
   </Fragment>
   );
 }

  
}


{/*}
const RootStack = createStackNavigator (
  
  { 
  
  OrganizationSettings: OrganizationSettingsPage,
  UserSettings: UserSettingsPage,
  AppSettings: AppSettingsPage
},
{
  initialRoute: 'App',
  defaultNavigationOptions: {
      headerStyle: {
      backgroundColor: '#fff'
  },
  headerTintColor: '#2E36FF'
}
}
)

const AppContainer = createAppContainer(RootStack)


{*/}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    paddingHorizontal: 10  },
  button: {
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 25,
    height: 60,
    fontSize: 100
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'black'
  },
  countText: {
    color: 'black'
  },
  fixtoText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator:{
    marginVertical: 10,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: 'black'
  },
  titleText:{
    
    fontSize: 40,
    fontWeight: 'bold',
    color: 'cyan',
    justifyContent: 'center',
    position: 'absolute',
    top: 50,
    left: 110,
    alignItems: 'center',
    textAlign: 'center'    
    },
  header:{
  
    backgroundColor: 'black',
    height: 0
    },


})








