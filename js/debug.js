'use strict'
var gGodMode = false
var gShouldRemoveHints = true


function setGodMode() {
    console.log('GOD MODE')
    gGodMode = true
    renderSmileyFace('doom')
}

function logCellContent(board, att) {
    var outputBoard = []
    for (var i = 0; i < board.length; i++) {
        var row = []
        for (var j = 0; j < board.length; j++) {
            row.push(board[i][j][att])
        }
        outputBoard.push(row)

    }
    console.table(outputBoard)
    return outputBoard
}