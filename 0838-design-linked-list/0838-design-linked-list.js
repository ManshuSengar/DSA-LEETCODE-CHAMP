
var MyLinkedList = function() {
    this.head=null;
    this.size=0;

};

var Node=function (val){
    this.val=val;
    this.next=null;
}

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.size) return -1;
    let curr = this.head;
    for (let i = 0; i < index; i++) {
        curr = curr.next;
    }
    return curr.val;
};
/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode=new Node(val);
    newNode.next=this.head;
    this.head=newNode;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode=new Node(val);
    if(this.head==null) { this.head=newNode; this.size++}
    else{
  let curr=this.head;
    while(curr && curr.next){
       curr=curr.next;
    }
    curr.next=newNode;
    this.size++;
    }
  
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index==this.size) return this.addAtTail(val);
    if(index==0) return this.addAtHead(val);
    if(index<0 || index>this.size) return;
    else{
        let prev=null;
        let curr=this.head;
        for(let i=0;i<index;i++){
            prev=curr;
            curr=curr.next;
        }
        let newNode=new Node(val);
        newNode.next=curr;
        prev.next=newNode;
        this.size++;}
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index<0 || index>=this.size) return;
    if(index==0){ 
        this.head=this.head.next;
        this.size--;
        return;
    }
    else{
        let prev=null;
        let curr=this.head;
        for(let i=0;i<index;i++){
            prev=curr;
            curr=curr.next;
        }
        prev.next=curr.next;
        this.size--;}
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */