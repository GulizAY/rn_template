//import liraries
import React, { Component } from 'react';
import { View, AsyncStorage, TextInput, Alert, StatusBar} from 'react-native';
import styles from '../../screens/login/style';
import { PrimaryButton } from '../../components/base/buttons';
import { Urls } from '../../const/screenConst';

// create a component
class LoginForm extends Component {
   
  constructor(props){
    super(props);
    this.state = {
      username: "",
      usernameValid: true,
      password: "",
      isLoggedIn: false,
      access_token: "",
      user: []
    }
  }

  // login button event
  onLoginPress = () => {
    console.log('loggedIn')
    this.props.onPressToRedirect();
    //this.loginFromApiAsync();
  };

  _storeData = (token) => {
    try {
      AsyncStorage.setItem('accessToken', token);
    } catch (error) {
      // Error saving data
      console.log(error)
    }
  }

  // check user and get user info
  loginFromApiAsync() {
    
    return fetch(Urls.WEB_DOMAIN_API_URL + '/Account/Login/', {  
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        userName: this.state.username,
        password: this.state.password,
      })
    })
    .then((response) => response.json())
    .then((response) => {
      try {
        // Alert.alert("data", JSON.stringify(response));
        const result = JSON.stringify(response);
        const resultObj = JSON.parse(result);
        //console.log(result);

        if(resultObj.isSucceed == 1)
        {
          this.setState({
            isLoggedIn: true,
            access_token: resultObj.token
          });

          console.log(resultObj.user)
          this._storeData(this.state.access_token);
          this.props.onPressToRedirect(this.state.access_token);
        }
        else
        {
          const message = resultObj.resultCode.toString() + ': ' + resultObj.message.toString();
          Alert.alert("Failed Login!", message);
        }
        
      } catch(err) {
        // handle error
        console.error(err);
      }
      //return JSON.stringify(response);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  // validation for input value 
  validate(value, type)
  {
    alph=/^[a-zA-Z]+$/
    if(type === 'username')
    {
      if(!alph.test(value))
      {
        console.log("username invalid!")
        this.setState({username: "", usernameValid: false});
      }
      else
      {
        this.setState({username: value, usernameValid: true});
      }
    }
  }

   render() {
      return (
        <View style={styles.LoginStyle.inputContainer}>
          <StatusBar barStyle="light-content" />
          <TextInput style={[styles.LoginStyle.input, !this.state.usernameValid ? styles.LoginStyle.inputError : null]}
            placeholder="Kullanıcı adı/email"
            placeholderTextColor={styles.Colors.colorBlack}
            autoCapitalize="none"
            value={this.state.username}
            onSubmitEditing={() => this.password.focus()}
            autoCorrect={false}
            onChangeText={(inputValue) => this.validate(inputValue, 'username')}
            //keyboardType='email-address'
            returnKeyType="next" />

          <TextInput style={styles.LoginStyle.input}
            placeholder="Şifre"
            placeholderTextColor={styles.Colors.colorBlack}
            returnKeyType="go"
            value={this.state.password}
            ref={(input) => this.password = input}
            onChangeText={(inputValue) => this.setState({ password: inputValue })}
            secureTextEntry />
          <PrimaryButton
            onPress={this.onLoginPress}
            buttonText="Giriş"
          />
          {/* <TouchableOpacity
            style={styles.LoginStyle.btnStyle}
            onPress={this.onLoginPress}
            >
            <Text style={styles.LoginStyle.btnTextStyle}>Giriş</Text>
          </TouchableOpacity> */}
        </View>
      );
   }
}

//make this component available to the app
export default LoginForm;