let username = localStorage.getItem('username');
let lastEntry = localStorage.getItem('lastEntry');

if (username && lastEntry) {
    alert(`Добрый день, ${username}! Давно не виделись. В последний раз вы были у нас ${lastEntry}`);
} else {
    username = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
}

var options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
};

lastEntry = new Date().toLocaleString("ru", options);

localStorage.setItem('username', username);
localStorage.setItem('lastEntry', lastEntry);