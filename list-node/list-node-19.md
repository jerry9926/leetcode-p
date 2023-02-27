### 题目

#### 删除链表的倒数第N个节点

给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

> 来源：力扣（LeetCode）

> 链接：https://leetcode.cn/problems/delete-node-in-a-linked-list


### 思路

1. 快慢指针，让fast指针先走n步
2. fast指针、slow指针同时走
3. fast指针到末尾时，slow指向是倒数第n的节点
4. 因为slow是倒数第n的节点，改变slow.next是删除不了自己的。所以需要引入一个虚拟的头结点，vn=new ListNode(0, head)
5. 如果从虚拟头节点开始，进行123步，就可以把slow指向倒数第n的节点上一个节点
6. 使用slow.next = slow.next.next，删除目标节点
7. 返回链表vn.next


### 代码

```js
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
    // fast移动n步 
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
```

### 复杂度分析

- 时间复杂度：O(n)
- 空间复杂度：O(n)