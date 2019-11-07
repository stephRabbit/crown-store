import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: 'AIzaSyAi9BtFq3QPcy7T-_pfEO3rFNWexCxeaBk',
  authDomain: 'crwn-clothes-67ccb.firebaseapp.com',
  databaseURL: 'https://crwn-clothes-67ccb.firebaseio.com',
  projectId: 'crwn-clothes-67ccb',
  storageBucket: 'crwn-clothes-67ccb.appspot.com',
  messagingSenderId: '773715063800',
  appId: '1:773715063800:web:1ee4d6f5c861b0f539dc0d'
}

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

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () =>
  auth.signInWithPopup(provider).catch(() => {})

export default firebase
