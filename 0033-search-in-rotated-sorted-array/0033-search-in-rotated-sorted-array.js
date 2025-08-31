/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(arr, target) {
    let l=0;
    let r=arr.length-1;
    while(l<=r){
      let m=Math.floor(l+(r-l)/2);
      if(arr[m]===target) return m;
      if(arr[l]<=arr[m]){
         if(arr[l]<=target && target<arr[m]){
            r=m-1;
         }else{
           l=m+1;
         }
      } else{
         if(arr[r]>=target && target>arr[m]){
            l=m+1;
         }else{
            r=m-1;
         }
      }
      
    }
    return -1;
};