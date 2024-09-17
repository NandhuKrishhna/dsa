// function* findThePeekNumber(arr){
//     let n = arr.length;

//     if(n>2){
//         for (let i = 1; i < n-1; i++) {
//          if(arr[i] >=arr[i-1] && arr[i]>=arr[i+1]){
//             yield arr[i];
//          }            
//         }
//     }else{
//         console.log("There is no Peak Number");
//     }
// }

// const result = findThePeekNumber([1,2,1,3,4,5,3])
// for(const res of result){
//     console.log(res);
// }
