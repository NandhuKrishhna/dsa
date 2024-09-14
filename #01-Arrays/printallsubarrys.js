//Print all subArrays 
 let arr = [1,2,3,4,5,6,7]
 // Print all subarrays
  function printSubArrays(nums){
    let result = [];
    for (let i = 0; i < nums.length; i++) {
              let subArrays = [];
              for (let j = i; j < nums.length; j++) {
                  subArrays.push(nums[j]);
                  result.push([...subArrays])
              }


    }
    return result;
  }

console.log(
    
    printSubArrays(arr)
);
