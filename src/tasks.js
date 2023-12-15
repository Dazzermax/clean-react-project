/* Зачади расписаны по типу, условие - пример функции - результат выполнения */

/*
20. В функцию передается массив объектов как в примере. Необходимо вернуть из функции отсортированный массив
в возрастающем порядке по значению свойств val объектов массива, при этом в возвращаемом значении не должны
присутствовать объекты, которые имеют отрицательные значения val.

function sort(arr) {...}

const arr = [
    {id: 13, val: 5},
    {id: 5, val: -17},
    {id: 77, val: 98},
    {id: 24, val: 2},
]

console.log(sort(arr))
*/

/*
21. В функцию передается строка в которой находятся круглые скобки. Необходимо реализовать функцию так,
чтобы она  возвращала правду, если скобки парные (открывающие и закрывающие), а так же порядок открывающих
и закрывающих скобок верно соблюден.

function validParentheses(str) {...}

console.log(validParentheses('()')) // true
console.log(validPatentheses('())')) // false
console.log(validPatentheses('())(')) // false

*/

/*
22. Необходимо реализовать функцию, которая принимает массив и возвращает максимальное кол00во одинаковых элементов

function foo(arr) {...}

console.log(foo([0, 1, 3, 0, 0])) //3
console.log(foo([2, 13, 5, 9, 7])) // 1

*/

/*
23. В функцию передается число, напишите функцию по вычислению данного числа Фибоначчи

function fibo(num) {...}

console.log(fibo(3)) // 2
console.log(fibo(7)) // 13
*/

/*
24. В функцию передается массив и число. необходимо реализовать функцию так, чтобы из неё вовращался новый
массив циклически сдвинутых на количество шагов в параметре step. Если step отрицательное число, двигаем
влево, если step положительное число - вправо.

function moveArr(arr, step) {...}

console.log(moveArr([1, 2, 3, 4, 5], 2)) // [4, 5, 1, 2, 3]
console.log(moveArr([1, 2, 3, 4, 5], -2)) // [3, 4, 5, 1, 2]
*/

/*
25. В функцию getChars передается название города. Функция должна вернуть строку, которая показывает
какие буквы и количество содержится в строке.

function getChars(city) {...}

console.log(getChars('Саратов')) с:*.а:**.р:*.т:*.о:*.в:*
console.log(getChars('Новый Уренгой')) // н:**.о:**.в:*.ы:*.й:**.у:*.р:*.е:*.г:*
*/

/*
26. В функцию передается число, необходимо из функции вернуть максимальное число, содержащее те же цифры,
что и в переданном числе. Если было переданно некорректное число, вернуть NaN.

function getMax(num) {...}

console.log(getMax(6118)) // 8611
console.log(getMax(17.5)) // 751
console.log(getMax('Привет')) // NaN

*/

/*
27. В функцию передается строка, в которой содержатся буквы/цифры и может содержаться знак '#'. Этот знак
означает, что человек нажал backspace, то есть стер предыдущий знак, необходимо собрать получивщуюся строку.

function cleanString(s) {...}

console.log(cleanString('Прив###ока')); // Пока

*/

/*
28. В функцию передается массив, в котором записаны целые числа в возрастающем порядке. Все числа в массиве
должны возрастать на единицу, однако есть нарушения последовательости и некоторые числа возрастают на больше
значение, необходимо найти все числа и их индексы, которые нарушают последовательность.

function foo(array) {...}

console.log(foo([1,2,3,4,6,7,8,10,11])); // [{i: 4, n: 6},{i: 7, n: 10}]

*/

/*
29. Необходимоо реализовать функцию, которая принимает массив чисел и возвращает сумму двух самых маленьких чисел
в массиве. Методы массивов использовать запрещено.

function sumSmallest(array) {...}

console.log(sumSmallest([15, 28, 4, 2, 43])); // 6
console.log(sumSmallest([5, 8, 12, 19, 22])); // 13

*/

