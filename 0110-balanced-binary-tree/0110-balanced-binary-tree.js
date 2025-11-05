/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let ans=true;
    const traverse=function (curr){
      if(!curr) return 0;
      let leftH=traverse(curr.left);
      let rightR=traverse(curr.right);
      if(Math.abs(leftH-rightR)>1) ans=ans && false; 
      return 1+Math.max(leftH,rightR);
    }
    traverse(root);
    return ans;
};