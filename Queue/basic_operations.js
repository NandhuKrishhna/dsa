class Queue{
    constructor(){
        this.items =[];
    }

    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        return this.items.shift()
    }

    isEmpty(){
        return this.items.length === 0
    }

    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.items[0]
    }
    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items.toString());
    }
}

const queue = new Queue()
console.log(queue.isEmpty());
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()
queue.dequeue()
queue.print()