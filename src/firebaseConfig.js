import Firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDGKmxBwX42a7P3kVMC2lh_VbalU-wg5XY",
  authDomain: "pizza-planet-a1a34.firebaseapp.com",
  databaseURL: "https://pizza-planet-a1a34.firebaseio.com",
  projectId: "pizza-planet-a1a34",
  storageBucket: "",
  messagingSenderId: "637985262861"
};
const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database()
export const dbMenuRef = db.ref('menu')
