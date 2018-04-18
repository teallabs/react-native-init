import {FirstTab,SecondTab} from "js/Screens";
import { TabNavigator,TabBarBottom} from 'react-navigation';
import React from 'react';
import {
    View
} from 'react-native';

export const MainNavigator = TabNavigator(
    {
        firstTab:{
            screen: FirstTab,
            path:'firstTab',
            navigationOptions:{
                tabBarLabel:'Tab 1'
            }
        },

        secondTab:{
            screen: SecondTab,
            path:'secondTab',
            navigationOptions:{
                tabBarLabel:'Tab 2'
            }
        },
        
    },
    {
        tabBarOptions: {
            style: {
                height:56,
                backgroundColor: '#fff',
                borderTopWidth:1,
                alignItems:'center',
                justifyContent:'center'
            },
            labelStyle:{
                fontSize: 11,
                fontWeight: '500'
            },
            upperCaseLabel:false
        },
        tabBarComponent:TabBarBottom,
        tabBarPosition:'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        backBehavior:"none"
    }
);


export default class Main extends React.Component {

    render(){
        return (
            <View style={{width:'100%',flex:1,backgroundColor:'#fff'}}>
                <MainNavigator screenProps={{rootNavigation:this.props.navigation}}/>
            </View>
        )
    }
}