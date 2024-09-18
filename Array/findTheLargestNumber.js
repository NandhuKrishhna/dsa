function largestNumber(nums){

  function compare(a,b){
    let o1 = a + b,
    o2 = b + a;
    if(o1 > o2) return -1;
    else if(o2 > o1) return 1;
    else return 0
  }

  let str = nums.map(String);
  let n = nums.length;

  for(let i = 0 ; i < n - 1 ; i++){
    for(let j= i + 1 ; j < n  ; j++){
      if(compare(str[i], str[j])>0){
        [str[i], str[j]] = [str[j], str[i]]
      }

    }

  }
  return str.join("")
}
console.log(largestNumber([3,4,5,6,83,9]));