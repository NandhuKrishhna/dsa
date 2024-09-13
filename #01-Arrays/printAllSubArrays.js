// // Find all Subarrays of an Array

// function printAllSubArrays(arr){
//   let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//       let subarr = [];
//       for (let j = i; j < arr.length; j++) {
//        subarr.push(arr[j])
//        count++;
//        console.log(subarr);
//       }
        
//     }
//     return count;
// }

// let arr = [1,2]
// console.log(printAllSubArrays(arr));
//---------------------------------------------------------------------------------------

//Returning all subarrys with sum == k//////////////////////////
// function printAllSubArrays(array,k){
//  let result = [];
//  for (let i = 0; i < array.length; i++) {
//  let sum = 0;
//  let subarr= [];
//  for (let j = i; j < array.length; j++) {
//   sum+=array[j]
//   subarr.push(array[j])
//   if(sum===k){
//     result.push([...subarr])
//   }
//  } 
//  }
//  return result
// }


// console.log(printAllSubArrays(arr,3));
//-----------------------------------------------------------------------------


// const sample = [2,1,3,4,4,4,4,5,6,7,7,8,9,];
// function newSet(arr){
//   let sum = new Set(arr)
//   let text = new Set()
//   let count = new Set(arr).size
//   console.log(sum);
//   console.log(text);
//   console.log(count);

// }

// newSet(sample)
///////////////////////////////////////////////////////////////////
// 2799. Count Complete Subarrays in an Array
// You are given an array nums consisting of positive integers.

// We call a subarray of an array complete if the following condition is satisfied:

// The number of distinct elements in the subarray is equal to the number of distinct elements in the whole array.
// Return the number of complete subarrays.

// A subarray is a contiguous non-empty part of an array.

// Example 1:

// Input: nums = [1,3,1,2,2]
// Output: 4
// Explanation: The complete subarrays are the following: [1,3,1,2], [1,3,1,2,2], [3,1,2] and [3,1,2,2].
// Example 2:

// Input: nums = [5,5,5,5]
// Output: 10
// Explanation: The array consists only of the integer 5, so any subarray is complete. The number of subarrays that we can choose is 10.


// function countCompleteSubarrays(nums) {
//   let totalDistinctCount = new Set(nums).size;
//   let count = 0;

//   for(let i=0; i < nums.length; i++){
//     let subArray  = new Set();
//     for(let j=i; j < nums.length; j++){
//         subArray.add(nums[j])
//         if(subArray.size === totalDistinctCount){
//           count++;
//         }
//     }
//   }
//   return count;
// };

// let nums1 = [1, 3, 1, 2, 2];
// console.log(countCompleteSubarrays(nums1));  
// let nums2 = [5, 5, 5, 5];
// console.log(countCompleteSubarrays(nums2)); 


///////////////////////////////////////////////////
//PRINT MAX SUB ARRAYS
function maxSubArraySum(){
  
}
