function findMin(arr){
    let left = 0;
    let right = arr.length-1;

    while(left < right){
        let sum = left + right
        let mid = Math.floor(sum/2);
        if(arr[mid]>arr[right]){
            left = mid+1
        }else{
            right = mid;
        }
    }
    return arr[left]
}
console.log(findMin([4,5,6,7,0,1,2,3]));