import { initialBoardState } from "../constants";

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
            });
        }
        board.push(row);
    }

    return board;
};

export default initialiseBoard;
