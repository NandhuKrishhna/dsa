const romanInterger = (s)=>{
    const hashMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;
    for (let i = 0; i < s.length; i++) {        
      if(hashMap[s[i]]< hashMap[s[i+1]]){
         result -= hashMap[s[i]]
      }else{
        result += hashMap[s[i]]

      }

    }
    return result
}

console.log(romanInterger("XIV"));
