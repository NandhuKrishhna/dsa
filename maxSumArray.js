// Kadane's algorithm
  //[1,2,3-4,-2,4,-3,-1,7,-9]
function maxSumArray(nums){
   let sum = 0;
   let max = nums[0];

   for (let i = 0; i < nums.length; i++) {
       sum+=nums[i]; 
       if(sum>max){
        max=sum
       }
       if(sum<0){
        sum=0
       }   
   }
   return max
}
console.log(maxSumArray([1,2,3-4,-2,4]));