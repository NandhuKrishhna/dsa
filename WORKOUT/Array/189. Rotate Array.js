//* Input: (nums = [1, 2, 3, 4, 5, 6, 7]), (k = 3);
//* Output: [5, 6, 7, 1, 2, 3, 4];

function rotate(nums, k) {
  k = k % nums.length;
  nums.reverse();
  nums.slice(0, k).reverse();
  nums.slice(k).reverse();
}
