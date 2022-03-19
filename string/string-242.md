### 题目

#### 有效的字母异位词
给定两个字符串`s`和`t` ，编写一个函数来判断`t`是否是`s`的字母异位词。

注意：若`s`和`t`中每个字符出现的次数都相同，则称`s`和`t`互为字母异位词。

> 来源：力扣（LeetCode）

> 链接：https://leetcode-cn.com/problems/valid-anagram


### 思路

1. 字符串转数组
2. 判断字符长度不同就返回`false`
3. 遍历数组，用`map`保存字母的个数
4. 遍历map，有不一样数量的返回`false`，否则返回`true`


### 代码

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var a1 = s.split('')
    var a2 = t.split('')
    var num1 = {}
    var num2 = {}
    var res = true
    if (a1.length < a2.length) return false
    a1.forEach(function(item, index) {
        if (num1[item] === undefined) {
            num1[item] = 0
        }
        num1[item]++
        const item2 = a2[index]
        if (num2[item2] === undefined) {
            num2[item2] = 0
        }
        num2[item2]++
    })
    for (var key in num1) {
        if (num1[key] !== num2[key]) {
            res = false
        }
    }
    return res
};
```

### 复杂度分析

- 时间复杂度：O(n)
- 空间复杂度：O(n)