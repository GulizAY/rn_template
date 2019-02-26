import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import ButtonStyle from '../../../styles/button';

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity 
          style={ButtonStyle.buttonDanger}
          onPress={this.props.onPress}
      >
        <Text style={ButtonStyle.buttonDangerText}>{this.props.buttonText}</Text>
      </TouchableOpacity>
    );
  }
}