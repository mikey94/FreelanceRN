import React , {Component} from 'react';
import {View,Text} from 'react-native';
import {width,height} from 'react-native-dimension';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import NavigationService from './NavigationService';
import SignInScreen from '../screens/signin';
import MainTabNav from '../navigation/mainTabNavigator';
import ScannedQr from '../screens/scannedQr';
import CouponValidate from '../screens/coupon';
import RedeemScreen from '../screens/redeem';
import DealInfoScreen from '../screens/dealInfo';
import PaymentInfoScreen from '../screens/paymentInfo';


const navigator = createStackNavigator({
 SignIn :{
     screen : SignInScreen,
     navigationOptions:{
         header:null
     }
 },
 MainTab:{
     screen: MainTabNav,
     navigationOptions:({navigation})=>({
        header:(
            <View style={{backgroundColor:'#ffffff',height:Platform.OS==='ios'? 80 : 50,paddingTop:Platform.OS==='ios'? 30:0}}>
                <View style={{flexDirection:'row',justifyContent: 'space-between', alignSelf:"center"}}>
                    <Text style={{fontSize:18,fontWeight:'700',color:'#000',textAlign:"center", marginTop: 15}}>{navigation.getParam('tabTitle', 'Home')}</Text>
                </View>
            </View>
        ) 
    })   
 },
 ScannedQr:{
     screen: ScannedQr
 },
 CouponCode:{
     screen: CouponValidate
 },
 Redeem:{
     screen: RedeemScreen
 },
 DealInfo:{
     screen: DealInfoScreen 
 },
 PaymentInfo:{
     screen: PaymentInfoScreen
 }
 
},{
    //headerMode:'none',
    // defaultNavigationOptions:{

    // },
})

const App = createAppContainer(navigator);

export default App;