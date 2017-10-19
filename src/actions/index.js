import { push } from 'redux-little-router';
import firebase from 'firebase';
import firestore from 'firebase/firestore';

export const STORE_QUERY = 'STORE_QUERY';

const firebaseConfig = {
  apiKey: 'AIzaSyBf3VR3LyyFarmxDWEtChtApxXRrNrm3xA',
  authDomain: 'full-5962f.firebaseapp.com',
  databaseURL: 'https://full-5962f.firebaseio.com',
  projectId: 'full-5962f',
  storageBucket: '',
  messagingSenderId: '559653873505'
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const objRef = db.collection('objects');

const newObj = objRef.doc('object1').set({
  key1: 'string-value',
  key2: 3
});

export function navigateAbout() {
  return (dispatch) => {
    dispatch(push('/about'))
  }
}

export function navigateQuery(string) {
  return (dispatch) => {
    dispatch(storeQuery(string));
    dispatch(
      push({
        pathname: `/query`,
        query: {
          string: string,
        },
      })
    )
  }
}

export function storeQuery(query) {
  return {
    type: STORE_QUERY,
    payload: query
  }
}