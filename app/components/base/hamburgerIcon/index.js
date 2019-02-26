import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import genericStyle from '../../../styles';

export default class HamburgerIcon extends Component {

  toggleDrawer=()=>{
    //console.log(this.props.navigationProps);
    this.props.navigationProps.toggleDrawer();
  }
 
  render() {
 
    return (
 
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} 
            style={{ marginLeft: 5 }}>
          <IconIonicons name="ios-menu"
            size={30}
            color={genericStyle.Colors.colorWhite}
          />
        </TouchableOpacity>
      </View>
    
    );
  
  }
}