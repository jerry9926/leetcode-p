/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var vn = new ListNode(0, head)
    var fast = slow = vn
    // 移动fast
    while(n>0) {
        fast = fast.next
        n--
    }
    // 如果n超过了链表长度
    if (!fast) return vn.next
    while(fast.next) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return vn.next
}