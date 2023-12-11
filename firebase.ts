import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDY9ndpXabhXbS3e2P-03UaUKMUI7M_4mY",
    authDomain: "dropbox-clone-62514.firebaseapp.com",
    projectId: "dropbox-clone-62514",
    storageBucket: "dropbox-clone-62514.appspot.com",
    messagingSenderId: "931089191010",
    appId: "1:931089191010:web:ea6b65b397215eae89813b"
  };

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app)
  const storage = getStorage(app)

  export { db, storage };
