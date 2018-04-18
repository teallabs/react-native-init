
import React, { Component,PropTypes } from 'react';
import { 
    View,
    ActivityIndicator,
    Text,
    AsyncStorage,
    TouchableOpacity
} from 'react-native';
import styles from './SecondTabStyle';
import {GoogleSignin} from 'react-native-google-signin';
import {connect } from 'react-redux';

export default class SecondTab extends Component {


    onClickLogout = () => {
        const {navigate} = this.props.navigation;
        GoogleSignin.signOut()
        .then(() => {
            this.props.screenProps.rootNavigation.navigate("login");
        })
        .catch((err) => {

        });  
    };

    saveUserInStore = (user) => {
        AsyncStorage.setItem('user',JSON.stringify(user))
    }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => this.onClickLogout()} style={[styles.buttonStyle]}>
                    <View>
                        <Text style={styles.buttonText}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View> 
        )      
    }
}



