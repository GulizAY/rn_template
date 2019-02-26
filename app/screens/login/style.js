import { StyleSheet, Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale } from '../../styles/scalingUtils';
import genericStyle from '../../styles';

const {height: screenHeight} = Dimensions.get('window');

const _loginScreenStyle = StyleSheet.create({
   container: {
       flex: 1,
       flexDirection: 'column',
       justifyContent: 'space-between',
       height: screenHeight,
       backgroundColor: genericStyle.Colors.colorWhite,
   },
   subContainer: {
       flex: 1,
       flexDirection: 'column',
       height: screenHeight / 3,
       //marginTop: scale(5),
       marginBottom: scale(5),
       //backgroundColor: genericStyle.Colors.colorBlue,
   },
   title: {
       color: genericStyle.Colors.colorAqua001,
       fontSize: genericStyle.FontSize.xmedium,
       textAlign: 'center',
       marginTop: scale(5)
   },
   logoContainer: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
   },
   logo: {
        // width: moderateScale(150),
        // height: verticalScale(130)
        //resizeMode: 'cover',
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined
    },
   inputContainer: {
       //position: "absolute",
       flex:1,
       flexDirection: "column",
       padding: scale(20),
   },
   input: {
       height: verticalScale(40),
       paddingHorizontal: moderateScale(10),
       marginBottom: moderateScale(20),
       borderRadius: scale(15),
       color: genericStyle.Colors.colorBlack,
       backgroundColor: genericStyle.Colors.colorAqua002,
   },
   inputError: {
       borderWidth: 3,
       borderColor: genericStyle.Colors.colorRed
   },
});

const LoginStyle = {
   LoginStyle: _loginScreenStyle,
   Colors: genericStyle.Colors
}

export default LoginStyle;