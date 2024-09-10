// reverseing an array 
const arr = [1,2,34,5,6,6,8];
const string = ['h','e','l','l','e'];
const name = "HelloWorld" // first split and then reverse and join

// const reverseArray = (arr)=> {
//     // two pointer methods
//     let left = 0 ;
//     let right = arr.length-1;

//     while (left< right){
//         [arr[left],arr[right]] =  [arr[right],arr[left]]
//         left++;
//         right--;
//     }
//     return arr
// }
// console.log(reverseArray(string));

//----------------------------------------------------------------\\

const reverseString=(str)=>{
    let arr = str.split('');
    let left = 0;
    let right = arr.length - 1;

   //same concept we used in the reverse of the array and then join
    while(left < right){
     [arr[left],arr[right]] =  [arr[right],arr[left]]
        left++;
        right--;
    }
     return arr.join("");

}
// console.log(reverseString(name));



//RECURSION METHOD
//  console.log(name.substr(1) + name.charAt(0));
