import ReduxPersist from './config'
import { AsyncStorage } from 'react-native'
import { persistStore } from 'redux-persist'

const updateReducers = (store) => {
  const reducerVersion = ReduxPersist.reducerVersion
  const config = ReduxPersist.storeConfig
  const persistCallback = () => null // e.g. () => store.dispatch(StartupActions.startup())

  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion').then((localVersion) => {
    if (localVersion !== reducerVersion) {
      // Purge store
      persistStore(store, config, persistCallback).purge()
      AsyncStorage.setItem('reducerVersion', reducerVersion)
    } else {
      persistStore(store, config, persistCallback)
    }
  }).catch(() => {
    persistStore(store, config, persistCallback)
    AsyncStorage.setItem('reducerVersion', reducerVersion)
  })
}

export default {updateReducers}
