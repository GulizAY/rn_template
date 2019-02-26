
import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import MyColors from '../../../styles/colors';
import ListItem from '../../base/lists/listItem';

const flatList = (props) => {
    return (
        <FlatList 
            //extraData={this.state}
            keyExtractor={(item, index) => item.id.toString()}
            style={styles.listContainer}
            data={props.values}
            renderItem={(items) => (
                <ListItem 
                    itemTitle={items.item.id + "- "+ items.item.title}
                    itemText={items.item.text}
                    itemImage={items.item.image}
                    onItemPressed={()=> props.onItemClicked(items.item.id)} 
                />
            )}
        >
        </FlatList>
    );
};



const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
        padding: 10,
        marginBottom: 5,
        flexDirection: "column",
        backgroundColor: MyColors.colorOpacity
    }
});

export default flatList;