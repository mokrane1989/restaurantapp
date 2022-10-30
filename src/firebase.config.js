import {getApp , getApps , initializeApp} from 'firebase/app'
import { getFirestore} from 'firebase/firestore'
import { getStorage} from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyDWqNug9ZPnDz57LGkV-Faxe_XIFpbQNPc",
    authDomain: "restaurantapp-90d0c.firebaseapp.com",
    databaseURL: "https://restaurantapp-90d0c-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-90d0c",
    storageBucket: "restaurantapp-90d0c.appspot.com",
    messagingSenderId: "731924548659",
    appId: "1:731924548659:web:9220509fb31e9ded72a746"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app , firestore , storage};