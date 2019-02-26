import { StyleSheet, Platform} from 'react-native';
import MyColors from './colors';
import MyFontSizes from './fontSizes';
import MyFontWeight from './fontWeights';

import { scale, verticalScale, moderateScale } from '../styles/scalingUtils';

const _buttonStyles = StyleSheet.create({
    buttonSuccess: {
      borderColor: MyColors.colorGreen,
      backgroundColor: MyColors.colorGreen001
    },
    buttonSuccessText: {
      fontSize: MyFontSizes.xmedium,
      fontWeight: MyFontWeight.bold,
      fontFamily: 'FontAwesome',
      textAlign: "center",
      color: MyColors.colorWhite,
    },
    buttonWarning: {
      borderColor: MyColors.colorYellow,
      backgroundColor: MyColors.colorYellow002
    },
    buttonWarningText: {
      fontSize: MyFontSizes.xmedium,
      fontWeight: MyFontWeight.bold,
      fontFamily: 'FontAwesome',
      textAlign: "center",
      color: MyColors.colorWhite,
    },
    buttonDanger: {
      borderColor: MyColors.colorRed,
    backgroundColor: MyColors.colorRed001
    },
    buttonDangerText: {
      fontSize: MyFontSizes.xmedium,
      fontWeight: MyFontWeight.bold,
      fontFamily: 'FontAwesome',
      textAlign: "center",
      color: MyColors.colorWhite,
    },
    buttonPrimary: {
      paddingHorizontal: moderateScale(10),
      paddingVertical: verticalScale(15),
      borderRadius: scale(50),
      backgroundColor: MyColors.colorAqua001
    },
    buttonPrimaryText: {
      fontSize: MyFontSizes.xmedium,
      fontWeight: MyFontWeight.bold,
      fontFamily: 'FontAwesome',
      textAlign: "center",
      color: MyColors.colorWhite,
    },
    buttonRed: {
      borderColor: MyColors.colorBlack,
      backgroundColor: MyColors.colorRed
    },
    buttonRedText: {
      fontSize: MyFontSizes.xmedium,
      fontWeight: MyFontWeight.bold,
      fontFamily: 'FontAwesome',
      textAlign: "center",
      color: MyColors.colorWhite,
    },
    buttonOrange: {
      borderColor: MyColors.colorOrange,
      backgroundColor: MyColors.colorOrange002
    },
    buttonOrangeText: {
      fontSize: MyFontSizes.xmedium,
      fontWeight: MyFontWeight.bold,
      fontFamily: 'FontAwesome',
      textAlign: "center",
      color: MyColors.colorWhite,
    },
})

export default _buttonStyles;