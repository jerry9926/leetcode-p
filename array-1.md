### 题目

#### 1. 两数之和

- 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
- 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
- 你可以按任意顺序返回答案。

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/two-sum
> 参考题解：https://leetcode-cn.com/problems/two-sum/solution/tu-jie-guan-fang-tui-jian-ti-jie-liang-s-02xs/

### 思路

1. 遍历数组，i为下标，同时查找数组中有没有 target - nums[i] （差值）的数字
2. 用hashmap(obj)保存数组{值: 下标}
3. 遍历时如果存在obj[差值]，返回当前下标i和obj[差值]


### 代码

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var m = {}
    var res = []
    for (let i = 0; i < nums.length; i++) {
        if (m[target - nums[i]] !== undefined) {
            res.push(i)
            res.push(m[target - nums[i]])
            break
        } else {
            m[nums[i]] = i
        }
    }
    return res
};

console.log(twoSum([2,7,11,15], 9))
```

### 复杂度分析

时间复杂度：O(n)
空间复杂度：O(n)