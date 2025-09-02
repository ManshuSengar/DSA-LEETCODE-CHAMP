/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
function divide(dividend, divisor) {
    // Handle edge cases
    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647; // Overflow case
    }
    
    if (divisor === 1) return dividend;
    if (divisor === -1) return -dividend;
    
    // Determine the sign of the result
    const isNegative = (dividend < 0) !== (divisor < 0);
    
    // Work with absolute values
    let absDividend = Math.abs(dividend);
    let absDivisor = Math.abs(divisor);
    
    let quotient = 0;
    
    // Use bit manipulation for efficient division
    while (absDividend >= absDivisor) {
        let temp = absDivisor;
        let multiple = 1;
        
        // Double the divisor until it's larger than the remaining dividend
        while (absDividend >= (temp << 1) && (temp << 1) > 0) {
            temp <<= 1;    // Double the temp
            multiple <<= 1; // Double the multiple
        }
        
        absDividend -= temp;
        quotient += multiple;
    }
    
    // Apply the sign
    if (isNegative) {
        quotient = -quotient;
    }
    
    // Handle 32-bit integer bounds
    return Math.max(Math.min(quotient, 2147483647), -2147483648);
}