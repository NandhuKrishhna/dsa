class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Function to perform merge sort on the linked list
const mergeSortLinkedList = function(head) {
    if (!head || !head.next) {
        // Base case: if the list has 0 or 1 node, it's already sorted
        return head;
    }

    // Step 1: Split the list into two halves
    let mid = getMiddle(head);
    let rightHalf = mid.next;
    mid.next = null;  // Break the list into two parts

    console.log('Splitting:', listToArray(head), 'and', listToArray(rightHalf));

    // Step 2: Recursively sort both halves
    let left = mergeSortLinkedList(head);
    let right = mergeSortLinkedList(rightHalf);

    // Step 3: Merge the sorted halves
    let merged = mergeLinkedLists(left, right);

    console.log('Merging:', listToArray(left), 'and', listToArray(right), '=>', listToArray(merged));

    return merged;
};

// Helper function to find the middle of the list
const getMiddle = function(head) {
    let slow = head;
    let fast = head;

    // Move fast by 2 and slow by 1 to get the middle node
    while (fast !== null && fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;  // Slow pointer will be at the middle
};

// Helper function to merge two sorted linked lists
const mergeLinkedLists = function(l1, l2) {
    let dummy = new ListNode();
    let tail = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }

    // Attach the remaining elements from l1 or l2
    tail.next = l1 !== null ? l1 : l2;

    return dummy.next;  // Return the merged list starting after the dummy node
};

// Helper function to convert a linked list to an array (for logging purposes)
const listToArray = function(head) {
    let result = [];
    let curr = head;
    while (curr !== null) {
        result.push(curr.val);
        curr = curr.next;
    }
    return result;
};

// Example Usage:

// Create a linked list: 4 -> 2 -> 1 -> 3
let head = new ListNode(4);
head.next = new ListNode(2);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(3);

console.log('Original List:', listToArray(head));

// Sort the list using merge sort
let sortedList = mergeSortLinkedList(head);

// Print the sorted linked list
console.log('Sorted List:', listToArray(sortedList));
