/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let arr=nums.sort((a,b)=>a-b);
    let i=0;
    let ans=[];
    while(i<arr.length){
        if(arr[i]!=arr[i-1]){
        twoSum(i,ans,arr);
        }
      
        i++;
    }
    return ans;
};


var twoSum=function(x,ans,nums){
    let i=x+1;
    let j=nums.length-1;
    while(j>i){
        if(nums[x]+nums[i]+nums[j]===0) {
            ans.push([nums[x],nums[i],nums[j]]);
            i++;
            j--;
             while (i < j && nums[i] === nums[i - 1]) {
                i++;
            }

        }
        else if(nums[x]+nums[i]+nums[j]<0) i++;
        else j--;
    }
}