/*
30. Неободимо реализовать функцию так, чтобы она возвращала строку "неверная строка", в случае если в функцию
была передана строка с одним символом или меньше, либо если символов в строке больше 100. В случае если
количество символов находится в диапазоне (1, 100), необходимо вернуть массив, в котором будут записаны
все четные символы строки.

function getEvenChars(str) {...}

console.log(getEnevChars("abcdefghijklm")) ['b', 'd', 'f', 'h', 'j', 'l']
console.log(getEnevChars("a")) // 'неверная строка'

*/


/*
31. Напишите функцию которая вернет true, в случае если переданное в функцию число простое, иначе false.

function isPrime(num) {...}

console.log(isPrime(12))
console.log(isPrime(23))
*/

/*
32. В функцию передается массив со значениями времени в которые звенит будильник.
Будильник звенит ровно одну минуту, необходимо ныйти самый большой промежуток времени,
когда будильник звенеть не будет.

*/

/*
33. Реализовать функцию, которая возвращает ближайшее простое число. На вход функцию принимает целое чисило,
рядом с которым нужно найти ближайшее значение простого числа. Если разница между значениями равна, выбрать
меньшее найденное значение.

function findPrimeNumber(num) {...}

console.log(findPrimeNumber(3)) // 3
console.log(findPrimeNumber(11)) // 11
console.log(findPrimeNumber(125)) // 127
console.log(findPrimeNumber(110)) // 109
*/

/*
34. Напишите функцию, которая находит все элементы массива arr, равные item и возвращает новый массив,
в котором на месте найденных значений стоит replaceItem

function replaceItems(arr, item, replaceItem) {...}

console.log(replaceItems([1,2,3,4,2], 2, 'a')) [1,'a',3,4,'a']
*/

/*
35. Дан массив вида `[1,2, [3,4,[5]], 6, 7, [[8]]]`, необходимо получить массив без вложенных массивов,
то есть: `[1,2,3,4,5,6,7,8]`


function flatArr(arr) {...}

console.log(flatArr([1,2, [3,4,[5]], 6, 7, [[8]]]));
*/

/*
36. Необходимо реализовать функцию, которая вернет сжатую строку в формате букваЦифра, как в примере.

function getCompressedString(str) {...}

console.log(getCompressedString('aaAaBbBbDFFFff')); // 'a4b4d1f5
*/

/*
37. Реализовать функцию так, чтобы она врзвращала массив, состоящих из тех же элементов что переданный, но
отсортированный таким образом, чтоб в начале шли элементы которые меньше числа k, в остальном порядок
должен быть тот же.

function splitByValue(k, elements) {...}

console.log(splitByValue(5, [1,3,5,7,6,4,2])) // [1,3,4,2,5,7,6]
console.log(splitByValue(0, [5,2,7,3,2])) // [5,2,7,3,2]
*/

/*
38. Напишите алгоритм, который берет массив и перемещает всенули в конец, сохраняя порядок других элементов.

function moveZero(arr) {...}

console.log(moveZero([false, 1, 0, 1, 2, 0, 1, 3, "a"])) // [false, 1, 1, 2, 1, 3, "a", 0, 0]
*/

/*
39. Дано число n, вернуть количество положительных нечетных чисел меньше n.

function oddCount(n) {...}

console.log(oddCount(7)) // 3 - [1, 3, 5]
console.log(oddCount(15)) // 7 - [1, 3, 5, 7, 9, 11, 13]
*/

/*
40. Реализовать функцию так, чтобы она возвращала массив в 100 элементов, заполненный случайными
натуральными числами от 1 до 200, так чтобы она не повторялись

function getRandomArr() {...}

console.log(getRandomArr());

*/

/*
41. В функцию передается массив целых чисел, найдите, содержит ли массив какие-либо повторяющиеся элементы.
Функция должна возвращать истину, если какое-либо значение появляется в массиве не менее двух раз, и ложь,
если каждый элемент отличается.

function existsDuplicate(numbers) {...}

console.log(existsDuplicate([4,6,7,7,1])) // true
console.log(existsDuplicate([7,1,5,4,2,10])) // false

*/

