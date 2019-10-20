import UserTypes from './types'

export const setCurrentUser = user => {
  return {
    type: UserTypes.SET_CURRENT_USER,
    payload: user
  }
}
