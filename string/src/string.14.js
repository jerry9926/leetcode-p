/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) return strs[0]
    var s1 = strs[0]
    var len = s1.length

    for (var i = 1; i < strs.length; i++) {
        // n表示有几位与s1相同
        var n = 0
        for (var k = 0; k < strs[i].length; k++) {
            var item = strs[i][k]
            var item1 = s1[k]
            console.log('item=', item, ', item1=', item1)
            // 逐位对比相同就+1
            if (strs[i][k] === s1[k]) {
                n++
            } else {
                // 不相同就结束对比，对比下一个字符串
                k = strs[i].length
            }
        }
        console.log('n=', n)
        // 如果n位数比较短，更新len
        if (n < len) {
            len = n
        }
    }
    console.log(len, s1.substring(0, 0 + len))
    return s1.substring(0, 0 + len)
};

// var strs = ["flower","flow","flight"]
var strs = ["cia","coa"]
longestCommonPrefix(strs)