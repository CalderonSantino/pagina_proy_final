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


const logins = document.getElementsByClassName('signInButton');
for (let login of logins) {
    login.addEventListener('click', () => {
        console.log('Login clicked!');
        window.location.href = 'dashboard.html';
    });
}