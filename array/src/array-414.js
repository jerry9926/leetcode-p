/**
 * 给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/third-maximum-number/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
    const a = quickSort(nums).reverse()
    // 这里要写 unddefined 因为数据是0时会不符合条件
    if (a[2] === undefined) {
        return a[0]
    } else {
        return a[2]
    }

    function quickSort(arr) {
        // 这里注意长度为1 和 0 都要返回
        if (arr.length <= 1) return arr
        var m = arr[Math.floor(arr.length / 2)]
        var l = []
        var r = []
        for (var i = 0; i < arr.length; i++) {
            // 这里不能写成 <= 如果有=就会有相同的数重复
            if (arr[i] < m) {
                l.push(arr[i])
            } else if (arr[i] > m) {
                r.push(arr[i])
            }
        }
        return quickSort(l).concat(m, quickSort(r))
    }
};

console.log(thirdMax([1, 2]))
