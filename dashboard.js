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

// Función para volver a la página anterior
function goBack() {
    window.history.back();
}

// Asegurarte de que el script se ejecute después de cargar el DOM
document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar el botón por su clase o cualquier identificador único
    const backButton = document.querySelector('.backButton');

    // Agregar un event listener al botón para que ejecute la función goBack al hacer clic
    if (backButton) {
        backButton.addEventListener('click', goBack);
    }
});

function UpdateData() {

    const newPasscode = document.querySelector('.newPasscode')

    update(ref(db, 'datos/'), {
        pass: parseInt(newPasscode.value)
    }).then(() => {
        console.log('Data Updated Successfully')
    }).catch((error) => {
        console.log('Unsuccessfully')
        console.log(error)
    })
}

const SavePassBtn = document.querySelector('.SavePassBtn')
SavePassBtn.addEventListener('click', UpdateData);


function RetData() {
    const dbRef = ref(db);
    get(child(dbRef, 'datos/')).then((snapshot) => {
        if (snapshot.exists()) {
            //console.log(snapshot.val().seguro);

            const iconContainer = document.getElementById("iconContainer");
            const iconPath = document.getElementById("iconPath");

            if (snapshot.val().seguro) {
                // Cambia al icono de "candado cerrado"
                iconContainer.setAttribute("data-icon", "LockClosed");
                iconPath.setAttribute(
                    "d",
                    "M208,80H192V56a64,64,0,0,0-128,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM80,80V56a48,48,0,0,1,96,0V80Zm48,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z"
                );

            } else {
                // Cambia al icono de "candado abierto"
                iconContainer.setAttribute("data-icon", "LockOpen");
                iconPath.setAttribute(
                    "d",
                    "M208,80H96V56a32,32,0,0,1,32-32c15.37,0,29.2,11,32.16,25.59a8,8,0,0,0,15.68-3.18C171.32,24.15,151.2,8,128,8A48.05,48.05,0,0,0,80,56V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm0,128H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"
                );
            }
        } else {
            console.log("Does not exist");
        }
    })
        .catch((error) => {
            console.error(error);
        });
}

setInterval(RetData, 500);


function UpdateAlarm() {
    update(ref(db, 'datos/'), {
        seguro: false
    }).then(() => {
        console.log('Data Updated Successfully')
    }).catch((error) => {
        console.log('Unsuccessfully')
        console.log(error)
    })
}
const DisableBtn = document.querySelector('.DisableBtn')
DisableBtn.addEventListener('click', UpdateAlarm);


function RetDataAlarma() {
    const dbRef = ref(db);
    get(child(dbRef, 'datos/')).then((snapshot) => {
        if (snapshot.exists()) {
            if (snapshot.val().activacionAlarma) {
                const frontDoorHour = document.querySelector('.frontDoorHour')
                const now = new Date();
                const hours = now.getHours(); // Obtiene la hora (0-23)
                const minutes = now.getMinutes(); // Obtiene los minutos (0-59)
                const seconds = now.getSeconds(); // Obtiene los segundos (0-59)
                frontDoorHour.textContent = `${hours}:${minutes}:${seconds}`;
            } else {
            }
        } else {
            console.log("Does not exist");
        }
    })
        .catch((error) => {
            console.error(error);
        });
}

setInterval(RetDataAlarma, 500);