// function bubbleSort(arr){
//     let  n = arr.length, swapped ;
    
//     for (let i = 0; i < n; i++) {
//         swapped = false;
//       for (let j = 0; j < n - 1 - i; j++) {
//         if(arr[j]> arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//             swapped = true;
//         }
//       } 
//       if(!swapped){
//         break;
//       } 
//     }
//     return arr

// }

let arr = [0,1,1,2,2,0]
// const result =  bubbleSort(array);
// console.log(result);


const bubblesort = (arr)=> {
    let n = arr.length-1, swapped ;
    for(let i = 0 ; i< n ; i++){
      swapped = false;
      for(let j = 0 ; j < n -1-i; j ++){
        if(arr[j]>arr[j+1]){
            [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            swapped = true
        }
      }
      if(!swapped) break;
    }
    return arr
}

console.log(bubblesort(arr));