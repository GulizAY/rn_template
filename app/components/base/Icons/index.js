import React, { Component } from 'react';
import { Platform } from 'react-native';

import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Icon = (props) => (
    <IconIonicons 
        name= { Platform.OS === 'ios' ? ("ios-" + props.iconName) : ("md-" + props.iconName)}
        size={props.iconSize}
        color={ props.iconColor }
    />
  
);

export default Icon;