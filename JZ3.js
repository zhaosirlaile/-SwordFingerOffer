function ListNode(x){
  this.val = x;
  this.next = null;
}
function printListFromTailToHead(head){
  const res = [];
  const dfs = (node) => {
    if(!node) return ;
    dfs(node.next);
    res.push(node.val);
  }
  dfs(head)
  return res;
}


const node = new ListNode(67);
node.next = new ListNode(0);
node.next.next= new ListNode(24);
node.next.next.next = new ListNode(58);
printListFromTailToHead(node);
