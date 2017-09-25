import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Buttons from './Buttons';
import Lists from './Lists';
import Forms from './Forms';
import Bones from './Bones';

const Home = TabNavigator(
  {
    Buttons: {
      screen: Buttons,
      path: '/buttons',
      navigationOptions: {
        tabBarLabel: 'Buttons',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'emoticon-cool' : 'emoticon-neutral'}
            size={30}
            type="material-community"
            color={tintColor}
          />
        ),
      },
    },
    Lists: {
      screen: Lists,
      path: '/lists',
      navigationOptions: {
        tabBarLabel: 'Lists',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name="list" size={30} type="entypo" color={tintColor} />
        ),
      },
    },
    Forms: {
      screen: Forms,
      path: '/forms',
      navigationOptions: {
        tabBarLabel: 'Forms',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name="wpforms"
            size={30}
            type="font-awesome"
            color={tintColor}
          />
        ),
      },
    },
    Bones: {
      screen: Bones,
      path: '/bones',
      navigationOptions: {
        tabBarLabel: 'Bones',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'skull' : 'bone'}
            size={30}
            type="material-community"
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Bones',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

Home.navigationOptions = {
  drawerLabel: 'Home',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="home"
      size={30}
      style={{
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      type="material-commnity"
      color={tintColor}
    />
  ),
};

export default Home;
