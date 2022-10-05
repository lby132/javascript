
// const array = ['🍌', '🍓', '🍇', '🍓'];
// const arr = Array.from(array);
// array.forEach((el, num) => {
//     if(arr[from] === '🍓') {
//         arr[from] = '🥝';
//     }
// });
// console.log(arr);

// const count = ['🍌', '🥝', '🍇', '🥝'];
// let cn = 0;
// count.forEach(function(a){
//     if (a === '🥝') cn++;
// });
// console.log(cn);


// function match(input, search) {
//     const result = [];
//     for (let i = 0; i < input.length; i++) {
//       if (search.includes(input[i])) {
//         result.push(input[i]);
//       }
//     }
//     return result;
//   }
//   console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));


// const arr1 = ['🍌', '🥝', '🍇'];
// const arr2 = ['🍌', '🍓', '🍇', '🍓'];
// const result = [];
// arr1.forEach((ee) => {
//     arr2.forEach((el) => {
//         if(el.includes(ee)) {
//             result.push(el);
//         }
//         return result;
//     });
// });

// console.log(result);
// console.clear();
// arr2.forEach((el) => {
//     arr1.flatMap((a) => {
//         if(el.includes(a)) {
//             result.push(el);
//         }
//         return result;
//     });
// });

// console.log(result);


// const nums = [3,16,5,25,4,34,21];
// const comp = nums.filter((n) => 5 < n);
// const hub = comp.reduce((sum, value) => {
//     sum += value
//     return sum;
// });
// console.log(hub/4);