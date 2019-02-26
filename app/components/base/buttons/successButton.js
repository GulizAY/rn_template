import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import ButtonStyle from '../../../styles/button';

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity 
          style={ButtonStyle.buttonSuccess}
          onPress={this.props.onPress}
      >
         <Text style={ButtonStyle.buttonSuccessText}>{this.props.buttonText}</Text>
      </TouchableOpacity>
    );
  }
}