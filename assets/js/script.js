// alert("salam")

//filter
// const data = [1, 2, 3, 4, 5];

// Array.prototype.myCustomFilter = function (fn) {
//   const filtered = []; 

//   for (let i = 0; i < this.length; i++) {
//     if (fn(this[i])) {
//       filtered.push(this[i]);
//     }
//   }

//   return filtered;
// };

// const filteredData = data.myCustomFilter(function (el) {
//   if (el > 2) return el;
// });


// console.log(filteredData); 
//----------------------------------------------

//reduce
// var a = [10, 21, 13, 56];

// function add(a, b) { return a + b }
// function foo(a, b) { return a.concat(b) }

// Array.prototype.reduce2 = function (f, result) {
//   var i = 0;
//   if (arguments.length < 2) {
//     i = 1;
//     result = this[0];
//   }
//   for(; i < this.length; i++) {
//     result = f(result, this[i], i, this);
//   }
//   return result;
// };
// console.log(a.reduce(add), a.reduce2(add))         // 100 100
//------------------------------------------------------------------------

//map
// Array.prototype.mymap = function(callback) {
//     const resultArray = [];
//     for (let index = 0; index < this.length; index++) {
//         resultArray.push(callback(this[index], index, this));
//     }
//     return resultArray;
// } 

//---------------------------------------------------------------------

function myForEach(array, callback) {
    for (let i = 0; i < this.length; i++) {
      callback(array[i]);
    }
  }
  
  function callback(element) {
    console.log(element); //insert logic
  }
  
  const array = [2, 4, 6, 8, 10];
  array.myForEach(array, callback(element));
// let numbers = [1, 2, 3];

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }

// console.log(sum);


//sum +
// const array = [1, 2, 3, 4];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log(sum);

//foreach +
// const numbers = [1, 2, 3, 4];
// let sum = 0;
// for (i = 0; i < numbers.length; i++) {
//     function myFunction(item, index, numbers) {
//         numbers[index] = item * 10;
    
//   } 
//   console.log(numbers[i]);
// }
//------





//forEach
// const items = ['item1', 'item2', 'item3'];
// const copyItems = [];

// // before
// for (let i = 0; i < items.length; i++) {
//   copyItems.push(items[i]);
// }
// console.log(items);

// // after
// items.forEach((item) => {
//   copyItems.push(item);
// });





// filter
// function destroyer(arr) {
//     var argArr = arr.slice.call(arguments, 1);
//     var filteredArray = arr.filter(function(val) {
//       for (var i = 0; i < argArr.length; i++) {
//           return val != argArr[i];
//       };
//     });
//     console.log(filteredArray);
//   }
  
//   destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// function generateTestArray() {
//     const result = [];
//     for (let i = 0; i < 1000000; ++i) {
//       result.push({
//         a: i,
//         b: i / 2,
//         r: 0,
//       });
//     }
//     return result;
//   }
//   console.log()                         