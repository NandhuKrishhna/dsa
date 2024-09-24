const reverseSentence = (s)=>{
    const words = s.split(" ");
    const stack =[];

    for(let items of words){
        stack.push(items)
    } 
    let reversedSentence = '';
    while(stack.length){
        reversedSentence += stack.pop() + " ";
    }

    return reversedSentence.trim()
}
console.log(reverseSentence("my name is chatgpt"));