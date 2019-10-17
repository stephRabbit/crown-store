import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: 'crwn-clothes-67ccb.firebaseapp.com',
  databaseURL: 'https://crwn-clothes-67ccb.firebaseio.com',
  projectId: 'crwn-clothes-67ccb',
  storageBucket: 'crwn-clothes-67ccb.appspot.com',
  messagingSenderId: '773715063800',
  appId: '1:773715063800:web:1ee4d6f5c861b0f539dc0d'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () =>
  auth.signInWithPopup(provider).catch(() => {})

export default firebase
