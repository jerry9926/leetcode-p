### 题目

#### 136. 二叉树的最大深度

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

> 来源：力扣（LeetCode）

> 链接：https://leetcode.cn/problems/maximum-depth-of-binary-tree/


### 思路

1. 最大深度为左树深度与右树深度比最大值再加一（加上根节点）
2. 递归思路
3. 三要素：要素一，递归参数与返回值，参数为节点，返回值为高度
4. 要素二，终止条件，没有子节点（当前节点为空，返回0）
5. 要素三，单层递归逻辑，求左树深度，求右树深度，再加一，返回数值

### 代码

```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};
```

### 复杂度分析

- 时间复杂度：O(n)，n=节点数量
- 空间复杂度：O(n)，n=递归深度，就是树的最大深度