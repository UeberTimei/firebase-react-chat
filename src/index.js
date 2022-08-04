import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const app = firebase.initializeApp(
  {
    // there is config
  }
);

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
        auth,
        firestore,
        firebase
      }}>
    <App />
  </Context.Provider>
);