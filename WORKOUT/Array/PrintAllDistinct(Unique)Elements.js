const arr = [1, 1, 1, 1, 1];
function findAllUniqueNumber(arr) {
    let uniqueArray = [];
    let hashMap = new Map();
    for (let el of arr) {
        console.log(el)
        if (hashMap.has(el)) {
            console.log("entering to the loop")
            hashMap.set(el, (hashMap.get(el) || 0) + 1)
        } else {
            hashMap.set(el, 1)
            uniqueArray.push(el)
        }
    }
    return uniqueArray

};

console.log(findAllUniqueNumber(arr))