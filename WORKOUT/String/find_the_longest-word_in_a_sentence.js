//* find the longest word in the sentence.
const word = "hello my name is nandhu krishna" //*output nandhu;

function findLongestWord(word) {

    const s = word.split(" ");
    let firstLongestWord = s[0];
    let secondLongestWord = firstLongestWord
    for (let i = 0; i < s.length; i++) {
        if (firstLongestWord.length < s[i].length) {
            secondLongestWord = firstLongestWord;
            firstLongestWord = s[i]
        }
        if (firstLongestWord.length > s[i].length
            && secondLongestWord.length < s[i].length
        ) {
            secondLongestWord = s[i]
        }
    }
    return {
        secondLongestWord: secondLongestWord,
        firstLongestWord: firstLongestWord
    }

}

console.log(findLongestWord(word))