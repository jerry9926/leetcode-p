/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function(arr) {
    var a = arr.sort(function(b1,b2) {
        return b1 - b2
    })
    var f = true
    while (a.length > 0) {
        for (var i = 0; i < a.length; i ++) {
            if (a[i] > 0 && a.indexOf(2  * a[i]) === -1) {
                a.length = 0
                f = false
            }
            if (a[i] < 0 && a.indexOf(a[i] / 2) === -1) {
                a.length = 0
                f = false
            }
            if (a[i] > 0 && a.indexOf(2  * a[i]) !== -1) {
                var ii = a.indexOf(2  * a[i])
                a.splice(i, 1)
                a.splice(ii - 1, 1)
                i--
            }
            if (a[i] < 0 && a.indexOf(a[i] / 2) !== -1) {
                var ii = a.indexOf(a[i] / 2)
                a.splice(i, 1)
                a.splice(ii - 1, 1)
                i--
            }
        }
    }
    return f
};

// var arr = [3,1,3,6]
var arr = [2,-2,4,-4]

console.log(canReorderDoubled(arr))