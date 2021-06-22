let number;
function randomNumber() {
    number = Math.floor(Math.random() * 100);
}

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        randomNumber();
        if (number % 2 == 0) {
            resolve(`Завершено успешно. Сгенерированное число — ${number}`);
        } else {
            reject(`Завершено с ошибкой. Сгенерированное число — ${number}`);
        }
    }, 3000);
});

myPromise
    .then((result) => {
        console.log('Сгенерировано чётное число, promise выполнится успешно (resolve)', result);
    })
    .catch((error) => {
        console.log('Сгенерировано нечётное число, promise выполнится с ошибкой (reject)', error);
    })