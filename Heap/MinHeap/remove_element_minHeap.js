class MinHeap {
  constructor() {
    this.heap = [];
  }

  buildHeap(array) {
    this.heap = array;
    for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
      this.check(i);
    }
  }
  check(index) {
    let leftIndex, rightIndex, smallest;
    let length = this.heap.length;
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
      if (index === smallest) break;
      this.swap(index, smallest);
      index = smallest;
    }
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  remove() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.check(0);
    return min;
  }
}

const min = new MinHeap();
min.buildHeap([4, 10, 3, 5, 1, 6, 9]);
console.log(min.heap);
min.remove();
console.log(min.heap);