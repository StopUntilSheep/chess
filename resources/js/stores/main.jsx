import { create } from "zustand";
import initialiseBoard from "../utils/initialiseBoard";
import getActivePiece from "../utils/getActivePiece";
import getValidMoves from "../utils/moves/getValidMoves";
import findValidMoves from "../utils/moves/findValidMoves";

const useMainStore = create((set, get) => ({
    board: initialiseBoard(),
    setBoard: (nextBoard) => set({ board: nextBoard }),
    setActivePiece: (node) => get().setBoard(getActivePiece(get().board, node)),
    setValidMoves: (node) =>
        get().setBoard(
            getValidMoves(get().board, findValidMoves(get().board, node))
        ),
}));

export default useMainStore;

// NEXT JOB:
// Rather than having isActive as a key on board.node.piece, create activePiece in the store, so that we will be able to access the details of the selected piece (assuming activePiece !== null) immediately and from anywhere in the app

// Do the same for validMoves? Resulting in...
//  board: initialiseBoard(),
//  setBoard: (nextBoard) => set({ board: nextBoard }),
//  activePiece: null,
//  setActivePiece: (node) => get().setBoard(getActivePiece(get().board, node)),
//  validMoves: null,
//  setValidMoves: (node) => get().setBoard(
//      getValidMoves(get().board, findValidMoves(get().board, node))
//  ),
