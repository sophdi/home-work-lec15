console.log('#1. Приклад домашнього завдання з JavaScript')

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
var myNum = 10
console.log('myNum:', myNum)
// ім'я змінної: myStr, значення: 'some string'
var myStr = 'some string'
console.log('myStr:', myStr)
// ім'я змінної: myBool, значення: true
var myBool = true
console.log('myBool:', myBool)
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
var myArr = [1, 2, 3, 4, 5]
console.log('myArr:', myArr)
// ім'я змінної myObj, значення: first: 'First Name', last: 'Last Name'
var myObj = {
    first: 'First Name',
    last: 'Last Name'
}
console.log('myObj:', myObj)

/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */

// decimal2
var decimal2 = myNum.toFixed(2)
console.log(decimal2) // 10.00

/*
 * #3
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

// i
var i = 1
console.log('Початкове i:', i); // 1

// Префіксний інкремент
console.log('++i =', ++i); // 2 (збільшує і повертає нове значення)

// Постфіксний інкремент
console.log('i++ =', i++); // 2 (повертає поточне значення, потім збільшує)
console.log('Після i++:', i); // 3

// Префіксний декремент
console.log('--i =', --i); // 2 (зменшує і повертає нове значення)

// Постфіксний декремент
console.log('i-- =', i--); // 2 (повертає поточне значення, потім зменшує)
console.log('Після i--:', i); // 1

/*
 * #4
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */

// myTest
var myTest = 20
console.log('Початкове myTest:', myTest); // 20
// +=
myTest += myNum;
console.log('myTest += myNum:', myTest); // 30 
// –=
myTest -= 5; 
console.log('myTest -= 5:', myTest); // 25
// *=
myTest *= 2;
console.log('myTest *= 2:', myTest); // 50
// /=
myTest /= myNum;
console.log('myTest /= myNum:', myTest); // 5
// %=
myTest %= 3;
console.log('myTest %= 3:', myTest); // 2 

/*
 * #5
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi
var myPi = Math.PI
console.log('Константа Pi:', myPi) // 3.141592653589793
// округлене значення числа 89.279 → myRound
var myRound = Math.round(89.279)
console.log('Округлене 89.279:', myRound) // 89
// випадкове число між 0..10 → myRandom
var myRandom = Math.floor(Math.random() * 11) 
console.log('Випадкове ціле число 0-10:', myRandom)

var myRandom2 = Math.random() * 10
console.log('Випадкове число 0-10:', myRandom2) 

// 3 у 5 степені → myPow
let myPow = Math.pow(3, 5)
console.log('3^5:', myPow) // 243

/*
 * #6
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

// Мама мыла раму, рама мыла маму
// strObj
var strObj = {
    str: 'Мама мыла раму, рама мыла маму',
    length: 'Мама мыла раму, рама мыла маму'.length
};
console.log(strObj);

/*
 * #7
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

// isRamaPos
var isRamaPos = strObj.str.indexOf('рама'); 
console.log('Індекс входження "рама":', isRamaPos); // 16

// isRama
var isRama = strObj.str.includes('рама');
console.log('Чи містить рядок "рама":', isRama); // true

/*
 * #8
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

// strReplace
var strReplace = strObj.str
.replace('мыла', 'моет')
.replace('рама', 'Рама')
.replace('мыла', 'держит');
console.log('Рядок після заміни: ', strReplace); // 'Мама моет раму, Рама держит маму'

/*
 * #9
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

// var someStr = 'some STRING'
var someStr = 'some STRING';
// var upperStr
var upperStr = someStr.toUpperCase();
console.log('Рядок у верхньому регістрі:', upperStr); // 'SOME STRING'
// var lowerStr
var lowerStr = upperStr.toLowerCase();
console.log('Рядок у нижньому регістрі:', lowerStr); // 'some string'
