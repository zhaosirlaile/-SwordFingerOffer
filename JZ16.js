/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ListNode(x){
  this.val = x;
  this.next = null;
}
function Merge(pHead1, pHead2)
{
  // write code here
  let res = new ListNode(0);
    p = res;
  while(pHead1 && pHead2) {
    if(pHead1.val < pHead2.val) {
      p.next = pHead1
      pHead1 = pHead1.next;
    } else {
      p.next = pHead2
      pHead2 = pHead2.next;
    }
    p = p.next;
  }
  while(pHead1) {
    p.next = pHead1
    pHead1 = pHead1.next;
    p = p.next;
  }
  while(pHead2) {
    p.next = pHead2
    pHead2 = pHead2.next;
    p = p.next;
  }
  return res.next;
}

const l1 = new ListNode(1)
l1.next = new ListNode(3);
l1.next.next = new ListNode(5);
const l2 = new ListNode(2);
l2.next = new ListNode(4);
l2.next.next = new ListNode(6);
Merge(l1,null);
module.exports = {
    Merge : Merge
};