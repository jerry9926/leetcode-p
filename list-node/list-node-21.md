### 题目

#### 合并两个有序链表

将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

> 来源：力扣（LeetCode）

> 链接：https://leetcode.cn/problems/merge-two-sorted-lists/


### 思路

1. 引入一个虚拟的头节点，var head = new ListNode(0, null)
2. temp=虚拟头节点
3. 比较list1与list2的值，哪个小，把temp.next赋值过去
4. listX往后移动，listX=listX.next
5. temp往后移动，temp=temp.next
6. 如果list1到尾部了，temp.next=list2（因为每个节点都有比较，加上本来就是升序链表，剩下的一定是比前面的节点大的）
7. 如果list2到尾部了，temp.next=list1


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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    var head = new ListNode(0, null)
    var temp = head
    while (list1 != null && list2 != null) {
        if (list1.val < list2.val) {
            temp.next = list1
            list1 = list1.next
            temp = temp.next
        } else {
            temp.next = list2
            list2 = list2.next
            temp = temp.next
        }
    }
    if (!list1) {
        temp.next = list2
    }
    if (!list2) {
        temp.next = list1
    }
    return head.next
};
```

### 复杂度分析

- 时间复杂度：O(n)
- 空间复杂度：O(n)