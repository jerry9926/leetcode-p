/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 说明:
 * 1. 必须在原数组上操作，不能拷贝额外的数组。
 * 2. 尽量减少操作次数。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/move-zeroes/solution/
 * 
 * 思路1：js数组函数移动，从末尾向前遍历；是零就删除(splice)并添加到末尾(push)
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var l = nums.length
  for (var i = l - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1)[0])
    }
  }
};

// var nums = [0,1,0,3,12]
// moveZeroes(nums)
// console.log(nums)


/**
 * 思路2：快慢指针
 * 1. 两个指针，快指针当前数字不是目标数字，快指针向后移动
 * 2. 快指针当前数字是目标数字，把快指针的值赋给慢指针，快慢指针同时向后移动
 * 3. 快指针到最后一位结束
 * 4. 慢指针当前位置与后面的都赋值为目标数字
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes_2 = function(nums) {
  var removeElement = (nums, val) => {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] != val) {
        nums[k++] = nums[i]
      }
    }
    return k;
  };

  var k = removeElement(nums, 0)
  for(var i = k; i < nums.length; i ++) {
    nums[i] = 0
  }

  // console.log(removeElement(nums, 0), nums)
};

var nums = [0,1,0,3,12]
moveZeroes_2(nums)
console.log(nums)