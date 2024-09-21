
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

var insertionSortList = function(head) {
    // Edge case: If the list is empty or has only one node, it's already sorted
    if (!head || !head.next) {
        console.log("List is already sorted or empty");
        return head;
    }
    
    // Dummy node helps to simplify insertion at the head of the list
    let dummy = new ListNode(0);
    dummy.next = head;
    console.log("Initial List:", printList(dummy.next));

    // prevSorted is the last node of the sorted portion
    let prevSorted = head;
    let curr = head.next;

    // Main loop to traverse the unsorted part of the list
    while (curr) {
        console.log("Currently sorting value:", curr.val);
        
        if (prevSorted.val <= curr.val) {
            // The current node is already in the correct position
            console.log("Node is in the correct position, moving forward");
            prevSorted = curr;
        } else {
            // Find the right position to insert curr in the sorted part
            console.log("Searching for insertion point for:", curr.val);
            let prev = dummy;
            
            // Traverse the sorted part and find the right position for curr
            while (prev.next.val <= curr.val) {
                console.log("Comparing with sorted node:", prev.next.val);
                prev = prev.next;
            }
            console.log("Found insertion point before node:", prev.next.val);
            
            // Insert curr between prev and prev.next
            prevSorted.next = curr.next;
            curr.next = prev.next;
            prev.next = curr;
        }
        
        // Show the current state of the list
        console.log("List after insertion:", printList(dummy.next));
        
        // Move to the next node in the unsorted part
        curr = prevSorted.next;
    }
    
    console.log("Final sorted list:", printList(dummy.next));
    return dummy.next;  // Return the sorted list
};

// Helper function to print the linked list as an array
function printList(head) {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    return arr;
}

// Example usage:
let head = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))));
let sortedList = insertionSortList(head);
