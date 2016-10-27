/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { NativeModules } from 'react-native';
var YuntongxunManager = NativeModules.YuntongxunManager;

import RCTYuntongxun from 'react-native-yuntongxun';

export default class reactnativeyuntongdemo extends Component {
  componentDidMount(){
    // console.log(JSON.stringify(NativeModules));
    YuntongxunManager.initModule();
    YuntongxunManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('reactnativeyuntongdemo', () => reactnativeyuntongdemo);
