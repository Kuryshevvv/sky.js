function remember() {
        var arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    shuffle(arr);
    function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
    }
    alert(arr);
    let userAnswer = prompt("Введите пожалуйста первое слово");
    (userAnswer == arr[0]) ? true : false;
    let userAnswerOne = prompt("Введите пожалуйста последнее слово");
    (userAnswerOne == arr[6]) ? true : false;
    if (userAnswerOne == arr[6] && userAnswer == arr[0]) {
    alert("Поздравляем, вы выиграли!!")
    } else if (userAnswerOne == arr[6] || userAnswer == arr[0]) {
    alert("Вы были близки к победе!!")
    } else {
    alert("Вы проиграли!!")
    }
}


function season () {
    let result =  window.prompt ("Введите номер месяца");
    switch (result) {
    case '1':
    alert('Зима');
    break;
    case '2':
    alert('Зима');
    break;
    case '3':
    alert('Весна');
    break;
    case '4':
    alert('Весна');
    break;
    case '5':
    alert('Весна');
    break;
    case '6':
    alert('Лето');
    break;
    case '7':
    alert('Лето');
    break;
    case '8':
    alert('Лето');
    break;
    case '9':
    alert('Осень');
    break;
    case '10':
    alert('Осень');
    break;
    case '11':
    alert('Осень');
    break;
    case '12':
    alert('Зима');
    break;
    default : alert ("Вы живете не на Земле?");
    }
}


//     let i = 0;
// const riddle = {
// question : 'I am round like an apple. Flat as a chip .I have eyes. But I can’t see one bit',
// answer : 'button',
// askRiddle () {
// 	  block : {
//     do {
//   let userAnswer = prompt(this.question );
//    if (this.answer === userAnswer) {
//   	alert ('Угадал!');
//     break block;
//   } else {
//  		alert ('Первая буква - b');
//   } i++
//   } while(i < 3);
//  alert ('Вы проиграли. Повезет в другой раз!!!')
//   }
// }
// }
function riddle() {
    const puzzle = {
  question: 'Целый день летает, всем надоедает, ночь настаёт, тогда перестаёт.',
  help: ['это насекомое', '4 буквы'],
  answer: 'муха',
  askQuestion() {
    let userAnswer = prompt(this.question);
    if (this.answer === userAnswer) {
      alert('Угадал!')
    } else {
      if (this.help.length) {
        alert(`Не угадал!\nПодсказка: ${this.help.splice(0, 1)}`);
        puzzle.askQuestion();
      } else {
        alert('Не угадал!');
      }
    }
  }
}
puzzle.askQuestion();
}


