//1. You get an array of numbers, return the sum of all numbers.
// Example [1,7,12] => 1 + 7 + 12 = 20
// [10,5,9,13,1]

// 2. create a function that removes the first and last characters of a string
// 'Hello, World!'

// 3. Create a function that checks if a user's input is a capitol city of Australia
const h1 = document.querySelector('#h1');
const input = document.querySelector('#input');
const button= document.querySelector('#button');

const array = [];
console.log('array start: ', array);

function findAverage(parameter) {
  array.push(Number(parameter));
  
  let result = 0;
  
  for (let i = 0; i < array.length; i++) { 
    result = result + array[i];
  }
  
  return result / array.length;
};

button.addEventListener('click', function() {
  h1.innerHTML = findAverage(input.value);
});



// 4. Given a list of users, check they are all over 18
// [18,21,15,30,60,2]

// 5. find the average of an array
// 


