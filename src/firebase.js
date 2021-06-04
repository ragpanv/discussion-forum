import firebase from 'firebase'

const firebaseConfig = {
  /* firebase api configuration */
 };
const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth=firebase.auth()
const provider1= new firebase.auth.GoogleAuthProvider()

const provider2 = new firebase.auth.FacebookAuthProvider();
const provider3 = new firebase.auth.GithubAuthProvider();
const provider4 = new firebase.auth.OAuthProvider("apple.com");
const provider5 = new firebase.auth.OAuthProvider("microsoft.com");


const db = firebaseApp.firestore()


export { auth, provider1, provider2, provider3, provider4, provider5 };
export default db
