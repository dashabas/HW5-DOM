document.querySelector('.btn').addEventListener('click', () => {
    const userName = document.getElementById('username').value;
    const userPassword = document.getElementById('userPassword').value;
    document.querySelector('.out').innerHTML = 'Name: ' + userName + ' / Password: ' + userPassword;


    localStorage.setItem('user', JSON.stringify({name: userName, password: userPassword}));
});


// One more option
// const userName = document.querySelector('#username');
// const userPassword = document.querySelector('#userPassword');
// const out = document.querySelector('.out');
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', () => {
//     out.innerHTML = 'Name: ' + userName.value + ' / Password: ' + userPassword.value;
//
//     localStorage.setItem('user', JSON.stringify({name: userName.value, password: userPassword.value}));
// });












