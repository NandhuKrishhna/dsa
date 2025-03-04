function reversedString(str){
  let reversed = '';
  for(let i = str.length-1; i>=0 ; i--){
      reversed += str[i]
  };
  return reversed;
}

function reversedStrings(input){
    let output = [];
    for (let i = 0; i < input.length; i++) {
         output.push(reversedString(input[i]))
    }
    return output;
}

const result = reversedStrings(['ab','cd'])
console.log(result);