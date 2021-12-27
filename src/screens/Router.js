import React from 'react';
import { View } from 'react-native';

import {
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';

import Add from './Add';
import Profile from './Profile';
import Games from './Games';
import History from './History';
import Icon from "react-native-vector-icons/Ionicons";

const AppNavigator = createBottomTabNavigator(
  {
      Games:{
          screen:Games,
          navigationOptions: {
              tabBarLabel:"Games",
              tabBarIcon: ({ tintColor }) => (
                  <Icon name="logo-game-controller-a" size={30} color={tintColor}/>
              )
          },
      },
      History:{
          screen:History,
          navigationOptions: {
              tabBarLabel:"History",
              tabBarIcon: ({ tintColor }) => (
                  <Icon name="ios-book" size={30} color={tintColor}/>
              )
          },
      },
      Add:{
          screen:Add,
          navigationOptions: {
              tabBarLabel:"Add",
              tabBarIcon: ({ tintColor}) => (
                  <Icon name="md-create" size={30} color={tintColor}/>
              )
          },
      },
      Profile:{
          screen:Profile,
          navigationOptions: {
              tabBarLabel:"Profile",
              tabBarIcon: ({ tintColor }) => (
                  <Icon name="ios-paw" size={30} color={tintColor}/>
              )
          },
      },
  },
  {
    initialRouteName: 'Add',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class Router extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppContainer />
      </View>
    );
  }
}
