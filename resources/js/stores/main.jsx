import { create } from "zustand";
import initialiseBoard from "../utils/initialiseBoard";
import initialisePieces from "../utils/initialisePieces";
import getValidMovesPawn from "../utils/moves/getValidMovesPawn";

const useMainStore = create((set, get) => ({
    board: initialiseBoard(),
    setBoard: (nextBoard) => set({ board: nextBoard }),
    pieces: initialisePieces(),
    setPieces: (nextPieces) => set({ pieces: nextPieces }),
    activePiece: null,
    setActivePiece: (nextActivePiece) => set({ activePiece: nextActivePiece }),
    clearActivePiece: () => set({ activePiece: null }),
    validMoves: [],
    setValidMoves: () => set({ validMoves: get().getValidMoves() }),
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
    clearValidMoves: () => set({ validMoves: [] }),
}));

export default useMainStore;
