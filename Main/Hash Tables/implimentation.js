class HashTable {
    constructor(size) {
        this.table = new Array(size);
        console.log(this.table, "table")
        this.size = size
    }
    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, val) {
        const index = this.hash(key)
        this.table[index] = val
    }
    get(val) {
        const index = this.hash(key)
        return this.total[index];
    }
    remove(key) {
        const index = this.hash(key);
        this.table[index] = undefined
    }
    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }

        }
    }
}
const table = new HashTable(50);
table.set("name", "Nandhu")
table.set("age", 23)
table.display()