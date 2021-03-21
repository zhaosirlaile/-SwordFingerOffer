/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ListNode(x){
  this.val = x;
  this.next = null;
}
function ReverseList(pHead)
{
    // write code here
  // const res = null;
  let p = pHead;
  let res = null,temp = null;
  while(p) {
    temp = p.next;
    p.next = res;
    res = p;
    p = temp;
  }
  return res;
}
const node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);
node.next.next.next = new ListNode(4);
node.next.next.next.next = new ListNode(5);
ReverseList(node);
module.exports = {
    ReverseList : ReverseList
};