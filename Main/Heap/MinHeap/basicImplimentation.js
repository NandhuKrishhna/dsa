class Heap{
 constructor() {
    this.heap = [];
 } 

 insert(data){
  this.heap.push(data);
  this.bubble()
 }
 bubble(){
   let index = this.heap.length-1;
   let parent = Math.floor((index -1 )/2);
   while(index > 0 && this.heap[parent]> this.heap[index]){
    [this.heap[index],this.heap[parent]]=[this.heap[parent],this.heap[index]];

    index = parent;
    parent = Math.floor((index -1 )/2);
   }
 }
 printHeap(){
  console.log(this.heap);
 }
}

const heap = new Heap()
heap.insert(4)
heap.insert(10)
heap.insert(3)
heap.insert(5)
heap.insert(1)
heap.printHeap()