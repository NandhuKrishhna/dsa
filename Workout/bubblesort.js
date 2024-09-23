//Question 1)
const bubbleSort = function(arr){
    let n = arr.length, swapped
    for(let i = 0 ; i< n -1 ; i++){
        swapped = false;
        for(let j = 0 ; j < n -1-i ; j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                swapped = true;
            }
        }
    }
    return arr
}
let arr = [4,5,4,2,67,3,1,9]
const result  = bubbleSort(arr);
console.log(result);
