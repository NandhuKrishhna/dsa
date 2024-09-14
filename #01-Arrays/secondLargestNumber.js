let arr = [1,2,3,4,5,6,7,8,9]


function secondLargestNumber(nums){
    let uniqueArray = Array.from(new Set(nums))
    uniqueArray.sort((a,b) => b -a)
    if(uniqueArray.length >= 2 ){
        return uniqueArray[1]
    }else{
        return -1
    }
}
console.log(secondLargestNumber(arr));