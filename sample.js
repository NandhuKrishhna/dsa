function sortArray(arr){
     let low = 0, mid = 0, high = arr.length-1;
     while(mid<=high){
        if(arr[mid] === 0){
          [arr[low], arr[mid]]=[arr[mid],arr[low]];
          low++;
          mid++;
        }else if(arr[mid] === 1){
          mid++;
        }else{
         [arr[mid],arr[high]]=[arr[high],arr[mid]];
         high--;
        }
     }
     return arr
}
console.log(sortArray([0, 1, 2, 1, 0, 2, 1, 0, 2, 1]));
