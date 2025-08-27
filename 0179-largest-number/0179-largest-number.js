/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let strNums = [];
    for (let i = 0; i < nums.length; i++) {
        strNums.push(String(nums[i]));
    }

    function quickSort(arr, left, right) {
        if (left >= right) return;

        let pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }

    function partition(arr, left, right) {
        let pivot = arr[right];
        let i = left;
        for (let j = left; j < right; j++) {
            if (compare(arr[j], pivot)) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                i++;
            }
        }
        [arr[i], arr[right]] = [arr[right], arr[i]];
        return i;
    }

    function compare(a, b) {
        return (a + b) > (b + a);
    }

    quickSort(strNums, 0, strNums.length - 1);

    let result = "";
    for (let i = 0; i < strNums.length; i++) {
        result += strNums[i];
    }

    return result[0] === "0" ? "0" : result;
};
