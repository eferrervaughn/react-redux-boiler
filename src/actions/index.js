import { push } from 'redux-little-router';
import firebase from 'firebase';
import firestore from 'firebase/firestore';

export const STORE_QUERY = 'STORE_QUERY';

// const firebaseConfig = {
//   apiKey: 'AIzaSyBf3VR3LyyFarmxDWEtChtApxXRrNrm3xA',
//   authDomain: 'full-5962f.firebaseapp.com',
//   databaseURL: 'https://full-5962f.firebaseio.com',
//   projectId: 'full-5962f',
//   storageBucket: '',
//   messagingSenderId: '559653873505'
// };
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

// const objRef = db.collection('objects');
// const userRef = db.collection('users');

// const newObj = objRef.doc();
// newObj.set({
//   key1: 'string-value',
//   key2: 3
// });

// const newOG = userRef.add({
//   pointer: newObj.id
// });

// const refs = [];

// const getOG = userRef.get().then( snapshot => {
//     snapshot.forEach(doc => {
//       const id = doc.data().pointer
//       const tempRef = objRef.doc(id)
//       refs.push(tempRef)
//   });
// });

// console.log(refs.)

export function addObj(data) {
  return (dispatch) => {

  }
}

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