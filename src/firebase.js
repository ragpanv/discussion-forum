import firebase from 'firebase'

const firebaseConfig = {
  /* firebase api configuration */
 };
const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth=firebase.auth()
const provider= new firebase.auth.GoogleAuthProvider()
const db = firebaseApp.firestore()

export {auth, provider}
export default db
