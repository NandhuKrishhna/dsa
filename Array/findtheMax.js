
// function findMinAndMax(arr){
//     arr.sort((a,b)=> a-b)
//     return {min: arr[0], max:arr[arr.length -1]};
// }

// const {min,max} = findMinAndMax(arr);
// console.log(min,max)

// function getMin(arr,i, n){
//     return (n==1)? arr[i] : Math.min(arr[i],getMin(arr,i+1,n-1))
// }


// function getMax(arr,i, n){
//     return (n==1)? arr[i] : Math.max(arr[i],getMax(arr,i+1,n-1))
// }

// console.log(getMin(arr,0,n));
// console.log(getMax(arr,0,n));
const arr = [1, 423, 6, 46, 34, 23, 13, 53, 4];
let n = arr.length
function getMin(arr,n){
    let res = arr[0];
    for(let i = 1 ; i < n-1 ; i++){
        res = Math.min(res,arr[i])
        return res;
    }
}

function getMax(arr,n){
    let res = arr[0];
    for(let i = 1 ; i < n-1 ; i++){
        res = Math.max(res,arr[i])
        return res;
    }
}

console.log(getMin(arr,n));
console.log(getMax(arr,n));