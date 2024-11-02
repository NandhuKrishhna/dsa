const arr = [1,[2,[3,4],5],6]
console.log(arr[1]);
console.log(arr.length);

function reverse(arr){
  let left = 0, right = arr.length-1;
  while(left <right ){
    if(typeof(arr[left] ) === 'object' && arr[left] !== null){
         reverse(arr[left])
    }
    if(typeof(arr[right] )  === 'object'&& arr[right] !== null){
        reverse(arr[right])
    }
    [arr[left], arr[right]]=[arr[right], arr[left]]
    left++;
    right--

    if(left === right && typeof(arr[left] === 'object')){
        reverse(arr[left])
    }
}


   return arr
}

const result = reverse([[1, 2], [3, [4, 5]], 6])
console.log(result);
// const arr = [[1, 2], [3, [4, 5]], 6]
// // out - [6, [[5, 4], 3], [2, 1]]