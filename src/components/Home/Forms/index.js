import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import { StackNavigator } from 'react-navigation';

import FormsHome from './forms_home';
import FormsDetails from './forms_details';

const FormsTabView = ({ navigation }) => <FormsHome navigation={navigation} />;

const FormsDetailTabView = ({ navigation }) => (
  <FormsDetails
    banner={`${navigation.state.params.name}s Profile`}
    navigation={navigation}
  />
);

const FormsTab = StackNavigator({
  Forms: {
    screen: FormsTabView,
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
      title: 'Forms',
    }),
  },
  Forms_Detail: {
    screen: FormsDetailTabView,
    path: '/forms_detail',
    navigationOptions: {
      title: 'Forms Detail',
    },
  },
});

export default FormsTab;
