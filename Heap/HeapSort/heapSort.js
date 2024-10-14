class MinHeap {
    constructor() {
        this.heap = [];
    }

    buildHeap(array) {
        this.heap = array;
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.check(i, this.heap.length);
        }
    }

    check(index, length) {
        let leftIndex, rightIndex, smallest;

        while (true) {
            leftIndex = 2 * index + 1;
            rightIndex = 2 * index + 2;
            smallest = index;

            if (leftIndex < length && this.heap[leftIndex] < this.heap[smallest]) {
                smallest = leftIndex;
            }
            if (rightIndex < length && this.heap[rightIndex] < this.heap[smallest]) {
                smallest = rightIndex;
            }
            if (smallest === index) break;

            this.swap(index, smallest);
            index = smallest;
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(data) {
        this.heap.push(data);
        this.bubble();
    }

    bubble() {
        let i = this.heap.length - 1;
        let p = Math.floor((i - 1) / 2);
        while (i > 0 && this.heap[i] < this.heap[p]) {
            this.swap(i, p);
            i = p;
            p = Math.floor((i - 1) / 2);
        }
    }

    // In-Place Heap Sort
    heapSort() {
        const length = this.heap.length;

        for (let i = length - 1; i > 0; i--) {
            this.swap(0, i);
            this.check(0, i);
        }
    }
}

// Example Usage
const min_heap = new MinHeap();
min_heap.buildHeap([4, 10, 3, 5, 1, 6, 2, 9]);
console.log("Min Heap:", min_heap.heap);
min_heap.heapSort();
console.log("Sorted Array:", min_heap.heap);
