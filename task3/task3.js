// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.j-result');
// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.j-btn-request');

// Ищем кнопку, по нажатии на которую будет год
const selectNode = document.querySelector('.year');

const reqUrl = 'https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440';

//Рисуем таблицу
function drawTable(data) {
    const table = `<table>
   <tr>
      <td>1кв.</td>
      <td>2кв.</td>
      <td>3кв.</td>
      <td>4кв.</td>
   </tr>
   <tr>
      <td>${data.sales.q1}</td>
      <td>${data.sales.q2}</td>
      <td>${data.sales.q3}</td>
      <td>${data.sales.q4}</td>
   </tr>
</table>`;

    resultNode.innerHTML = table;
};

/**
  * Функция-обертка над XMLHttpRequest, осуществляющая запрос
  * reqUrl - урл, по которому будет осуществляться запрос
  */

btnNode.addEventListener('click', () => {
    if (selectNode.value == "empty") {
        alert("Выберите, пожалуйста, год");
    }
    else {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', reqUrl, true);

        xhr.onload = function () {
            if (xhr.status != 200) {
                console.log('Статус ответа: ', xhr.status);
            } else {
                const result = JSON.parse(xhr.response);

                var length = 0;
                for (var i in result) if (result.hasOwnProperty(i)) length++;

                for (let j = 0; j < length; j++) {
                    if (result[j].year == selectNode.value) {
                        drawTable(result[j]);
                    }
                }
            }
        };

        xhr.send();
    }
});