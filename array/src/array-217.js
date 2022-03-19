
/**
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/contains-duplicate/
 * 思路如下：
 * 遍历数组，创建一个对象obj记录数值的出现数
 * 出现1次标记obj[n]=1，如果出现2次obj[n]++，即可中止遍历，返回结果
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var o = {}
    var f = false
    for (var i = 0; i < nums.length; i++) {
        if (o[nums[i]]) {
            o[nums[i]]++
            f = true
            break
        } else {
            o[nums[i]] = 1
        }
    }
    return f
}

console.log(containsDuplicate([1,2,3,1]))