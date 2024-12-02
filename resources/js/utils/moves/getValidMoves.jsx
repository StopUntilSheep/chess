import areArraysEqual from "../areArraysEqual";

const getValidMoves = (board, validMoves) => {
    console.log(validMoves, "validMoves");
    console.log(validMoves.includes([0, 5]));

    const nextBoard = board.map((row) => {
        return row.map((node) => {
            return {
                ...node,
                isValidMove: validMoves.some((element) =>
                    areArraysEqual(element, [node.y, node.x])
                ),
            };
        });
    });

    console.log(nextBoard);

    return nextBoard;
};

export default getValidMoves;
