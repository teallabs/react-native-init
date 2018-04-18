
import React, { Component,PropTypes } from 'react';
import { 
    View,
    ActivityIndicator,
    AsyncStorage
} from 'react-native';
import styles from './AuthorizationStyle';



class Authorization extends Component {

    componentWillMount(){
        AsyncStorage.getItem('user').then( value => {
            const {navigate} = this.props.navigation;
            if(!!JSON.parse(value)){
                navigate('main');
            }
            else{
                navigate('login');
            }
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator/>
            </View> 
        )      
    }
}




export default Authorization
