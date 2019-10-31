import UserTypes from './types'

const INITIAL_STATE = {
  currentUser: null
}

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UserTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state
  }
}

export default user
