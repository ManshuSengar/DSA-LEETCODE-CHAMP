/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count=0;
    let i=s.length-1;
    while(i>=0){
        if(count!=0 && s[i]==" " ) return count;
        else if(s[i]!=" ") count++;
        i--;
    }
    return count;
};