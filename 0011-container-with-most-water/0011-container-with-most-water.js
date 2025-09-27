/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(arr) {
    let i=0;
    let j=arr.length-1;
    let area=0;
    while(i<j){
        area=Math.max(Math.min(arr[i],arr[j])*(j-i),area);
        if(arr[i]<arr[j]) i++;
        else j--;
    }
    return area;
};