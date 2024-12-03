import React from "react";
import Piece from "../Piece/Piece";
import useMainStore from "../../stores/main";
import arrayExistsInArrayOfArrays from "../../utils/arrayExistsInArrayOfArrays";

const Board = () => {
    const board = useMainStore((state) => state.board);
    const pieces = useMainStore((state) => state.pieces);
    const activePiece = useMainStore((state) => state.activePiece);
    const setActivePiece = useMainStore((state) => state.setActivePiece);
    const clearActivePiece = useMainStore((state) => state.clearActivePiece);
    const validMoves = useMainStore((state) => state.validMoves);
    const setValidMoves = useMainStore((state) => state.setValidMoves);
    const clearValidMoves = useMainStore((state) => state.clearValidMoves);

    const handleClickSquare = (y, x) => {
        // TRY TO IMPLEMENT THE BELOW NEXT
        // if (activePiece) {
        //     moveActivePiece(y, x);
        // }

        clearActivePiece();
        clearValidMoves();
    };

    const handleClickPiece = (y, x) => {
        // TRY TO IMPLEMENT THE BELOW NEXT
        // if (activePiece) {
        //     moveActivePiece(y, x);
        // }

        setActivePiece(pieces[y][x]);
        setValidMoves();
    };

    return (
        <div className="flex flex-col aspect-square max-h-screen text-white">
            {board.map((row, y) => {
                return (
                    <div className="flex flex-1 basis-0" key={`y-${y}`}>
                        {row.map((node, x) => {
                            return (
                                <div
                                    onClick={() => handleClickSquare(y, x)}
                                    className={`relative flex flex-1 aspect-square cursor-pointer ${
                                        activePiece?.y === y &&
                                        activePiece?.x === x
                                            ? "bg-green-700"
                                            : node.bg === "black"
                                            ? "bg-board-black"
                                            : "bg-board-white"
                                    }`}
                                    key={`x-${x}`}
                                >
                                    {pieces[y][x] && (
                                        <Piece
                                            action={(e) => {
                                                e.stopPropagation();
                                                handleClickPiece(y, x);
                                            }}
                                            type={pieces[y][x].type}
                                            color={pieces[y][x].color}
                                        />
                                    )}
                                    {arrayExistsInArrayOfArrays(
                                        [y, x],
                                        validMoves
                                    ) && (
                                        <div className="rounded-full w-1/3 h-1/3 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 absolute opacity-50 bg-black"></div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default Board;
