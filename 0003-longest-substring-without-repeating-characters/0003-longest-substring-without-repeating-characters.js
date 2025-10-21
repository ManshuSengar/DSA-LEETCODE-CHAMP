/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i=0;
    let maxSub=0;
    let map={
    }
    for(let j=0;j<s.length;j++){
      if(map[s[j]]!=undefined && map[s[j]]>=i){
        i=map[s[j]]+1;
      }  
      map[s[j]]=j;
      maxSub=Math.max(((j-i)+1),maxSub);
    }
    return maxSub;
};