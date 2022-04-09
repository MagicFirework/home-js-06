"use strict";
let min = Math.ceil(1);
let max = Math.floor(100);

var number = Math.floor(Math.random() * (max - min)) + min;
console.log(number);

function start() {
  while (true) {
    let userNumber = prompt("Угадай число от 1 до 100");
    console.log(typeof parseInt(userNumber));

    if (isNaN(userNumber)) {
      alert("Введи число!");
      continue;
    }

    if (userNumber === null) {
      alert("Игра окончена");
      break;
    }

    if (parseInt(userNumber) === number) {
      alert("Поздравляю, Вы угадали!!!");
      break;
    } else if (parseInt(userNumber) < number) {
      alert("Загаданное число больше");
    } else if (parseInt(userNumber) > number) {
      alert("Загаданное число меньше");
    }
  }
}

start();
