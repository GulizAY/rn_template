import { StyleSheet} from 'react-native';
import MyColors from './colors';
import ButtonStyles from './button';
import MyFontSizes from './fontSizes';
import MyFontWeight from './fontWeights';
import { scale, verticalScale, moderateScale } from '../styles/scalingUtils';

const _genericStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    primaryContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: MyColors.colorBlack
    },
    secondoryContainer: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: MyColors.colorBlack
    },
    primaryBtnStyle: {
        //marginTop: moderateScale(20),
        paddingHorizontal: moderateScale(10),
        paddingVertical: verticalScale(15),
        borderRadius: scale(50),
        backgroundColor: MyColors.colorOrange001
    },
    primaryBtnTextStyle: {
        fontSize: moderateScale(18),
        fontWeight: "700",
        textAlign: "center",
        color: MyColors.colorWhite,
    },
    primaryTextColor: {
        color: MyColors.colorWhite    
    },
    secondoryTextColor: {
        color: MyColors.colorOrange001    
    }
    
});

const GenericStyle = {
   BaseStyleSheet: _genericStyles,
   ButtonStyles: ButtonStyles,
   Colors: MyColors,
   FontSize: MyFontSizes,
   FontWeight: MyFontWeight
}

export default GenericStyle;
