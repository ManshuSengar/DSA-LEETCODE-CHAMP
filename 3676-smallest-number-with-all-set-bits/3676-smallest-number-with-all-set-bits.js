/**
 * @param {number} n
 * @return {number}
 */
function smallestNumber(n) {
    let bits = n.toString(2).length;
    let result = (1 << bits) - 1;
    if (result < n) {
        bits++;
        result = (1 << bits) - 1;
    }
    return result;
}
