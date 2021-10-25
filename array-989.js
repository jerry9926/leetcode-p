/**
 * 对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。
 * 例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。
 * 给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/add-to-array-form-of-integer
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * 公式：当前位= (A的当前位+B的当前位+进位carry)%10
 * 模板：
 * while ( A 没完 || B 没完)
 * A 的当前位
 * B 的当前位
 * 和 = A 的当前位 + B 的当前位 + 进位carry
 * 当前位 = 和 % 10;
 * 进位 = 和 / 10;
 * 
 * 判断还有进位吗
 */
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
    var n = num.length - 1
    var ka = k.toString().split('')
    var i = ka.length - 1
    var c = 0
    var y = []
    while (n >= 0 || i >= 0) {
        var a = num[n] || 0
        var b = ka[i] || 0
        var sum = Number(a) + Number(b) + Number(c)
        var res = sum % 10
        c = Math.floor(sum / 10)
        y.push(res)
        n--
        i--
    }
    if (c !== 0) {
        y.push(c)
    }
    return y.reverse()
};
//[1,2,0,0]
// 34
console.log(addToArrayForm([1, 2, 0, 0], 34))