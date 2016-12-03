// Given a 2D board and a word, find if the word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cell,
//  where "adjacent" cells are those horizontally or vertically neighboring. 
//  The same letter cell may not be used more than once.
// For example,
// Given board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]
// word = "ABCCED", -> returns true,
// word = "SEE", -> returns true,
// word = "ABCB", -> returns false. 
// var word; // string word

var board =

    [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E']
        // ['A', 'D', 'E', 'E']
    ]

function main(board, word) {

    for (var i = 0; i < board.length; i++){

        for (var j = 0; j < board[i].length; j++) {
            if (exist(board, i, j, word, 0))
                return true;
        }

    }
        
    return false;
}

function exist(board, i, j, word, ind) {

    if (ind == word.length) return true;

    if (i > board.length - 1 || i < 0 || j < 0 || j > board[i].length - 1 || board[i][j] != word.charAt(ind))
        return false;

    board[i][j] = '*';

    var result = exist(board, i - 1, j, word, ind + 1) ||
        exist(board, i, j - 1, word, ind + 1) ||
        exist(board, i, j + 1, word, ind + 1) ||
        exist(board, i + 1, j, word, ind + 1);

    board[i][j] = word.charAt(ind);

    return result;
}


//TEST:
console.log("length of board = "+ board.length);
console.log(main(board,"ABCB")); //false
console.log(main(board,"ABCCED")); //true
console.log(main(board,"ABCEC")); 