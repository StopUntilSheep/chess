import React from "react";
import Piece from "../Piece/Piece";
import useMainStore from "../../stores/main";

const Board = () => {
    const board = useMainStore((state) => state.board);
    const setActivePiece = useMainStore((state) => state.setActivePiece);
    const setValidMoves = useMainStore((state) => state.setValidMoves);

    const handleClick = (node) => {
        setActivePiece(node);
        setValidMoves(node);
    };

    return (
        <div className="flex flex-col aspect-square max-h-screen">
            {board.map((row, indexY) => {
                return (
                    <div className="flex flex-1 basis-0" key={`y-${indexY}`}>
                        {row.map((node, indexX) => {
                            return (
                                <div
                                    onClick={() => handleClick(node)}
                                    className={`relative flex flex-1 aspect-square cursor-pointer hover:bg-blue-300 ${
                                        node.bg === "black"
                                            ? "bg-board-black"
                                            : "bg-board-white"
                                    }`}
                                    key={`x-${indexX}`}
                                >
                                    <Piece
                                        type={node.piece.type}
                                        color={node.piece.color}
                                    />
                                    {node.isValidMove && (
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
