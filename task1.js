/* Этап 1. Подготовка данных */

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();
var result = { list: [] };

// XML, который мы будем парсить
const xmlString = `
  <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

/* Этап 2. Получение данных */

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const students = xmlDOM.querySelectorAll("student");

// Получение данных
students.forEach((element) => {
    var student = new Object();
    const studentFirstName = element.querySelector("first");
    const studentSecondName = element.querySelector("second");
    const studentAge = element.querySelector("age");
    const studentProf = element.querySelector("prof");
    const nameNode = element.querySelector("name");
    const nameLang = nameNode.getAttribute("lang");
    student.name = studentFirstName.textContent + ' ' + studentSecondName.textContent;
    student.age = studentAge.textContent;
    student.prof = studentProf.textContent;
    student.lang = nameLang;
    result.list.push(student);
});

/* Этап 3. Запись данных в результирующий объект */
console.log('result', result);