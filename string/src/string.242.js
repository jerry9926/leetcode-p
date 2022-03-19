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