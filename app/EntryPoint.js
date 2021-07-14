import React,{Component} from 'react';
import {ActivityIndicator} from 'react-native';
import {Provider} from 'react-redux';
import  configureStore from './store/configureStore'
import { PersistGate } from 'redux-persist/integration/react';
import NavigationService from "./navigation/NavigationService";

const {persistor,store} = configureStore()

import AppMain from './navigation/mainStackNavigator';

export default class Entrypoint extends Component{
    render(){
        return(
            <Provider store={store}>
              <PersistGate
              loading={<ActivityIndicator/>}
              persistor={persistor}
              > 
              <AppMain ref={navigatorRef => {
                  NavigationService.setTopLevelNavigator(navigatorRef);
              }}/>
              </PersistGate>
            </Provider>
        )
    }
}