const getActivePiece = (board, { y, x }) => {
    const nextBoard = board.map((row) => {
        return row.map((node) => {
            return {
                ...node,
                piece: {
                    ...node.piece,
                    isActive: node.y === y && node.x === x,
                },
            };
        });
    });
    return nextBoard;
};

export default getActivePiece;
