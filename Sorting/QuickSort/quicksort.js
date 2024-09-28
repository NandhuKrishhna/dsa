function quickSortByAge(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1]; // Use the last element as the pivot
    const left = [];
    const right = [];

    // Compare by 'age' property
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].age < pivot.age) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively sort left and right arrays, and return the sorted array
    return [...quickSortByAge(left), pivot, ...quickSortByAge(right)];
}

const persons = [
    { name: "Alice", age: 34 }, 
    { name: "Bob", age: 25 }, 
    { name: "Charlie", age: 28 }
];

const sortedPersons = quickSortByAge(persons);
console.log("Sorted Persons by Age:", sortedPersons);
