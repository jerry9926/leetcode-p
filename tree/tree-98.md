### 题目

#### 136. 验证二叉搜索树

给你一个二叉树的根节点`root`，判断其是否是一个有效的二叉搜索树。

有效 二叉搜索树定义如下：

- 节点的左子树只包含 小于 当前节点的数。
- 节点的右子树只包含 大于 当前节点的数。
- 所有左子树和右子树自身必须也是二叉搜索树。

> 来源：力扣（LeetCode）

> 链接：https://leetcode.cn/problems/validate-binary-search-tree/


### 思路

1. 判断是否二叉搜索树，等于按中序遍历后的数组，是否是递增的
2. 实现中序遍历，中序遍历就是按左中右排序
3. 遍历结果数组，不是递增返回false，否则就是true

### 代码

```js
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    var res = []
    var dfs = function(root) {
        if (!root) return
        dfs(root.left)
        res.push(root.val)
        dfs(root.right)
    }
    dfs(root)
    for(var i=1;i < res.length; i++) {
        if (res[i]<=res[i-1]) {
            return false
        }
    }
    return true
};
```

### 复杂度分析

- 时间复杂度：O(2n)，n=节点数量，递归遍历一次，循环遍历一次
- 空间复杂度：O(n)，n=节点数量