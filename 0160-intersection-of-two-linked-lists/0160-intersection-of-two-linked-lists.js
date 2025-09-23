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
    let sizeA=0;
    let sizeB=0;
    let currA=headA;
    let currB=headB;
    while(currA){
        currA=currA.next;
        sizeA++;
    }
    while(currB){
        currB=currB.next;
        sizeB++;
    }
    let diff= Math.abs(sizeA - sizeB);
    console.log("currB",currB,sizeA,currA,sizeB,diff)
    currB=headB;
    currA=headA;
    if(sizeA>sizeB){
        for(let i=0;i<diff;i++){
            currA=currA.next;
        }
    }
    else{
         for(let i=0;i<diff;i++){
            currB=currB.next;
        }
    }
    console.log("currA--> ",currA,currB);
     while(currA){
        console.log("currA.val",currA.val);
        if(currA===currB) {
            return currA;
        }
        currA=currA.next;
        currB=currB.next;
    }

    return null;
};