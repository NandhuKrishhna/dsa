function selectionSortDates(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;


        for (let j = i + 1; j < n; j++) {
            // Convert date strings to Date objects for comparison
            const currentDate = new Date(arr[j]);
            const minDate = new Date(arr[minIndex]);

            if (currentDate < minDate) {
                minIndex = j;
            }
        }
        // Swap if minIndex is not the current index
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}
