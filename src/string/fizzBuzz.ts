/*
9. Напишите функцию, которая выводит на экран числа от 1 до 100. При этом вместо чисел, кратным трем, программа
должна выводить слово, "Fizz", а вместо чисел, кратных пяти - слово "Buzz". Если число кратно и 3, и 5,
то программа должна выводить слово "FizzBuzz"

*/

// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 ===0) {
//             console.log('FizzBuzz')
//         } else if (i % 3 === 0) {
//             console.log('Fizz')
//         } else if (i % 5 === 0) {
//             console.log('Buzz')
//         } else {
//             console.log(i)
//         }
//     }
// }


// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//          let output = i % 3 === 0 ? 'Fizz': '' + i % 5 === 0 ? 'Buzz': ''
//          console.log(output || i)
//     }
//  }
 
//  fizzBuzz()