import React, { Component } from "react";
import { Image, View, StyleSheet } from "react-native";

import splashscreen from "../../../assets/img/splash.png";

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.container}> 
        <Image
          source={splashscreen}
          style={styles.image}
        />
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 256, 
    width: 256
  }
});