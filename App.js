import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, StackAction} from 'react-navigation';
import React from 'react';
import {Stylesheet, Text, View, Button} from 'react-native';
import HomeScreen from './AppComponents/HomeScreen';
import ProfileScreen from './AppComponents/ProfileScreen';
import LoginScreen from './AppComponents/LoginScreen';
import Loginaccount from './AppComponents/Loginaccount';
import Createaccount from './AppComponents/Createaccount';
import Menuscreen from './AppComponents/Menuscreen';

const AboutStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  About: {
    screen: ProfileScreen,
  },
  Register: {
    screen: LoginScreen,
  },
  Login: {
    screen: Loginaccount,
  },
  Create_Account: {
    screen: Createaccount,
  },
  Menu: {
    screen: Menuscreen,
  }
});

export default createAppContainer(AboutStack);