/*
42. Расширьте прототип / класс Array функцией, возвращающей все элементы этого массива, кроме тех,
у которых индексы переданы в параметре. Функция должна принимать в качестве параметров массив
или одно целое число

const array = ['a', 'b', 'c', 'd', 'e']

console.log(array.except([1,3])); // ['a', 'c', 'e']
console.log(array.except([1])); // ['a', 'c', 'd', 'e']

*/

/*
43. Дан объект со свойствами без значений
abc: undefined
arara: undefined
xyz: undefined

Верните ноый объект, у которого есть свойства с его зеркальными ключом!
abc: cba
arara: arara
xyz: zyx

const mirror = obj => {...}

console.log(mirror({
    abc: undefined,
    hello: undefined
})); // {abc: 'cba', hello: 'olleh'}

*/

/*
44. В функцию передается дистанция, которую должен проехать человек, вторым параметром передается дистанция после
которой необходимо сделать оставновку. Необходимо вывести лог всего пути внутри функции, как в примере.

function realizeDistance(distance, stopAfter) {...}

console.log(realizeDistance(100, 150));
    - Вы проехали 100 метров и доехали до точки


console.log(realizeDistance(1000, 300));

    - Остановка №1. Вы проехали 300 метров
    - Остановка №2. Вы проехали 600 метров
    - Остановка №3. Вы проехали 900 метров
    - Вы проехали еще 100 метров и доехали до точки

*/

/*
45. Дан массив возрастов в семье, вернуть массив с возрастом самого младшего, самого старшего и разницу между ними.

function differenceInAges(ages) {...}

console.log(differenceInAges([82, 15, 6, 38, 35])); // [6,82,76]
console.log(differenceInAges([57, 99, 14, 32])); // [14, 99, 85]

*/

/*
46. Подсчитайте количество вхождений каждого символа и верните его в виде списка массивов в порядке появления.
Для пустого вывода верните пустой список.

function foo(text) {...}

console.log(foo('abracadabra')); // [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

*/

/*
47. Напишите функцию, которая объединяет два массива, поочередно выбирая элементы из каждого массива.
Массивы могут иметь разную длину.

function mergeArray(a, b) {...}

console.log(mergeArray([1,2,3,4,5,6,7,8], ['a', 'b', 'c', 'd', 'e']));

*/

/*
48. Учитывая строку в качесве входных данных, переместите все ее гласные в конец строки в том же порядке.

function moveVowel(input) {...}

console.log(moveVowel('apple')); // pplae
console.log(moveVowel('peace')); // pceae

*/

/*
49. Напишите функцию, которая принимает рецепт (объект) и доступные ингредиенты (также объект) и возвращает
максимальное количество пирожных, которое можно испечь (целое число). Для простоты не существует единиц
измерения количества. Ингредиенты, которых нет в предметах, можно рассматривать как 0.

function cakes(recipe, ingredients) {...}

console.log(
    {flour: 500, sugar: 200, eggs: 1},
    {flour: 1200, sugar: 1200, eggs: 5, milk: 200}   // 2
)

console.log(
    {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100},
    {apples: 500, flour: 2000, milk: 2000}   // 0
)

*/

/*
50. В функцию передается строка и массив положительных чисел, необходимо реализовать функцию так,
чтобы она возвращала новую строку, в которой будут содержаться те же самые буквы, что и в
переданной строке, но в другой последовательности, последовательность указана в массиве arr
в виде индексов букв str.

function restoreString(str, arr) {...}

console.log(restoreString("домик", [4, 1, 0, 3, 2])) // кодим
console.log(restoreString("украл", [1, 4, 3, 2, 0])) // клару

*/

