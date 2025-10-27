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
// var postorderTraversal = function(root) {
//     let arr=[];
//     function traversal(curr){
//         if(!curr) return;
//         traversal(curr.left);
//         traversal(curr.right);
//         arr.push(curr.val);
//     }
//     traversal(root);
//     return arr;
// };


var postorderTraversal = function(root) {
    if(!root) return [];
    let s1=[root];
    let s2=[];
    while(s1.length){
        let curr=s1.pop();
        s2.push(curr);
        curr.left && s1.push(curr.left);
        curr.right && s1.push(curr.right);
    }
   let ans=[];
    while(s2.length){
        let curr=s2.pop();
        ans.push(curr.val);
    }
    return ans;
};

