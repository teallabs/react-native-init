
import React, { Component,PropTypes } from 'react';
import { 
    View,
    ActivityIndicator,
    Text
} from 'react-native';
import styles from './FirstTabStyle';


export default class FirstTab extends Component {

    render(){
        return(
            <View style={styles.container}>
                <Text>Hello World!!</Text>
            </View> 
        )      
    }
}





