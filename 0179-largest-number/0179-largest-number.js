/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    // Convert numbers to strings
    let strNums = nums.map(String);

    // Custom sort based on concatenation
    strNums.sort((a, b) => (b + a).localeCompare(a + b));

    // Join result
    let result = strNums.join('');

    // Handle case with leading zeros (like [0,0])
    return result[0] === '0' ? '0' : result;
};
