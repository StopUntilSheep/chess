import { initialBoardState } from "../constants";
import findValidMoves from "./moves/findValidMoves";

const initialiseBoard = () => {
    const board = [];
    let bg;
    for (let y = 0; y < initialBoardState.length; y++) {
        const row = [];
        for (let x = 0; x < initialBoardState[0].length; x++) {
            (x + y) % 2 ? (bg = "black") : (bg = "white");
            row.push({
                x,
                y,
                bg,
                isValidMove: false,
                piece: {
                    findValidMoves,
                    type: initialBoardState[y][x]["piece"],
                    color: initialBoardState[y][x]["color"],
                    // hasMoved: false,
                    isActive: false,
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
