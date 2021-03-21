/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param pHead ListNode类 
 * @param k int整型 
 * @return ListNode类
 */
function FindKthToTail( pHead ,  k ) {
  // write code here
  let num = 0;
  let res = null;
  const dfs = (node) => {
    if(!node) return;
    dfs(node.next);
    num++;
    if(num === k) res = node;
  }
  dfs(pHead);
  return res;
}
module.exports = {
  FindKthToTail : FindKthToTail
};