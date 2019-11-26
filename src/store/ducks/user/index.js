import UserTypes from './types'

const INITIAL_STATE = {
  currentUser: null,
  error: null
}

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UserTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }
    case UserTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      }
    case UserTypes.SIGN_IN_FAIL:
    case UserTypes.SIGN_OUT_FAIL:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default user
