class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Swap helper function
  swap(i, j) {
    console.log(`Swapping ${this.heap[i]} and ${this.heap[j]}`);
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Insert a new value into the heap
  insert(value) {
    console.log(`Inserting value: ${value}`);
    this.heap.push(value);
    console.log(`Heap before bubbleUp: ${this.heap}`);
    this.bubbleUp(this.heap.length - 1);
    console.log(`Heap after bubbleUp: ${this.heap}`);
  }

  // Bubble the element up to its correct position
  bubbleUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
      console.log(`Bubble up: ${this.heap[index]} is smaller than ${this.heap[parentIndex]}`);
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  // Remove the root (min element)
  remove() {
    if (this.heap.length === 0) {
      console.log("Heap is empty. Nothing to remove.");
      return null;
    }
    if (this.heap.length === 1) {
      const onlyElement = this.heap.pop();
      console.log(`Removing the only element: ${onlyElement}`);
      return onlyElement;
    }

    const min = this.heap[0];
    console.log(`Removing min element: ${min}`);
    this.heap[0] = this.heap.pop();
    console.log(`Heap after removing min and swapping last element to root: ${this.heap}`);
    this.bubbleDown(0);
    console.log(`Heap after bubbleDown: ${this.heap}`);
    return min;
  }

  // Bubble the root down to its correct position
  bubbleDown(index) {
    const length = this.heap.length;
    let leftChild, rightChild, smallest;

    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      smallest = index;

      if (leftIndex < length && this.heap[leftIndex] < this.heap[smallest]) {
        smallest = leftIndex;
      }

      if (rightIndex < length && this.heap[rightIndex] < this.heap[smallest]) {
        smallest = rightIndex;
      }

      if (smallest === index) break;

      console.log(`Bubble down: ${this.heap[smallest]} is smaller than ${this.heap[index]}`);
      this.swap(index, smallest);
      index = smallest;
    }
  }

  // Build a min heap from an array
  buildHeap(array) {
    console.log(`Building heap from array: ${array}`);
    this.heap = array;
    for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
      this.bubbleDown(i);
    }
    console.log(`Heap after building: ${this.heap}`);
  }
}

// Sample workout for MinHeap
const minHeap = new MinHeap();
minHeap.buildHeap([4, 10, 3, 5, 1,6,9]);
console.log("Min heap after building:", minHeap.heap); // [1, 4, 3, 10, 5]

minHeap.insert(2);
console.log("Min heap after inserting 2:", minHeap.heap); // [1, 4, 2, 10, 5, 3]

console.log("Removed min element:", minHeap.remove()); // 1
console.log("Min heap after removal:", minHeap.heap);  // [2, 4, 3, 10, 5]
