import React from 'react'
import * as ReactNavigation from 'react-navigation'
import { View, Image, Dimensions } from 'react-native';
// import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { connect } from 'react-redux'

import Home from './Home'
import Playground from './Playground'
import Ratings from './Ratings'

const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: '#43484d' }}>
    <View
      style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}
    >
      <Image
        source={require('./assets/images/logo.png')}
        style={{ width: SCREEN_WIDTH * 0.57 }}
        resizeMode="contain"
      />
    </View>
    <ReactNavigation.DrawerItems {...props} />
  </View>
);

// this is exported for the Nav Reducer
export const PrimaryNav = ReactNavigation.DrawerNavigator(
  {
    Home: {
      path: '/home',
      screen: Home,
    },
    Ratings: {
      path: '/ratings',
      screen: Ratings,
    },
    Playground: {
      path: '/playground',
      screen: Playground
    }
  },
  {
    // Default config for all screens
    headerMode: 'screen',
    mode: 'modal',
    // navigationOptions: {
      // headerStyle: {backgroundColor: Colors.background},
    // }
    initialRouteName: 'Home', 
    contentOptions: {
      activeTintColor: '#548ff7',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 15,
        marginLeft: 0,
      },
    },
    drawerWidth: SCREEN_WIDTH * 0.8,
    contentComponent: CustomDrawerContentComponent,
  }
);

// here is our redux-aware our smart component
function ReduxNavigation (props) {
  const { dispatch, nav } = props
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: nav
  })

  return <PrimaryNav navigation={navigation} />
}

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(ReduxNavigation)
