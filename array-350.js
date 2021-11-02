/**
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
 * 
 * 思路1：哈希表(map)记录，
 * 1. 遍历nums1，用map记录，用数值做key，出现的数量做value
 * 2. 遍历nums2，如果map中有对应数字，记录到结果集res，同时map中的value数减一
 * 3. 得到res即可
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect_1 = function(nums1, nums2) {
    var obj = {}
    var res = []
    nums1.forEach(function(item) {
        if (obj[item]) {
            obj[item]++
        } else {
            obj[item] = 1
        }
    })

    nums2.forEach(function(item) {
        if (obj[item]) {
            res.push(item)
            obj[item] --
        }
    })
    
    return res
};

/** 
 * 思路2：排序+双指针
 * 1. 先按小到大排序 nums1和nums2
 * 2. 双指针，指针初始化i1=0,i2=0，如果两个指向的值相等保存到res数组，并且两个指针移动下一位
 * 3. 如果nums1[i1]<nums[i2]，移动i1，i2不动。反之移动i2（把数值小的指针往后移动）
 * 4. i1或者i2走完就结束
 * 5. 得到res即可
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect_2 = function(nums1, nums2) {
    nums1.sort(function(a, b){ return a - b })
    nums2.sort(function(a, b){ return a - b })
    var res = []
    var i1 = 0
    var i2 = 0

    while(i1 < nums1.length && i2 < nums2.length) {
        if (nums1[i1] == nums2[i2]) {
            res.push(nums1[i1])
            i1++
            i2++
        } else if (nums1[i1] < nums2[i2]) {
            i1++
        } else if (nums1[i1] > nums2[i2]) {
            i2++
        }
    }
    
    return res
};

console.log(intersect_1([1,2,2,1], [2,2]))
console.log(intersect_2([1,2,2,1], [2,2]))