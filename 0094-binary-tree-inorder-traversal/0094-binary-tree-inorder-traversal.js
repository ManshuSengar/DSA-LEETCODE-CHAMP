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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let arr=[];
    function traversal(curr){
      if(!curr) return;
      traversal(curr.left);
      arr.push(curr.val);
      traversal(curr.right);
    }
    traversal(root);
    return arr;
};