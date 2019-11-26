import { takeLatest, put, all, call } from 'redux-saga/effects'

import {
  auth,
  createUserProfileDocument,
  googleProvider,
  getCurrentUser
} from '../../../firebase'

import UserTypes from './types'

import {
  signInSuccess,
  signInFail,
  signOutSuccess,
  signOutFail
} from './actions'

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth)
    const userSnapshot = yield userRef.get()
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (err) {
    yield put(signInFail(err))
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    yield getSnapshotFromUserAuth(user)
  } catch (err) {
    yield put(signInFail(err))
  }
}

export function* signInWithEmailPassword({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    yield getSnapshotFromUserAuth(user)
  } catch (err) {
    yield put(signInFail(err))
  }
}

export function* isUserAuthenicated() {
  try {
    const userAuth = yield getCurrentUser()
    if (!userAuth) {
      return
    }
    yield getSnapshotFromUserAuth(userAuth)
  } catch (err) {
    yield put(signInFail(err))
  }
}

export function* signOut() {
  try {
    yield auth.signOut()
    yield put(signOutSuccess())
  } catch (err) {
    yield put(signOutFail())
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
  yield takeLatest(UserTypes.EMAIL_SIGN_IN_START, signInWithEmailPassword)
}

export function* onCheckUserSession() {
  yield takeLatest(UserTypes.CHECK_USER_SESSION, isUserAuthenicated)
}

export function* onSignOutStart() {
  yield takeLatest(UserTypes.SIGN_OUT_START, signOut)
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart)
  ])
}
