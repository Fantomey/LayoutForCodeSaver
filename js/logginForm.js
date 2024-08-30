
document.body.style.userSelect = 'none';
document.body.style.webkitUserSelect = 'none';
document.body.style.mozUserSelect = 'none';
document.body.style.msUserSelect = 'none';


const users = [
    { username: 'Admin', password: '123' },
    { username: 'admin', password: '123' }
];

document.getElementById("logginForm").addEventListener('submit', function (event) {
    event.preventDefault();

    const userName = document.querySelector(".nick").value;
    const pass = document.querySelector(".pass").value;

    const divLog = document.getElementById("error");
    const errors = document.createElement('p');


    const existingError = divLog.querySelector(".res");
    if (existingError) {
        existingError.remove();
    }


    const userFound = users.some(user => user.username === userName && user.password === pass);

    if (userFound) {
        errors.classList.add("res");
        errors.textContent = "Login Successful";
        divLog.appendChild(errors);
        setTimeout(() => {
            window.location.href = 'choose.html';
        }, 2000);
    } else {
        errors.classList.add("res");
        errors.textContent = "Invalid login or password";
        divLog.appendChild(errors);
    }
});
