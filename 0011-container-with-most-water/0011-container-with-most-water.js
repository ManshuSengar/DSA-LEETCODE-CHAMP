/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(arr) {
   let i=0;
   let j=arr.length-1;
   let ans=0;
   while(i<j){
    let area=Math.min(arr[i],arr[j])*(j-i);
    ans=Math.max(ans,area);
    if(arr[i]>arr[j]){
        j--;
    }
    else{
        i++;
    }
   }
   return ans;
};