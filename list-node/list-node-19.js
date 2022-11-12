/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var length = head.length
    var res = []
    for (var i = 0; i < length; i++) {
        if (i !== length -n) {
            res.push(head[i])
        }
    }

    console.log(res)
    return res
};
// var removeNthFromEnd = function(head, n) {
//     var length = getLength(head)
//     var res = []
//     for (var i = 0; i < length - n + 1; i++) {
//         res.push(head.val)
//         head = head.next
//     }
//     head.next = head.next.next
//     while(head.next) {
//         res.push(head.val)
//         head = head.next
//     }
//     console.log(res)
//     return res
// };

// var getLength = function (head) {
//     var i = 1
//     while (head.next) {
//         i++
//         head = head.next
//     }
//     return i
// }

// var list = [1,2,3,4,5]
// var n = 2
var list = [1]
var n = 1


removeNthFromEnd(list, n)