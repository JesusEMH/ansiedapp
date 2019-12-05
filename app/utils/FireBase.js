import firebase from 'firebase/app';

  const firebaseConfig = {
    apiKey: "AIzaSyAs_tlJKOB4xmy_5mbX9WYLVGnxxl-SXFw",
    authDomain: "ansiedapp.firebaseapp.com",
    databaseURL: "https://ansiedapp.firebaseio.com",
    projectId: "ansiedapp",
    storageBucket: "ansiedapp.appspot.com",
    messagingSenderId: "485506523146",
    appId: "1:485506523146:web:a55bcef514e1e9f29dbff3",
    measurementId: "G-DCKKNZQPRC"
};

  export const firebaseApp = firebase.initializeApp(firebaseConfig);