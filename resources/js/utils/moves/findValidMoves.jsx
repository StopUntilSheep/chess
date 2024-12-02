import findValidMovesPawn from "./findValidMovesPawn";

const findValidMoves = (board, node) => {
    let validMoves;
    switch (node.piece.type) {
        case "":
            // console.log(`${node.piece.color} pawn (${node.x}, ${node.y})`);
            validMoves = findValidMovesPawn(board, node);
            break;
        case "R":
            console.log(`${node.piece.color} rook (${node.x}, ${node.y})`);
            break;
        case "N":
            console.log(`${node.piece.color} knight (${node.x}, ${node.y})`);
            break;
        case "B":
            console.log(`${node.piece.color} bishop (${node.x}, ${node.y})`);
            break;
        case "Q":
            console.log(`${node.piece.color} queen (${node.x}, ${node.y})`);
            break;
        case "K":
            console.log(`${node.piece.color} king (${node.x}, ${node.y})`);
            break;
    }
    return validMoves;
};

export default findValidMoves;
