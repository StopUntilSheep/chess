import { initialBoardState } from "../constants";

const initialiseBoard = () => {
    const width = 8;
    const height = 8;
    const board = [];
    for (let y = 0; y < height; y++) {
        const row = [];
        for (let x = 0; x < width; x++) {
            (x + y) % 2
                ? row.push({
                      square: {
                          x,
                          y,
                          bg: "black",
                          isActivePiece: false,
                          isAvailableMove: false,
                      },
                      piece: {
                          type: initialBoardState[y][x]["piece"],
                          color: initialBoardState[y][x]["color"],
                          hasMoved: false,
                      },
                  })
                : row.push({
                      square: {
                          x,
                          y,
                          bg: "white",
                          isActivePiece: false,
                          isAvailableMove: false,
                      },
                      piece: {
                          type: initialBoardState[y][x]["piece"],
                          color: initialBoardState[y][x]["color"],
                          hasMoved: false,
                      },
                  });
        }
        board.push(row);
    }
    return board;
};

export default initialiseBoard;
