import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-storage.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

// Configuración de Firebase de tu proyecto
const firebaseConfig = {
    apiKey: "AIzaSyBp955Z4IdNCtkYxWCqrMyzv18I9sL9sxU",
    authDomain: "poryectofinal-8a52c.firebaseapp.com",
    projectId: "poryectofinal-8a52c",
    storageBucket: "poryectofinal-8a52c.firebasestorage.app",
    messagingSenderId: "563699080172",
    appId: "1:563699080172:web:de906dae2c89675faafec9",
    measurementId: "G-3956C90L0R"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { db, storage, analytics, auth };

console.log("Conexión a Firebase establecida correctamente.");