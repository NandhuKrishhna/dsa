class Maxheap {
  constructor() {
    this.heap = [];
  }

  insert(data) {
    this.heap.push(data);
    this.check();
  }
  check() {
    let i = this.heap.length - 1;
    let p = Math.floor((i - 1) / 2);
    while (i > 0 && this.heap[i] > this.heap[p]) {
      this.swap(i, p);
      i = p;
      p = Math.floor((i - 1) / 2);
    }
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  printHeap() {
    console.log(this.heap);
  }
  buildMaxHeap(array) {
    this.heap = array;
    for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
      this.check(i);
    }
  }
  check(index) {
    let l = this.heap.length;
    let leftIndex, rightIndex, largest;
    while (true) {
      leftIndex = 2 * index + 1;
      rightIndex = 2 * index + 2;
      largest = index;
      if (leftIndex < l && this.heap[leftIndex] > this.heap[largest]) {
        largest = leftIndex;
      }
      if (rightIndex < l && this.heap[rightIndex] > this.heap[largest]) {
        largest = rightIndex;
      }
      if (index === largest) break;
      this.swap(index, largest);
      index = largest;
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

const max = new Maxheap();
// max.insert(4)
// max.insert(10)
// max.insert(3)
// max.insert(5)
// max.insert(1)
// max.printHeap()
// max.printHeap()
max.buildMaxHeap([1, 4, 3, 5, 10, 6, 9]);
max.printHeap();
max.remove();
max.printHeap();
