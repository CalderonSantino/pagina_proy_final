const buttons = document.getElementsByClassName('button');
for (let button of buttons) {
    button.addEventListener('click', () => {
        console.log('Button clicked!');
    });
}

const signs = document.getElementsByClassName('sign');
for (let sign of signs) {
    sign.addEventListener('click', () => {
        console.log('Sign clicked!');
        window.location.href = 'login.html';
    });
}

const creates = document.getElementsByClassName('create');
for (let create of creates) {
    create.addEventListener('click', () => {
        console.log('Create clicked!');
        window.location.href = 'register.html';
    });
}