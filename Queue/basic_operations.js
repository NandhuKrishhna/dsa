class Queue{
    constructor(){
         this.items = [];
    }

    enqueue(elem){
        this.items.push(elem);
    }
    dequeue(){
        if(this.isEmpty()) return "Undeflow, cannot perform dequeue"
        return this.items.shift();

    }
    isEmpty(){
       return this.items.length === 0 ;
    }

    peek(){
                if(this.isEmpty()) return "Queue is empty";
                return this.items[0];
            }
            print(){
        if(this.isEmpty()){
            console.log("Queue is Empty");
        }else{
            console.log(this.items.join(", "));
        }
        
    }
}
const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.print()
queue.dequeue()
queue.print()
