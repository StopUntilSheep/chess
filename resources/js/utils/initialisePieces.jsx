import { initialBoardState } from "../constants";

const initialisePieces = () => {
    const pieces = [];
    for (let y = 0; y < initialBoardState.length; y++) {
        const row = [];
        for (let x = 0; x < initialBoardState[0].length; x++) {
            initialBoardState[y][x]["color"]
                ? row.push({
                      x,
                      y,
                      type: initialBoardState[y][x]["piece"],
                      color: initialBoardState[y][x]["color"],
                      // hasMoved: false,
                      // the stuff below here is for testing pawns that aren't starting on the 7th rank - uncomment line above when done testing
                      hasMoved:
                          initialBoardState[y][x]["piece"] === "" && y !== 6
                              ? true
                              : false,
                  })
                : row.push(null);
        }
        pieces.push(row);
    }

    return pieces;
};

export default initialisePieces;
