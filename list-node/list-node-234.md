### 题目

#### 回文链表

给你一个单链表的头节点`head`，请你判断该链表是否为回文链表。如果是，返回`true`；否则，返回`false`。

> 来源：力扣（LeetCode）

> 链接：https://leetcode.cn/problems/palindrome-linked-list/


### 思路

1. 把链表转成数组
2. 判断数组是不是回文数组
3. 双指针，一个从头(i)开始一个从尾(j)开始
4. 判断两指针的值是否相等，如果不等返回false，中止条件是i>j
5. 如果一直相等，返回true


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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var arr = []
    while(head) {
        arr.push(head.val)
        head = head.next
    }
    for (var i=0,j=arr.length-1;i < j; i++, j--) {
        if (arr[i] !== arr[j]) {
            return false
        }
    }
    return true
};
```

### 复杂度分析

- 时间复杂度：O(2n)=O(n)
- 空间复杂度：O(n)