import { AsyncStorage } from 'react-native'

// More info here:  https://shift.infinite.red/shipping-persistant-reducers-7341691232b1
const REDUX_PERSIST = {
  active: false, // Redux persist is off by default
  reducerVersion: '1.0', // bump manually when you change reducer shape
  storeConfig: {
    storage: AsyncStorage,
    blacklist: ['login', 'search', 'nav'], // reducer keys that you do NOT want stored to persistence here
    // whitelist: [], Optionally, just specify the keys you DO want stored to
    // persistence. An empty array means 'don't store any reducers' -> infinitered/ignite#409

    // transforms: [immutablePersistenceTransform] // only if you use immutable.js
  }
}

export default REDUX_PERSIST
