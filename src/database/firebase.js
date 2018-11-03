import firebase from 'firebase/app'
import 'firebase/database'

const config = {
  apiKey: 'AIzaSyDOJmLTOKnZaEoBofRWc4lnLdOAzqXxrG0',
  authDomain: 'burger-7d8aa.firebaseapp.com',
  databaseURL: 'https://burger-7d8aa.firebaseio.com',
  projectId: 'burger-7d8aa',
  storageBucket: '',
  messagingSenderId: '1072824460785'
}

const database = firebase.initializeApp(config)
const db = database.database()

export default db
