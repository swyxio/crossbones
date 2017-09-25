import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'
import { Text, View, StatusBar } from 'react-native'
import ReduxPersistConfig from './reducers/ReduxPersist/config'
import MainDrawer from './components/MainDrawer'

import store from './store'


class ExampleAppContainer extends Component {
  componentDidMount() {
    // if redux persist is not active fire startup action
    if (!ReduxPersistConfig.active) {
      this.props.startup()
    }
  }
  render() {
    return <MainDrawer />
  }
}
const mapState = ({ auth }) => ({ user: auth })
const mapDispatch = (dispatch) => ({
  startup: () => {
    // you can load initial data here
    // e.g. dispatch(loadData())
  }
})
const ExampleApp = connect(mapState, mapDispatch)(ExampleAppContainer)

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <ExampleApp />
      </Provider>
    )
  }
}