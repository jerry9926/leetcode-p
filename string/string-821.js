/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    // i=目标字符的下标,e=结果
    var i = [], e = []
    s.split('').forEach(function(item, index) {
        item == c && i.push(index)
    })
    // console.log(i)
    s.split('').forEach(function(num, index) {
        if (num == c) {
            e.push(0)
        } else {
            // b=当前距离
            var b = s.length
            i.forEach(function(item) {
                if (Math.abs(item-index) < b) {
                    b = Math.abs(item-index)
                }
            })
            e.push(b)
        }
    })
    console.log(e)
    return e
};

// var s = "aaab", c = "b"
var s = "loveleetcode", c = "e"
shortestToChar(s, c)