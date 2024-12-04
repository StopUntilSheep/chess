import checkForPieceUp from "./checkForPieceUp";

const getValidMovesPawn = (pieces, { y, x }) => {
    const validMoves = [];

    // [MOVING FORWARD]
    // check if square in front of pawn is occcupied
    let result = checkForPieceUp(pieces, y, x, 1);

    if (result.length) {
        // check if pawn has moved at all yet
        if (pieces[y][x].hasMoved) {
            validMoves.push(...result);
        } else {
            // check if square 2 squares in front of pawn is occupied
            result = checkForPieceUp(pieces, y, x, 2);
            validMoves.push(...result);
        }
    }

    // [TAKING NORMALLY]
    // check if enemy piece is diagonally left/right
    // true:
    //  PAWN CAN MOVE DIAGONALLY LEFT/RIGHT
    // false:
    //  PAWN CAN'T MOVE DIAGONALLY LEFT/RIGHT

    // [TAKING VIA EN PASSENT]
    // check what previous move was etc.

    // console.log(validMoves);
    return validMoves;
};

export default getValidMovesPawn;
