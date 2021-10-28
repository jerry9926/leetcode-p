
/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。
 * 找出那个只出现了一次的元素。
 * 说明：
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/single-number
 * 
 * 思路如下：
 * 遍历数组，创建一个对象obj记录数值的出现数
 * 出现1次标记obj[n]=1，如果出现2次obj[n]++。遍历obj，记录val=1的key，返回结key
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var o = {}
    var v = -1
    for (var i = 0; i < nums.length; i++) {
        if (o[nums[i]]) {
            o[nums[i]]++
            f = true
        } else {
            o[nums[i]] = 1
        }
    }
    for (const key in o) {
        if (Object.hasOwnProperty.call(o, key)) {
            const element = o[key];
            if (element == 1) {
                v = key
            }
        }
    }
    return v
};

console.log(singleNumber([2,2,1]))