/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(arr) {
    let n=arr.length;
    let maxL=[];
    let maxR=[];
    maxL[0]=arr[0];
    maxR[n-1]=arr[n-1];
    for(let i=1;i<n;i++){
      maxR[n-1-i]=Math.max(maxR[n-i],arr[n-1-i]);
      maxL[i]=Math.max(maxL[i-1],arr[i]);
    }
    let ans=0;
    for(let i=0;i<n;i++){
      ans+=Math.max((Math.min(maxL[i],maxR[i])-arr[i]),0);
    }
    return ans;
};