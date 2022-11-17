const field = document.querySelector('#field');
const message = document.querySelector('#message');
const playBtn = document.querySelector('#play')

let usedCities = [];






playBtn.addEventListener('click', function() {
    let fieldView = field.value;
    let lastWordInArray = usedCities[usedCities.length - 1]

    if(!usedCities[0] || !usedCities.includes(fieldView) && lastWordInArray[lastWordInArray.length - 1] === fieldView[0]) {
        usedCities.push(fieldView)

    }

    console.log(usedCities)
    
})


















// // const square = document.querySelector('.black-square');
// // const button1 = document.querySelector('#button-one');
// // const button2 = document.querySelector('#button-two');
// // const button3 = document.querySelector('#button-three');
// // const main = document.querySelector('#main-container');


// // // Button 1
// // button1.addEventListener('click', () => square.classList.add('square-modificator'));

// // // Button 2

// // button2.addEventListener('click', () => square.classList.remove('square-modificator'));

// // // Button 3
// // button3.addEventListener('click', () => square.classList.toggle('square-modificator'));



// // // =======================PROBLEM 2 =========================================

// // function isPrime(num) { // returns boolean
// //     if (num <= 1) return false; // negatives
// //     if (num % 2 == 0 && num > 2) return false; // even numbers
// //     const s = Math.sqrt(num); // store the square to loop faster
// //     for(let i = 3; i <= s; i += 2) { // start from 3, stop at the square, increment in twos
// //         if(num % i === 0) return false; // modulo shows a divisor was found
// //     }
// //     return true;
// //   }
// //   console.log(isPrime(31));



// // ===========================PROBLEM 3 =============================================

// let letters = ["h", "e", "l", "g", "o"]



// // function myFunction(array) {
  
// // //    const forCondition = array.length % 2 === 0 ? array.length : array.length - 1

    
  
// // //     for (i=0; i < forCondition; i+=2) {
// // //  const fromIndex = array.splice(i, 1)
// // //  array.splice(i+1, 0, fromIndex[0])
// // //   }
// // // }
// // // myFunction(letters)
// // }
// // console.log(fromIindex)

// function swap2Chars(array) {

//     const forCondition = array.length % 2 === 0 ? array.length : array.length - 1

//     for (let i = 0; i < forCondition; i += 2) {
//       let temp = array[i];
//       console.log(temp)
//       array[i] = array[i + 1];
//       console.log(array)
//       array[i + 1] = temp;
//       // [array[i + 1], array[i]] = [array[i], array[i + 1]];
//       console.log(array[i])
      
//     }
//     return array;
//   }

//   swap2Chars(letters)