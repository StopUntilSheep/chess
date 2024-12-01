import { initialBoardState } from "../constants";

const initialiseBoard = () => {
    const board = [];
    for (let y = 0; y < initialBoardState.length; y++) {
        const row = [];
        for (let x = 0; x < initialBoardState[0].length; x++) {
            (x + y) % 2
                ? row.push({
                      // NEXT JOB TO DO IS TO FLATTEN THE NODE OBJECTS BY GETTING RID OF 'square' AND 'piece'

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
                          //   hasMoved: false,
                          // the stuff below here is for testing pawns that aren't starting on the 7th rank - uncomment line above when done testing
                          hasMoved:
                              initialBoardState[y][x]["piece"] === "" && y !== 6
                                  ? true
                                  : false,
                      },
                  })
                : row.push({
                      // NEXT JOB TO DO IS TO FLATTEN THE NODE OBJECTS BY GETTING RID OF 'square' AND 'piece'

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
                          //   hasMoved: false,
                          // the stuff below here is for testing pawns that aren't starting on the 7th rank - uncomment line above when done testing
                          hasMoved:
                              initialBoardState[y][x]["piece"] === "" && y !== 6
                                  ? true
                                  : false,
                      },
                  });
        }
        board.push(row);
    }
    return board;
};

export default initialiseBoard;
