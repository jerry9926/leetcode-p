
/**
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/rotate-array/submissions/
 * 思路如下：
 * 首先对整个数组实行翻转，这样子原数组中需要翻转的子数组，就会跑到数组最前面。
 * 这时候，从 k 处分隔数组，左右两数组，各自进行翻转即可。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var reverse = function(nums, start, end){
    while(start < end){
        [nums[start++], nums[end--]] = [nums[end], nums[start]];
    }
}
var rotate = function(nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
    return nums
};

console.log(rotate([1,2,3,4,5,6,7], 3))