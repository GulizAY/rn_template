import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import genericStyle from '../../../styles/genericStyle';


const listItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listContainer}>
          {props.itemImage ? <Image source={props.itemImage} style={styles.imageItem}/> : <Text></Text>}
          <View style={styles.itemContentContainer}>
            {props.itemTitle ? <Text style={styles.itemContentTitle}>{props.itemTitle}</Text> : <Text></Text>}
            {props.itemText ? <Text style={styles.itemContent}>{props.itemText}</Text> : <Text></Text>}
          </View>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
        alignItems: "center",
        padding: 20,
        marginBottom: 5,
        flexDirection: "row",
        backgroundColor: genericStyle.Colors.colorOpacity
    },
    itemContentContainer: {
      flex:1,
      flexDirection: "column",
      flexWrap: "wrap",
    },
    itemContentTitle: {
      fontSize: genericStyle.FontSize.medium,
      color: genericStyle.Colors.colorYellow
    },
    itemContent: {
      fontSize: genericStyle.FontSize.small,
      color: genericStyle.Colors.colorWhite
    },
    imageItem: {
        marginRight: 8,
        width: 80, 
        height: 60
    }
});

export default listItem;