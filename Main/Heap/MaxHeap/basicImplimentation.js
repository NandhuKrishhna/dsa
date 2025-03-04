class MaxHeap {
  constructor() {
    this.heap = [];
  }

  buildHeap(array) {
    this.heap = array;
    for (let i = Math.floor(this.heap.length / 2 - 1); i >= 0; i--) {
      this.check(i);
    }
  }

  check(index) {
    const length = this.heap.length;
    let leftIndex, rightIndex, largest;

    while (true) {
      leftIndex = 2 * index + 1;
      rightIndex = 2 * index + 2;
      largest = index;

      if (leftIndex < length && this.heap[leftIndex] > this.heap[largest]) {
        largest = leftIndex;
      }
      if (rightIndex < length && this.heap[rightIndex] > this.heap[largest]) {
        largest = rightIndex;
      }
      if (largest === index) break;

      this.swap(index, largest);
      index = largest;
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
    while (i > 0 && this.heap[i] > this.heap[p]) {
      this.swap(i, p);
      i = p;
      p = Math.floor((i - 1) / 2);
    }
  }

  remove() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.check(0);
    return max;
  }
}

// Example usage
const max_heap = new MaxHeap();
max_heap.buildHeap([4, 10, 3, 5, 1, 6, 9]);
console.log(max_heap.heap); // Outputs the MaxHeap after building
max_heap.insert(2);
console.log(max_heap.heap); // Outputs the MaxHeap after inserting 2
max_heap.remove();
console.log(max_heap.heap); // Outputs the MaxHeap after removing the max element
