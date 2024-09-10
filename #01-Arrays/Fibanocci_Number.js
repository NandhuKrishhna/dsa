//2 Fibonacci Number 
// Fibonacci Series -> 0,1,1,3,5,8,13,21,........
//  const fibanocciNumber = (n)=> {
//     let array = [0,1];
//     for (let i = 2; i <= n ; i++) {
//      array.push(array[i-2]+ array[i-1]);
//     }
//     return array[n], array
//  }
// console.log(fibanocciNumber(8));

const fibanocciNumberRecursion = (n)=>{
  if(n<=1) return n;
  return fibanocciNumberRecursion(n-2)+fibanocciNumberRecursion(n-1);
}
console.log(fibanocciNumberRecursion(8));