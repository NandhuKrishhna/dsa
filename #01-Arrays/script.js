// Find the second largest number from the array
 const num1 = [1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2];
 

 const secondLargestNumberInArray = (arr)=> {
    let firstLargestNumber = -Infinity;
    let secondLargestNumber = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > firstLargestNumber){
            secondLargestNumber = firstLargestNumber
            firstLargestNumber = arr[i];
        }else if(arr[i]!=firstLargestNumber && secondLargestNumber<arr[i]){
            secondLargestNumber = arr[i];
        }

 }
return secondLargestNumber
}

console.log(secondLargestNumberInArray(num1));