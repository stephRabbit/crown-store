import UserTypes from './types'

const initialState = {
  currentUser: null
}

function user(state = initialState, action) {
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
