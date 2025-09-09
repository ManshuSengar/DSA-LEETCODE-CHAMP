/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let setB=new Set();
    let currB=headB;
    let currA=headA;
    while(currB){
       setB.add(currB);
       currB=currB.next; 
    }

    while(currA){
        if(setB.has(currA)) return currA;
        currA=currA.next;
    }

    return null;
};