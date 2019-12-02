import { takeLatest, call, put, all } from 'redux-saga/effects'

import UserTypes from '../user/types'

import { clearCart } from './actions'

export function* clearCartOnSignOut() {
  yield put(clearCart())
}

export function* onSignOutSuccess() {
  yield takeLatest(UserTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)])
}
