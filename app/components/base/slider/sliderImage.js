import React from 'react';
import ImageSlider from 'react-native-image-slider';
import { StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight, 
} from 'react-native';

import genericStyle from '../../../styles/genericStyle';

const sliderImage = (props) => {
  return (
    <View style={{ flexDirection: 'row' }}>
    <ImageSlider
      loop
      autoPlayWithInterval={3000}
      images={props.images}
      onPress={({ index }) => alert(index)}
      customSlide={({ index, item, style, width }) => (
        // It's important to put style here because it's got offset inside
        <View
          key={index}
          style={[
            style,
            styles.customSlide,
            { backgroundColor: index % 2 === 0 ? genericStyle.Colors.colorYellow : genericStyle.Colors.colorGreen },
          ]}
        >
          <Image 
            resizeMode="stretch"
            source={item/*{ uri: item }*/} 
            style={styles.customImage} />
        </View>
      )}
      customButtons={(position, move) => (
        <View style={styles.buttons}>
          {props.images.map((image, index) => {
            return (
              <TouchableHighlight
                key={index}
                underlayColor="#ccc"
                onPress={() => move(index)}
                style={styles.button}
              >
                <Text style={position === index && styles.buttonSelected ? styles.buttonSelected : styles.buttonUnselected}>
                  {index + 1}
                </Text>
              </TouchableHighlight>
            );
          })}
        </View>
      )}
    />
  </View>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#F5FCFF',
  },
  slider: { backgroundColor: genericStyle.Colors.colorBlack, height: 350 },
  contentText: { color: genericStyle.Colors.colorWhite },
  buttons: {
    zIndex: 1,
    height: 30,
    marginTop: -15,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    margin: 3,
    width: 25,
    height: 25,
    opacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSelected: {
    opacity: 1,
    color: genericStyle.Colors.colorGreen001,
    fontSize: genericStyle.FontSize.big,
    fontWeight: genericStyle.FontWeight.bold
  },
  buttonUnselected: {
    opacity: 1,
    color: genericStyle.Colors.colorOrange001,
    fontSize: genericStyle.FontSize.medium
  },
  customSlide: {
    backgroundColor: genericStyle.Colors.colorGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  customImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  },
});

export default sliderImage;

