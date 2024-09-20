function bubbleSort(arr){
    let  n = arr.length, swapped ;
    
    for (let i = 0; i < n; i++) {
        swapped = false;
      for (let j = 0; j < n - 1 - i; j++) {
        if(arr[j]> arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            swapped = true;
        }
      } 
      if(!swapped){
        break;
      } 
    }
    return arr

}

let array = [64, 34, 25, 12, 22, 11, 90];
const result =  bubbleSort(array);
console.log(result);