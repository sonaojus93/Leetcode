function missingNumber(nums) {
    let n = nums.length;
    let total = n * (n + 1) / 2;
    let actual = nums.reduce((a, b) => a + b);
    return total - actual;
}

console.log(missingNumber([1]));