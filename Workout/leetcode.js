function sample(arr){
    let newArray = [...arr]
    let i = 0;
    let j = arr.length-1;
    let current 
    if(arr[i]>=arr[j]){
        current = newArray.sort((a,b) => b - a)
        console.log(current);
        console.log(arr);
    }else{
        current = newArray.sort((a,b) => a - b)
        console.log(current);
        console.log(arr);
    }
    for(let i = 0; i < arr.length ; i++){
        console.log(`comparing ${arr[i]} && ${current[i]}`)
        if(arr[i] !== current[i]) return false;
        }
        return true
}

const arr = [1,2,3,5,3,6];
const arr1 = [6,5,3,2,1];
const result = sample(arr)
const result1 = sample(arr1);
console.log(result1);
console.log(result);