/*
51. Необходимо реализовать функцию, которая принимает первым аргументом разделитель строк, следующие - сами
строки. Вернуть единую строку, в которой бы стояли все переданные строки, между которыми стоял бы
разделитель.

function createString() {...}

console.log(createString('*', '55', 'привет' , 'убубубу')) // 55*привет*убубубу

*/

/*
52. Необходимо написать скрипт, который будет выводить в консоль время каждую секунду.
Формат вывода: "20:05:01"

*/

/*
53. Реализовать функцию, куда передается массив со строками. Необходимо реализовать функцию так, чтобы
она возвращала новый массив с теми же строками, в том же порядке из которого убраны все дубликаты.
Set и Map использовать запрещено.


function removeDuplicate(arr) {...}

console.log(removeDuplicate([
    'string',
    '3',
    '0',
    'string',
    'string',
    'number',
    'number',
    '3',
    'constructor',
    '0'
])); ['string', '3', '0', 'number', 'constructor']

*/

/*
54. Две команды, А и Б, играют в футбол. Некто делает свю ставку на результат матча,
например "1:2". По окончании матча становится известен настоящий счет, и нам надо выдать
тот или иной приз. Если некто угалад точный счет - он получает большой приз. Если некто
угадал исход матча - он получает маленький приз. Если же он не угадал - он получает нулевой приз.
Необходимо написать функцию которая принимает в качестве аргументов предполагаемый счёт и
реальный счёт, и возвращает целое число 0, 1 или 2.

function getPrize(guessScore, realScore) {...}

console.log(getPrize('1:2', '1:2)) // 2
console.log(getPrize('2:1', '5:0)) // 1
console.log(getPrize('3:0', '2:2)) // 0

*/

/*
55. Дан массив, содержащий объект с именами.
Нужно вернуть строку, отформатированную в виде списка имен, разделенных запятыми, за исключением двух
последних имен, которые должны быть разделены амперсандом.

function list(names) {...}

console.log(list([{name:'Bart'}])) // Bart
console.log(list([{name:'Bart'}, {name: 'Lisa'}])) // Bart & Lisa
console.log(list([{name:'Bart'}, {name: 'Lisa'}, {name: 'Maggie'},])) // Bart, Lisa & Maggie

*/

/*
56. Реализовать функцию, которая добавляет слева к строке пробелы. Функция принимает два аргумента:
число, обозначающее минимальную длину результата, и строку, которую нужно дополнить, если её длина меньше.

function leftPad(symbolCount, str) {...}

console.log(leftPad(6, 'test'));

*/

/*
57. Необходимо реализовать функцию accum, которая принимает строку, а возвращает другую строку,
как показано в примерах

RqaEzty -   R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy
abcd    -   A-Bb-Ccc-Dddd
cwAt    -   C-Ww-Aaa-Tttt



function objCreator(str) {...}

console.log(objCreator('abcd'));
console.log(objCreator('RqaEzty'));
console.log(objCreator('cwAt'));


/*
58. Необоходимо реализовать функцию, которая будет складывать все цифры в числе, пока не останется
лишь одна какаято цифра

5 => 5

57 => 5 + 7 = 12
      1 + 2 = 3
      3

function digitsSum(value) {...}

*/

/*
59. Доминантные элементы массива.
Доминантным является элемент массива, который больше, чем все элементы, следующие за ним.
Напишите функцию, которая принимает массив чисел и возвращает массив из доминантных чисел.

function solve(array) {...}

console.log(solve([16,17,14,3,14,5,2])); // [17,14,5,2]
console.log(solve([92,52,93,31,89,87,77,105])); // [105]
console.log(solve([75,47,42,56,13,55])); // [75,56,55]
*/

/*
60. В функцию передается число и отсортированный по возрастанию массив.
Функция должна вернуть сумму двух индексов массива, элементы которых в сумме
дают число переданное первым аргументом

function findIndexSum(val, arr) {...}

const arr = [2,5,8,9,22,57,94,100,127,198,345,451]

console.log(findIndexSum(79, arr)); // 4 + 5 = 9
console.log(findIndexSum(70, arr)); // -1

*/