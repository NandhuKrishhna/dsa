class MinHeap{
    constructor(){
        this.heap = [];
    }

    buildHeap(array){
        this.heap = array;
        for(let i = Math.floor(this.heap.length/2);i>=0; i--){
            this.check(i)
        }
    }
    check(index){
        const length = this.heap.length
        let leftIndex , rightIndex , smallest;
 
        while(true){
            leftIndex = 2*index + 1;
            rightIndex = 2 * index + 2;
            smallest = index;
            if(leftIndex < length && this.heap[leftIndex] < this.heap[smallest]){
                smallest = leftIndex
            }
            if(rightIndex < length && this.heap[rightIndex] < this.heap[smallest]){
                smallest = rightIndex
            }
            if(smallest === index) break;
            this.swap(index , smallest);
            index = smallest
        }
    }
    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }
    insert(data){
      this.heap.push(data);
      this.bubble()
    }
    bubble(){
        let i = this.heap.length - 1;
        let p = Math.floor((i-1)/2);
        while(i > 0 && this.heap[i] < this.heap[p]){
            this.swap(i,p);
            i = p;
            p = Math.floor((i-1)/2);
        }

    }

}

const min_heap = new MinHeap()
min_heap.buildHeap([4,10,3,5,1,6,9])
console.log(min_heap.heap);
min_heap.insert(2)
console.log(min_heap.heap);
