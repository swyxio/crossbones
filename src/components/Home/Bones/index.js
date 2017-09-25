import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import BonesHome from './bones_home';
import BonesDetails from './bones_detail';

const BonesTabView = ({ navigation }) => (
  <BonesHome banner="Bones" navigation={navigation} />
);

const BonesDetailTabView = ({ navigation }) => (
  <BonesDetails banner="Bones Detail" navigation={navigation} />
);

const BonesTab = StackNavigator({
  Home: {
    screen: BonesTabView,
    path: '/',
    navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: '#548ff7'},
      headerLeft: (
        <Icon
          name="menu"
          size={30}
          type="entypo"
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      ),
      title: 'Bones',
    }),
  },
  Detail: {
    screen: BonesDetailTabView,
    path: 'bones_detail',
    navigationOptions: {
      title: 'Bones Detail',
    },
  },
});

export default BonesTab;
