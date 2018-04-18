
import React, { Component,PropTypes } from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import styles from './LoginStyle';
import {GoogleSignin} from 'react-native-google-signin';
import {connect } from 'react-redux';

export default class Login extends Component {

    onClickLogin = () => {
        const {navigate} = this.props.navigation;
        GoogleSignin.signIn()
        .then((user) => {
           navigate("main");
           this.saveUserInStore(user);
        })
        .catch((err) => {
            
        })
        .done();
    }

    saveUserInStore = (user) => {
        AsyncStorage.setItem('user',JSON.stringify(user))
    }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => this.onClickLogin()} style={[styles.buttonStyle]}>
                    <View>
                        <Text style={styles.buttonText}>Sign in with Google</Text>
                    </View>
                </TouchableOpacity> 
            </View> 
        )      
    }     
    
}

