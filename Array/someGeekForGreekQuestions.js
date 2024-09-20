// function findThePeekNumber(arr){
//     let n = arr.length;

//     if(n>2){
//         for (let i = 1; i < n-1; i++) {
//          if(arr[i] >=arr[i-1] && arr[i]>=arr[i+1]){
//             console.log(arr[i]);
//          }            
//         }
//     }else{
//         console.log("There is no Peak Number");
//     }
// }


//Recursion>>>>>>>>>>>>>>>>>>>>>>

var xorOperation = function(n, start) {
    let result = 0; // XOR of all elements will be stored in this variable
    console.log(`Initial result: ${result}`);
    
    for (let i = 0; i < n; i++) {
        let currentElement = start + 2 * i; // Generate element
        console.log(`Element ${i}: ${currentElement}`);
        
        result = currentElement; // XOR current element with result
        console.log(`Result after XOR with ${currentElement}: ${result}`);
    }
    
    return result;
};

// Example call to see the output
console.log("Final Result:", xorOperation(5, 0));
