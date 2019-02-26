import React, { Component } from "react";
import { Image, View, StyleSheet } from "react-native";

import MyColors from '../../styles/colors';
import splashscreen from "../../../assets/img/logo.png";

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.container}> 
        <Image
          resizeMode="contain"//"stretch"
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
    backgroundColor: MyColors.colorBlack
  },
  image: {
    alignSelf: 'center',
    height: 200,
    width: 200,
    //borderWidth: 1,
    borderRadius: 40,
    borderColor: MyColors.colorWhite,
  }
});