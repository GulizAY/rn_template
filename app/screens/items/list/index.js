import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'


export default class ItemsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Item List!</Text>
        <Button
          title="Go to Detail"
          onPress={() => this.props.navigation.navigate('ItemDetail')}
        />
      </View>
    );
  }
}