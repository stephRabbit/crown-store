import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: 'crwn-clothes-67ccb.firebaseapp.com',
  databaseURL: 'https://crwn-clothes-67ccb.firebaseio.com',
  projectId: 'crwn-clothes-67ccb',
  storageBucket: 'crwn-clothes-67ccb.appspot.com',
  messagingSenderId: '773715063800',
  appId: '1:773715063800:web:1ee4d6f5c861b0f539dc0d'
}

firebase.initializeApp(firebaseConfig)

export const createUserProfileDocument = async (userAuth, extraData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...extraData
      })
    } catch (err) {
      console.error('Error creating user', err)
    }
  }

  return userRef
}

export const addCollectionDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  const batch = firestore.batch()
  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data()
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return transformedCollection.reduce((acc, val) => {
    acc[val.title.toLowerCase()] = val
    return acc
  }, {})
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () =>
  auth.signInWithPopup(provider).catch(() => {})

export default firebase
