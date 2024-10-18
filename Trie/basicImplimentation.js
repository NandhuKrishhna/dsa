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

  startsWith(prefix) {
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

    if (depth === word.length) {
      if (!node.isEndOfWord) return false;
      node.isEndOfWord = false;
      return Object.keys(node.children).length === 0;
    }

    const char = word[depth];
    if (!this.deleteWord(node.children[char], word, depth + 1)) {
      return false;
    }

    delete node.children[char];
    return Object.keys(node.children).length === 0 && !node.isEndOfWord;
  }

  delete(word) {
    this.deleteWord(this.root, word);
  }

  getWords(node, prefix, result) {
    if (node.isEndOfWord) {
      result.push(prefix);
    }
    for (let char in node.children) {
      this.getWords(node.children[char], prefix + char, result);
    }
  }

  autoComplete(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }

    let result = [];
    this.getWords(node, prefix, result);
    return result;
  }

  printAllWords() {
    let result = [];
    this.getWords(this.root, "", result);
    return result;
  }
}

// Example usage:
let trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("apricot");
trie.insert("banana");
trie.insert("bat");
trie.insert("ball");

console.log("Search for 'app':", trie.search("app")); // true
console.log("Search for 'bat':", trie.search("bat")); // true
console.log("Search for 'cat':", trie.search("cat")); // false

console.log("Auto-complete 'ap':", trie.autoComplete("ap")); // ['apple', 'app', 'apricot']
console.log("Auto-complete 'ba':", trie.autoComplete("ba")); // ['banana', 'bat', 'ball']

trie.delete("bat");
console.log("Search for 'bat' after deletion:", trie.search("bat")); // false

console.log("Print all words:", trie.printAllWords()); // ['apple', 'app', 'apricot', 'banana', 'ball']
