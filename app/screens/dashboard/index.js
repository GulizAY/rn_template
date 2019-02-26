import React, { Component } from 'react';
import { Text, View } from 'react-native';
import genericStyle from '../../styles';

export default class Screen extends Component {
  static navigationOptions = {
    //header: null,
    //title: "Dashboard",
    headerLeft: null // remove back navigate
  }

  render() {
    return (
      <View style={genericStyle.BaseStyleSheet.primaryContainer}>
        <Text style={genericStyle.BaseStyleSheet.primaryTextColor}>This screen is Dashboard!</Text>
      </View>
    );
  }
}
