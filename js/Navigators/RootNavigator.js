import React from 'react';
import {
    View
} from 'react-native';
import { SwitchNavigator,addNavigationHelpers} from 'react-navigation';
import {Authorization,Login} from 'js/Screens'
import Main  from './MainNavigator';
import {connect} from 'react-redux';

export const RootNavigator = SwitchNavigator({
    auth:{screen:Authorization,path:"auth"},
    login: { screen: Login,path:"login"},
    main: { screen: Main,path:"main" }
});

export default class Root extends React.Component {

    render(){
        return (

            <RootNavigator/>
            
        )
    }
}


