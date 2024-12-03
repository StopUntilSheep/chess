const checkForPieceUp = (pieces, y, x, count = null) => {
    if (y === 0) return false;
    let iterations = 0;
    const emptySquares = [];

    for (let i = y - 1; i > -1; i--) {
        if (pieces[i][x]) {
            return emptySquares;
        }
        emptySquares.push([i, x]);
        iterations++;
        if (count !== null && iterations >= count) {
            break;
        }
    }

    return emptySquares;
};

export default checkForPieceUp;
