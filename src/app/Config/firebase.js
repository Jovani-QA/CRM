import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


// Sua configuração Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAc4z06HwhNZjtL0UTZIdhyg3mUd-FlW8w",
    authDomain: "crm-client-611a5.firebaseapp.com",
    projectId: "crm-client-611a5",
    storageBucket: "crm-client-611a5.appspot.com",
    messagingSenderId: "112408438317",
    appId: "1:112408438317:web:f83358716a111c8af83aa4"
  };

 // Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export default app;
