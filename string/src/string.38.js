/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) {
        return '1'
    }
    var s = countAndSay(n-1)
    var m = -1;
    var g = 1;
    var res = []
    var a = String(s).split('')
    if (a.length <= 1) {
        return '1' + s
    }
    console.log('s=', s)
    a.forEach(function(item, index) {
        // 当前位与上一位相等
        if (item == m) {
            g++
            // 如果是最后一位，mark
            if (index === a.length - 1) {
                res.push(g)
                res.push(m)
            }
        }
        // 当前位与上一位不相等
        if (m !== -1 && item != m) {
            res.push(g)
            res.push(m)
            g = 1
            // 如果是最后一位，补mark最后一位
            if (index === a.length - 1) {
                res.push(1)
                res.push(item)
            }
        }
        
        m = item
    })
    // console.log('res=', res.join(''))
    return res.join('')
};

console.log(countAndSay(5))