import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, child, update, remove } from "firebase/database";


// Configuración de Firebase de tu proyecto
const firebaseConfig = {
  apiKey: "AIzaSyBp955Z4IdNCtkYxWCqrMyzv18I9sL9sxU",
  authDomain: "poryectofinal-8a52c.firebaseapp.com",
  databaseURL: "https://poryectofinal-8a52c-default-rtdb.firebaseio.com",
  projectId: "poryectofinal-8a52c",
  storageBucket: "poryectofinal-8a52c.firebasestorage.app",
  messagingSenderId: "563699080172",
  appId: "1:563699080172:web:de906dae2c89675faafec9",
  measurementId: "G-3956C90L0R"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

function AddData() {
  set(ref(db, 'datos/'), {
    data: { dato1: 'dato1', dato2: 'dato2' }
  }).then(() => {
    alert('Data Added Successfully')
  }).catch((error) => {
    alert('Unsuccessfully')
    console.log(error)
  })
}

function RetData() {
  const dbRef = ref(db);

  get(child(dbRef, '/')).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val().bits_enteros);
    } else {
      alert("Does not exist");
    }
  })
    .catch((error) => {
      console.error(error);
    });
}

function UpdateData() {
  update(ref(db, '/'), {
    datos: { dato1: 'dato3', dato2: 'dato4' }
  }).then(() => {
    alert('Data Updated Successfully')
  }).catch((error) => {
    alert('Unsuccessfully')
    console.log(error)
  })
}

function RemoveData() {
  remove(ref(db, 'datos/'))
    .then(() => {
      alert('Data Removed Successfully')
    }).catch((error) => {
      alert('Unsuccessfully')
      console.log(error)
    })
}

const AddBtn = document.querySelector('.AddBtn');
AddBtn.addEventListener('click', AddData);

const RetBtn = document.querySelector('.RetBtn');
RetBtn.addEventListener('click', RetData);

const UpdBtn = document.querySelector('.UpdBtn');
UpdBtn.addEventListener('click', UpdateData);

const RemBtn = document.querySelector('.RemBtn');
RemBtn.addEventListener('click', RemoveData);