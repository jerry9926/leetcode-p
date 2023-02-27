### 题目

#### 反转链表

给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

> 来源：力扣（LeetCode）

> 链接：https://leetcode.cn/problems/reverse-linked-list/


### 思路


1. 把每一个节点的next指向上一个节点
2. pre为null，cur为第一个节点，temp为工具变量
3. temp备份cur.next
4. 改变指向cur.next = pre
5. pre往下移动pre = cur
6. cur往下移动cur = tmep
7. cur到尾部(cur=null)时结束
8. 返回pre，因为cur=null时，pre就是最后一个节点


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
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || !head.next) return head
    var temp = null, pre = null, cur = head
    while (cur) {
        temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }
    return pre
};
```

### 复杂度分析

- 时间复杂度：O(n)
- 空间复杂度：O(n)