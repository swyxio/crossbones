import axios from 'axios'

const AUTHENTICATED = 'AUTHENTICATED'

export const authenticated = user => ({
  type: AUTHENTICATED, user
})

export const dummyLogin = () =>
  dispatch => dispatch(whoami())

// export const login = (username, password) =>
//   dispatch =>
//     axios.post('/api/auth/login/local',
//       {username, password})
//       .then(() => dispatch(whoami()))
//       .catch(() => dispatch(whoami()))

// export const logout = () =>
//   dispatch =>
//     axios.post('/api/auth/logout')
//       .then(() => dispatch(whoami()))
//       .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch => {
    // to demonstrate thunks working. normally you'd just ping /api/auth/me or equivalent
    return axios.get('https://randomuser.me/api/')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
      })
      .catch(failed => dispatch(authenticated(null)))
  }

export default reducer = (state=null, action) => {
  switch (action.type) {
  case AUTHENTICATED:
    return action.user
  }
  return state
}
