/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {GoogleSignin} from 'react-native-google-signin';
import codePush from "react-native-code-push";
import { Root} from 'js/Navigators';




let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };
class App extends Component{



  constructor(props) {
    super(props);
    this.state = {
        showDownloadingModal: false,
        showInstalling: false,
        downloadProgress: 0
    };
  }


  componentDidMount(){
    
    codePush.sync(
      {updateDialog: true, installMode: codePush.InstallMode.ON_APP_RESUME},
      status => {
          switch (status) {
              case codePush.SyncStatus.DOWNLOADING_PACKAGE:
                  this.setState({showDownloadingModal: true});
                  break;
              case codePush.SyncStatus.INSTALLING_UPDATE:
                  this.setState({showInstalling: true});
                  break;
              case codePush.SyncStatus.UPDATE_INSTALLED:
                  this.setState({showDownloadingModal: false});
                  break;
              default:
                  break;
          }
      },
      ({receivedBytes, totalBytes}) => {
          this.setState({downloadProgress: receivedBytes / totalBytes * 100});
      }
    );

    GoogleSignin.hasPlayServices({autoResolve: true})
    .then(() => {
        
        GoogleSignin.configure({
            scopes:['profile','email'],
            iosClientId: "ADD_IOS_CLIEND_ID"
        })
            .then(() => {
                
            })
            .catch((err) => {
                console.log('SIGNIN', err);
            })
            .done();
    })
    .catch((err) => {
        console.log('SIGNIN', err);
    })
    .done();
  }

  

  render() {
    if (this.state.showDownloadingModal) {
      return (
          <View
              style={{ backgroundColor: 'white' }}
          >
              <View style={styles.container}>
                  
                      <View
                          style={{
                            flex: 1,
                            alignSelf: "stretch",
                            justifyContent: "center",
                            padding: 20
                          }}
                      >
                          {this.state.showInstalling
                              ? <Text
                                  style={{
                                    color: "#10acbd",
                                    textAlign: "center",
                                    marginBottom: 15,
                                    fontSize: 15
                                  }}
                              >
                                  Installing update...
                              </Text>
                              : <View
                                  style={{
                                      flex: 1,
                                      alignSelf: "stretch",
                                      justifyContent: "center",
                                      padding: 20
                                    }}
                              >
                                  <Text
                                      style={{
                                        color:'#10acbd',
                                        textAlign: "center",
                                        marginBottom: 15,
                                        fontSize: 15
                                      }}
                                  >
                                      Downloading update...
                                      {" "}
                                      {`${parseInt(this.state.downloadProgress, 10)} %`}
                                  </Text>
                              </View>}
                      </View>
              </View>
          </View>
      );
    }
    else{
      return (
        <View style={styles.container}>
              <Root/>
        </View>
      );
    } 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  }
});


export default codePush(codePushOptions)(App)
