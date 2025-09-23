// /**
 
//  /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */

// /**
//  * @param {ListNode} headA
//  * @param {ListNode} headB
//  * @return {ListNode}
//  */
// var getIntersectionNode = function(headA, headB) {
//     let sizeA=0;
//     let sizeB=0;
//     let currA=headA;
//     let currB=headB;
//     while(currA){
//         currA=currA.next;
//         sizeA++;
//     }
//     while(currB){
//         currB=currB.next;
//         sizeB++;
//     }
//     let diff= Math.abs(sizeA - sizeB);
//     currB=headB;
//     currA=headA;
//     if(sizeA>sizeB){
//         for(let i=0;i<diff;i++){
//             currA=currA.next;
//         }
//     }
//     else{
//          for(let i=0;i<diff;i++){
//             currB=currB.next;
//         }
//     }
//      while(currA){
//         if(currA===currB) {
//             return currA;
//         }
//         currA=currA.next;
//         currB=currB.next;
//     }

//     return null;
// };
 
 
 
 

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let currA=headA;
    let currB=headB;
    while(currA!=currB){
        currA=currA===null ? headB:currA.next;
        currB=currB===null ? headA:currB.next;
    }
    return currA;
};