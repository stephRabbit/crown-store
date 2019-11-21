import { takeLatest, call, put } from 'redux-saga/effects'

import { firestore, convertCollectionsSnapshotToMap } from '../../../firebase'

import { fetchCollectionsSuccess, fetchCollectionsError } from './actions'

import ShopTypes from './types'

export function* fetchCollectionsAysnc() {
  try {
    const collectionRef = firestore.collection('collections')
    const snapshot = yield collectionRef.get()
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    yield put(fetchCollectionsSuccess(collectionMap))
  } catch (err) {
    yield put(fetchCollectionsError(err.message))
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(ShopTypes.FETCH_COLLECTIONS_START, fetchCollectionsAysnc)
}
