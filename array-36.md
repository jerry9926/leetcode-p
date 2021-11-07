
### 36. 有效的数独



- 请你判断一个 9x9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。

- 数字 1-9 在每一行只能出现一次。
- 数字 1-9 在每一列只能出现一次。
- 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
- 数独部分空格内已填入了数字，空白格用 '.' 表示。

> 来源：力扣（LeetCode）

> 链接：https://leetcode-cn.com/problems/valid-sudoku


### 思路

按规则满足三个条件
1. 规则1：一行数字为0-9，不能重复
2. 规则2：一列数字为0-9，不能重复
3. 规则3：一方块数字为0-9，不能重复
4. 双层循环遍历数独
5. 规则1用组数arr1记录结果，以外层循环i为下标表示行，数组内容为map记录当前数字的出现次数，如果出现次数超过1次，则不满足有效数独
6. 规则2用组数arr1记录结果，以内层循环j为下标表示行，后面操作与规则1一样
7. 规则3用组数arr3记录结果，主要问题是如果表示方块，用`i/3 * 3 + j/3`表示。后面操作与规则1一样

### 代码
```js
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  // 一行数字为0-9，不能重复
  // 一列数字为0-9，不能重复
  // 一方块数字为0-9，不能重复

  // 行
  var 规则1： = []
  // 列
  var arr2 = []
  // 方块
  var arr3 = []
  var flag = true
  for (var i = 0; i < board.length; i ++) {
    
    for (var j = 0; j < board[i].length; j++) {
      var num = board[i][j]
      if (!isNaN(Number(num))) {
        // 记录行； arr1的下标=i
        if (!arr1[i]) {
          arr1[i] = {}
        }
        if (arr1[i][num] !== undefined) {
          arr1[i][num] ++
          flag = false
          break
        } else {
          arr1[i][num] = 1
        }
        // 记录列；arr2的下标=j
        if (!arr2[j]) {
          arr2[j] = {}
        }
        if (arr2[j][num] !== undefined) {
          arr2[j][num] ++
          flag = false
          break
        } else {
          arr2[j][num] = 1
        }
        // 记录方块；arr3的下标
        var k = Math.floor(i/3) * 3 + Math.floor(j/3)
        if (!arr3[k]) {
          arr3[k] = {}
        }
        if (arr3[k][num] !== undefined) {
          arr3[k][num] ++
          flag = false
          break
        } else {
          arr3[k][num] = 1
        }
      }
    }
  }

  return flag
};
```
