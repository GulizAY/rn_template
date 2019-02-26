import React, { Component } from 'react';
import { View, 
         Image, 
         KeyboardAvoidingView, 
         Text 
} from 'react-native';

import styles from './style';
import LoginForm from './loginForm';

export default class Screen extends Component {

 static navigationOptions = {
   header: null,
 }

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.LoginStyle.container}>
        <View style={styles.LoginStyle.subContainer}></View>
        <View style={styles.LoginStyle.subContainer}>
          <View style={styles.LoginStyle.logoContainer}>
            <Image style={styles.LoginStyle.logo} 
              resizeMode="stretch"
              source={require('../../../assets/img/logo.png')}>
            </Image>
            <Text style={styles.LoginStyle.title}>React App Template</Text>
          </View>
        </View>
        <View style={styles.LoginStyle.subContainer}>
          <LoginForm onPressToRedirect={(token) => this.props.navigation.navigate(`Authorize`, {accessToken: token })}/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}


