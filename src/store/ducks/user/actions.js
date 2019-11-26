import UserTypes from './types'

export const setCurrentUser = user => ({
  type: UserTypes.SET_CURRENT_USER,
  payload: user
})

export const googleSignInStart = () => ({
  type: UserTypes.GOOGLE_SIGN_IN_START
})

export const emailSignInStart = userCredentials => ({
  type: UserTypes.EMAIL_SIGN_IN_START,
  payload: userCredentials
})

export const signInSuccess = user => ({
  type: UserTypes.SIGN_IN_SUCCESS,
  payload: user
})

export const signInFail = error => ({
  type: UserTypes.SIGN_IN_FAIL,
  payload: error
})

export const signOutStart = () => ({
  type: UserTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
  type: UserTypes.SIGN_OUT_SUCCESS
})

export const signOutFail = error => ({
  type: UserTypes.SIGN_OUT_FAIL,
  payload: error
})

export const checkUserSession = () => ({
  type: UserTypes.CHECK_USER_SESSION
})
