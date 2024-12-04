import { create } from "zustand";
import initialiseBoard from "../utils/initialiseBoard";
import initialisePieces from "../utils/initialisePieces";
import getValidMovesPawn from "../utils/moves/getValidMovesPawn";
import getRankFromY from "../utils/getRankFromY";
import getFileFromX from "../utils/getFileFromX";

const useMainStore = create((set, get) => ({
    board: initialiseBoard(),
    pieces: initialisePieces(),
    activePiece: null,
    validMoves: [],
    moveHistory: [],
    getters: {
        getValidMoves: () => {
            if (get().activePiece.type === "")
                return getValidMovesPawn(get().pieces, get().activePiece);
            if (get().activePiece.type === "R") console.log("R");
            if (get().activePiece.type === "N") console.log("N");
            if (get().activePiece.type === "B") console.log("B");
            if (get().activePiece.type === "Q") console.log("Q");
            if (get().activePiece.type === "K") console.log("K");
            return [];
        },
        getTurnColor: () => (get().moveHistory.length % 2 ? "black" : "white"),
    },
    setters: {
        setBoard: (nextBoard) => set({ board: nextBoard }),
        setPieces: (nextPieces) => set({ pieces: nextPieces }),
        setActivePiece: (nextActivePiece) =>
            set({ activePiece: nextActivePiece }),
        clearActivePiece: () => set({ activePiece: null }),
        setValidMoves: () => set({ validMoves: get().getters.getValidMoves() }),
        clearValidMoves: () => set({ validMoves: [] }),
    },
    actions: {
        moveActivePiece: (targetY, targetX) => {
            const pieces = get().pieces;
            const activePiece = get().activePiece;
            pieces[targetY][targetX] = {
                ...activePiece,
                y: targetY,
                x: targetX,
                hasMoved: true,
            };
            pieces[activePiece.y][activePiece.x] = [];
        },
        pushLatestMove: ({ y, x, type, isCapture }) => {
            const file = getFileFromX(x);
            const rank = getRankFromY(y);
            get().moveHistory.push(
                `${type}${isCapture ? "x" : ""}${file}${rank}`
            );
        },
        flipBoardAndPieces: () => {
            get().setters.setBoard(
                get()
                    .board.map((row) => row.reverse())
                    .reverse()
            );
            get().setters.setPieces(
                get().pieces.map((row) => {
                    return row.map((piece) =>
                        piece
                            ? {
                                  ...piece,
                                  y: 7 - piece.y,
                                  x: 7 - piece.x,
                              }
                            : null
                    );
                })
            );
            console.log(get().pieces);
        },
    },
}));

export const useMainGetters = () => useMainStore((s) => s.getters);
export const useMainSetters = () => useMainStore((s) => s.setters);
export const useMainActions = () => useMainStore((s) => s.actions);

export default useMainStore;
