const linerSearch = function(nums,val){
    let n = nums.length;
    for( let i = 0 ; i < n  ; i++){
        if(nums[i] === val){
            return i; 
        }
    }
    return -1
}

console.log(linerSearch([1],1));

const globalLinerSearch = function (nums,val){
    let result = new Array;
    for( let i = 0 ; i < nums.length ; i++){
        if(nums[i] === val){
            result.push(i)
        }
    }
    if(result.length === 0 ) return -1
    return result
    


}
console.log(globalLinerSearch([1,1,2,3,4,5,67,8,8,],8));