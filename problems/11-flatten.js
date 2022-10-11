/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// function flatten(arr) {
//   if(arr.length === 0){return arr}
//   let newArr = []
//   for(let i = 0; i < arr.length; i++ ){
//     let el = arr[i]
//     if(typeof el === 'number'){
//       newArr.push(el)
//     }else {
//       newArr.push(...flatten(el))
//     }
//   }
//   return newArr
// }

function flatten(arr) {
  if(arr.length === 0){return arr}
  let newArr = []
  for(let i = 0; i < arr.length; i++ ){
    let el = arr[i]
    if(Array.isArray(el)){
      newArr.push(...flatten(el))
    }else {
      newArr.push(el)
    }
  }
  return newArr
}

console.log(flatten([1, [2, [3]]])); // [1, 2, 3])
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;














// function flatten(arr) {
//   if(arr.length === 0){return arr}
//   let newArr = []
//   for(let i = 0; i < arr.length; i++ ){
//     let el = arr[i]
//     if(Array.isArray(el)){
//       newArr.push(flatten(el))
//     }else {
//       newArr.push(el)
//     }
//   }
//   return newArr
// }
