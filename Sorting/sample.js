// function mergeSort(arr) {
//     if (arr.length <= 1) {
//         console.log("Base case reached with:", arr);
//         return arr;
//     }

//     const mid = Math.floor(arr.length / 2);
//     console.log("Splitting array:", arr, "into", arr.slice(0, mid), "and", arr.slice(mid));

//     const left = mergeSort(arr.slice(0, mid));
//     const right = mergeSort(arr.slice(mid));

//     console.log("Merging:", left, "and", right);
//     return merge(left, right);
// }

// function merge(left, right) {
//     let result = [];
//     let i = 0, j = 0;

//     while (i < left.length && j < right.length) {
//         if (left[i][0] < right[j][0]) {
//             console.log("Taking element from left:", left[i]);
//             result.push(left[i]);
//             i++;
//         } else {
//             console.log("Taking element from right:", right[j]);
//             result.push(right[j]);
//             j++;
//         }
//     }

//     // Collect remaining elements
//     while (i < left.length) {
//         console.log("Taking remaining element from left:", left[i]);
//         result.push(left[i++]);
//     }
//     while (j < right.length) {
//         console.log("Taking remaining element from right:", right[j]);
//         result.push(right[j++]);
//     }

//     console.log("Merged result:", result);
//     return result;
// }


// console.log("Intial Array :", arr);
// const result = mergeSort(arr);
// console.log(result);

function mergerSort(arr){
    let n = arr.length;
    if(n <=1 ) return arr;

    let mid = Math.floor(n/2);
    let left = mergerSort(arr.slice(0,mid));
    let right = mergerSort(arr.slice(mid));

    return merge(left,right);
}

function merge(left,right){
    let result = [];
    let i = 0 , j = 0;

    while(i < left.length && j < right.length){
        if(left[i][0]<right[j][0]){
            result.push(left[i]);
            i++;
        }else{
            result.push(right[j]);
            j++;
        }
    }
    while(i < left.length){
        result.push(left[i]);
        i++;
    }
    while(j < right.length){
        result.push(right[j]);
        j++;
    }

    return result
}
let arr = [[2,6],[1,3], [15,18] , [8,10]];
const result =  mergerSort(arr);
console.log(result);