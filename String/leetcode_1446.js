const maxPower = (s)=>{
    let maxPower = 1, currentPower = 1;
    for (let i = 1; i < s.length; i++) {
       if(s[i]==s[i-1]){
         currentPower++;
         maxPower = Math.max(maxPower,currentPower)
       }else{
        currentPower = 1
       }
    }
    return maxPower;
}
const sample = maxPower("leetcode")
console.log(sample);