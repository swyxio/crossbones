import {PrimaryNav} from '../components/MainDrawer'

export const reducer = (state, action) => {
  const newState = PrimaryNav.router.getStateForAction(action, state)
  return newState || state
}
