/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let strNums = [];
    for (let i = 0; i < nums.length; i++) {
        strNums.push(String(nums[i]));
    }
    function compare(a, b) {
        return (a + b) > (b + a); 
    }
    function merge(left, right) {
        let result = [];
        let i = 0, j = 0;

        while (i < left.length && j < right.length) {
            if (compare(left[i], right[j])) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        while (i < left.length) {
            result.push(left[i]);
            i++;
        }
        while (j < right.length) {
            result.push(right[j]);
            j++;
        }
        return result;
    }
    function mergeSort(arr) {
        if (arr.length <= 1) return arr;

        let mid = Math.floor(arr.length / 2);
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));

        return merge(left, right);
    }
    let sorted = mergeSort(strNums);
    let result = "";
    for (let i = 0; i < sorted.length; i++) {
        result += sorted[i];
    }
    return result[0] === "0" ? "0" : result;
};
