import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Screens from './route';
import genericStyle from '../styles';

const LoginStack = createStackNavigator ({
    Login: { screen: Screens.Login },
});

const HomeStack = createStackNavigator({
  Home: { screen: Screens.Home },
});

const SettingsStack = createStackNavigator({
  Settings: { screen: Screens.Settings },
});

const ItemsStack = createStackNavigator({
  ItemList: { screen: Screens.Items },
  ItemDetail: { screen: Screens.ItemDetail },
});

const AppNav = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Items: { screen: ItemsStack },
    Settings: { screen: SettingsStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // tabBarIcon: ({ focused, tintColor }) => {
      //   const { routeName } = navigation.state;
      //   let iconName;
      //   if (routeName === 'Home') {
      //     iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      //   } else if (routeName === 'Settings') {
      //     iconName = `ios-options${focused ? '' : '-outline'}`;
      //   }

      //   // You can return any component that you like here! We usually use an
      //   // icon component from react-native-vector-icons
      //   return <Ionicons name={iconName} size={25} color={tintColor} />;
      // },
    }),
    tabBarOptions: {
      activeTintColor: genericStyle.Colors.colorWhite,
      activeBackgroundColor: genericStyle.Colors.colorAqua001,
      inactiveTintColor: genericStyle.Colors.colorBlack,
    },
  }
);

const RootNav = createStackNavigator({
  Login: { screen: LoginStack, headerMode: null },
  Authorize: { screen: AppNav, headerMode: null  }
  }
  ,{
    headerMode: 'none', 
    navigationOptions: { 
      header: null 
    } 
  }
);

export default createAppContainer(RootNav);