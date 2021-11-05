/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  // 一行数字为0-9，不能重复
  // 一列数字为0-9，不能重复
  // 一方块数字为0-9，不能重复

  // 行
  var map1 = []
  // 列
  var map2 = []
  // 方块
  var map3 = []
  var flag = false
  for (var i = 0; i < board.length; i ++) {
    if (!map1[i]) {
      map1[i] = {}
    }
    if (!map2[i]) {
      map2[i] = {}
    }
    for (var j = 0; j < board[i].length; j++) {
      // 记录行
      var n1 = board[i][j]
      if (!isNaN(Number(n1))) {
        if (map1[i][n1] !== undefined) {
          map1[i][n1] ++
          flag = true
          break
        } else {
          map1[i][n1] = 1
        }
      }
      // 记录列
      var n2 = board[j][i]
      if (!isNaN(Number(n2))) {
        if (map2[i][n2] !== undefined) {
          map2[i][n2] ++
          flag = true
          break
        } else {
          map2[i][n2] = 1
        }
      }
      // 记录方块
      
    }
  }

  console.log('map1=, flag=', flag, map1)
  console.log('map2=, flag=', flag, map2)

  return flag
};

console.log(isValidSudoku([["5",".","3",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]))