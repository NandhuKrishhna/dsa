class HashTable {
    constructor(size = 10) {
        this.buckets = Array(size).fill(null).map(() => []);
        this.size = size;
        console.log(this.buckets, "buckets")
    }

    // Simple hash function (sum of char codes)
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    // Insert or update
    insert(key, value) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        // Check if key already exists
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value; // update value
                return;
            }
        }

        // Otherwise, insert new key-value pair
        bucket.push([key, value]);
        console.log(this.buckets, "buckets after insert")
        console.log(this.buckets[index], "buckets after insert index")
    }

    // Search for a value by key
    search(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let [k, v] of bucket) {
            if (k === key) return v;
        }
        return null;
    }

    // Delete a key-value pair
    delete(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1); // remove item
                return true;
            }
        }
        return false;
    }

    // Traverse all items
    traverse() {
        for (let i = 0; i < this.size; i++) {
            for (let [key, value] of this.buckets[i]) {
                console.log(`${key} → ${value}`);
            }
        }
    }
}
const ht = new HashTable();

ht.insert("apple", 10);
ht.insert("banana", 20);
ht.insert("grape", 30);
ht.insert("apple", 40);  // update existing key

console.log("Search apple:", ht.search("apple")); // 40

ht.delete("banana");

ht.traverse();
// Output:
// apple → 40
// grape → 30
