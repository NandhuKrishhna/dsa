class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }
  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }
  startWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }

  deleteWord(node, word, depth = 0) {
    if (!node) return false;

    console.log(`Visiting node for character: ${word[depth - 1] || 'root'}, depth: ${depth}`);

    // Base case: We've reached the end of the word
    if (depth === word.length) {
      if (!node.isEndOfWord) {
        console.log(`Word "${word}" not found at the end`);
        return false; // The word is not actually in the Trie
      }

      // Unmark the end of the word
      node.isEndOfWord = false;
      console.log(`Unmarking end of word for "${word}"`);

      // If the node has no children, it can be deleted
      return Object.keys(node.children).length === 0;
    }

    const char = word[depth];
    console.log(`Traversing character: "${char}"`);

    // Recursively delete from the children
    if (!this.deleteWord(node.children[char], word, depth + 1)) {
      console.log(`No deletion needed for character: "${char}"`);
      return false;
    }

    // Delete the current node's reference to this child
    console.log(`Deleting node for character: "${char}"`);
    delete node.children[char];

    // If the current node has no children and is not the end of another word, it can be deleted
    const shouldDeleteCurrentNode = Object.keys(node.children).length === 0 && !node.isEndOfWord;
    console.log(`Should delete current node for character: "${char}"? ${shouldDeleteCurrentNode}`);

    return shouldDeleteCurrentNode;
  }

  // Delete a word from the Trie
  delete(word) {
    console.log(`Starting to delete word: "${word}"`);
    this.deleteWord(this.root, word);
    console.log(`Finished deleting word: "${word}"\n`);
  }
  autocomplete(prefix){
    let node = this.root;
    for(let char of prefix){
        if(!node.children[char]){
            return [];
        }
        node = node.children[char];
    }
    let result = [];
    this.getWords(node, prefix, result)
    return result
  }
  getWords(node, prefix, result){
    if(node.isEndOfWord){
        result.push(prefix)
    }
    for(let char in node.children){
        this.getWords(node.children[char], prefix + char , result)
    }
  }
}


const trie = new Trie();
trie.insert("apple");
trie.insert("ap");

trie.insert("grapes");
trie.insert("banana");
console.log("Searching for apple : ", trie.search("apple"));
console.log("Searching for orange : ", trie.search("orange"));
console.log(trie.startWith("wapp"));
trie.delete('apple')
console.log(trie.search('banana'));
console.log(trie.autocomplete('ba'));
