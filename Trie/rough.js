class TrieNode {
    constructor() {
        this.children = {}; // Store children nodes
        this.isEndOfWord = false; // Check if it's the end of a word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word into the Trie
    insert(word) {
        let node = this.root;
        console.log(`Inserting: ${word}`);
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
                console.log(`Creating node for '${char}'`);
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
        console.log(`'${word}' inserted successfully.\n`);
    }

    // Search for a word in the Trie
    search(word) {
        let node = this.root;
        console.log(`Searching: ${word}`);
        for (let char of word) {
            if (!node.children[char]) {
                console.log(`'${word}' not found!`);
                return false;
            }
            node = node.children[char];
        }
        console.log(`'${word}' ${node.isEndOfWord ? "found!" : "not found as a complete word!"}`);
        return node.isEndOfWord;
    }

    // Delete a word from the Trie
    delete(word) {
        console.log(`Deleting: ${word}`);
        if (this._deleteHelper(this.root, word, 0)) {
            console.log(`'${word}' deleted successfully.\n`);
        } else {
            console.log(`'${word}' not found in Trie.\n`);
        }
    }

    _deleteHelper(node, word, index) {
        if (index === word.length) {
            if (!node.isEndOfWord) return false; // Word not found
            node.isEndOfWord = false;
            return Object.keys(node.children).length === 0; // If no children, delete the node
        }
        const char = word[index];
        if (!node.children[char]) return false; // Word not found

        const shouldDeleteChild = this._deleteHelper(node.children[char], word, index + 1);

        if (shouldDeleteChild) {
            delete node.children[char]; // Delete the reference to child node
            return Object.keys(node.children).length === 0;
        }
        return false;
    }

    // Autocomplete suggestions based on prefix
    autocomplete(prefix) {
        let node = this.root;
        console.log(`Finding completions for prefix: '${prefix}'`);
        for (let char of prefix) {
            if (!node.children[char]) {
                console.log(`No words found with prefix: '${prefix}'`);
                return [];
            }
            node = node.children[char];
        }
        const suggestions = [];
        this._findAllWords(node, prefix, suggestions);
        console.log(`Suggestions for '${prefix}':`, suggestions, '\n');
        return suggestions;
    }

    _findAllWords(node, prefix, suggestions) {
        if (node.isEndOfWord) suggestions.push(prefix);
        for (let char in node.children) {
            this._findAllWords(node.children[char], prefix + char, suggestions);
        }
    }
    printAllWords() {
        console.log("All words in the Trie:");
        const words = [];
        this._findAllWords(this.root, "", words);
        console.log(words);
        return words;
    }
}

// Example usage
const trie = new Trie();

trie.insert("apple");
trie.insert("app");
trie.insert("ape");
trie.insert("bat");
trie.insert("ball");
trie.insert("banana");

trie.search("app");   // Found
trie.search("bat");   // Found
trie.search("cat");   // Not found

trie.autocomplete("ap"); // ["app", "apple", "ape"]
trie.autocomplete("ba"); // ["bat", "ball", "banana"]

trie.delete("bat");   // Delete "bat"
trie.search("bat");   // Not found after deletion

trie.autocomplete("ba"); // ["ball", "banana"]
trie.printAllWords(); 