// rotate array by k steps

// const rotateArray = (arr, k)=> {
//     let size = arr.length;

//     if(size > k ){
//         k = k % size;
//     }

//     const rotate = arr.splice(size-k, size)
//     arr.unshift(...rotate)
//     return arr
// }

// console.log(rotateArray([1,2,3,4,5,6,7], 4));