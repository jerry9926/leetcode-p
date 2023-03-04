### 题目

#### 回文链表

给你一个链表的头节点`head`，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪`next`指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数`pos`来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：`pos`不作为参数进行传递 。仅仅是为了标识链表的实际情况。

如果链表中存在环 ，则返回`true`。 否则，返回`false`。

> 来源：力扣（LeetCode）
> 链接：https://leetcode.cn/problems/linked-list-cycle/


### 思路

1. 快慢指针，快指针一次走两步，慢指针一次走一步
2. 如果有环，快慢指针总会相遇(slow=fast)。
3. 因为如果有环，两个指针会同在环内，由于速度不同，慢指针肯定会被套圈（想象跑步）
4. 循环条件为fast是否走到尾节点，如果走完循环证明也是没有环的。因为有环不会有为节点。


### 代码

```js
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var slow = head, fast = head;

    while(fast != null && fast.next != null) {
        slow = slow.next
        fast = fast.next.next
        if (slow == fast) {
            return true
        }
    }
    return false
};
```

### 复杂度分析

- 时间复杂度：O(n)
- 空间复杂度：O(2n)=O(n)