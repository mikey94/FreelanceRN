import React,{Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import {Image} from 'react-native';

import ScanScreen from '../screens/maintabscreens/scan';
import InfoScreen from '../screens/maintabscreens/info';
import ProfileScreen from '../screens/maintabscreens/profile';

const tabNavigator = createMaterialTopTabNavigator({
   Scan:{
       screen:ScanScreen,
       navigationOptions:({navigation})=>{
           return{
               tabBarLabel:'Home',
               tabBarOnPress : ()=> {   
                navigation.dangerouslyGetParent().setParams({ tabTitle: 'Home' })
                navigation.navigate({ routeName: navigation.state.routeName });
                },
               tabBarIcon:({tintColor,focused}) => (
                   <Image style={{width:30,height:30}} source={require('../assets/images/icons/qrcode.png')}/>
               ),
           }
       }
   },
   Info:{
    screen:InfoScreen,
    navigationOptions:({navigation})=>{
        return{
            tabBarLabel:'Info',
            tabBarOnPress : ()=> {   
                navigation.dangerouslyGetParent().setParams({ tabTitle: 'Info' })
                navigation.navigate({ routeName: navigation.state.routeName });
            },
            tabBarIcon:({tintColor,focused}) => (
                <Image style={{width:30,height:30}} source={require('../assets/images/icons/payment.png')}/>
            )
        }
    }
   },
   Profile:{
    screen:ProfileScreen,
    navigationOptions:({navigation})=>{
        return{
            tabBarLabel:'Profile',
            tabBarOnPress : ()=> {   
                navigation.dangerouslyGetParent().setParams({ tabTitle: 'Profile' })
                navigation.navigate({ routeName: navigation.state.routeName });
            },
            tabBarIcon:({tintColor,focused}) => (
                <Image style={{width:30,height:30}} source={require('../assets/images/icons/user.png')}/>
            )
        }
    }
   }
    

},{swipeEnabled:false,tabBarOptions:{showLabel:false,showIcon:true,tabStyle:{backgroundColor:'#EB2F3A'},style:{backgroundColor:'#EB2F3A',borderBottomWidth:0,elevation:2},indicatorStyle:{backgroundColor:'#EB2F3A',borderBottomWidth:0}}});

const mainTab = createAppContainer(tabNavigator);

export default mainTab;