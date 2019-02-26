import React, { Component } from 'react'
import AppNavigator from '../config/_layout'
import Splash from './splash'
import { ScreenNavigate } from '../const/screenConst'

export default class Index extends Component {
	constructor(props){
    super(props);
    this.state = {
        currentScreen: ScreenNavigate.SCREEN_SPLASH
    };
    setTimeout(()=> {
      console.log('Splash screen for 3 seconds');
      this.setState({
        currentScreen: ScreenNavigate.SCREEN_LOGIN
      });
    }, 3000)
  }
  
  render() {
    const currentScreen = this.state
    let mainScreen = currentScreen === ScreenNavigate.SCREEN_SPLASH ? <Splash /> : <AppNavigator />
    return mainScreen
    // return(
    //   <AppNavigator />
    // );
  }
}