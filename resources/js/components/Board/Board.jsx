import React, { useState } from "react";
import Piece from "../Piece/Piece";
import initialiseBoard from "../../utils/initialiseBoard";
import checkForPieceUp from "../../utils/checkForPieceUp";
import areArraysEqual from "../../utils/areArraysEqual";

const Board = () => {
    const [board, setBoard] = useState(initialiseBoard());

    const showAvailableMoves = (availableMoves) => {
        console.log(availableMoves, "availableMoves");

        console.log(availableMoves.includes([0, 5]));

        const nextBoard = board.map((row) => {
            return row.map((node) => {
                return {
                    ...node,
                    square: {
                        ...node.square,
                        isAvailableMove: availableMoves.some((element) =>
                            areArraysEqual(element, [
                                node.square.y,
                                node.square.x,
                            ])
                        ),
                    },
                };
            });
        });
        console.log(nextBoard);

        setBoard(nextBoard);
    };

    const findAvailableMoves = ({ type, color }, { x, y }) => {
        switch (type) {
            case "":
                console.log(`${color} pawn (${x}, ${y})`);
                const availableMoves = [];

                // [MOVING FORWARD]
                // check if square in front of pawn is occcupied
                let result = checkForPieceUp(board, y, x, 1);

                if (result.length) {
                    // check if pawn has moved at all yet
                    if (board[y][x].piece.hasMoved) {
                        availableMoves.push(...result);
                    } else {
                        // check if square 2 squares in front of pawn is occupied
                        result = checkForPieceUp(board, y, x, 2);
                        availableMoves.push(...result);
                    }
                }

                // [TAKING NORMALLY]
                // check if enemy piece is diagonally left/right
                // true:
                //  PAWN CAN MOVE DIAGONALLY LEFT/RIGHT
                // false:
                //  PAWN CAN'T MOVE DIAGONALLY LEFT/RIGHT

                // [TAKING VIA EN PASSENT]
                // check what previous move was etc.

                console.log(availableMoves);
                showAvailableMoves(availableMoves);

                break;
            case "R":
                console.log(`${color} rook (${x}, ${y})`);
                break;
            case "N":
                console.log(`${color} knight (${x}, ${y})`);
                break;
            case "B":
                console.log(`${color} bishop (${x}, ${y})`);
                break;
            case "Q":
                console.log(`${color} queen (${x}, ${y})`);
                break;
            case "K":
                console.log(`${color} king (${x}, ${y})`);
                break;
        }
    };

    const handleClick = (piece, square) => {
        findAvailableMoves(piece, square);
    };

    return (
        <div className="flex flex-col aspect-square max-h-screen">
            {board.map((row, indexY) => {
                return (
                    <div className="flex flex-1 basis-0" key={`y-${indexY}`}>
                        {row.map((node, indexX) => {
                            return (
                                <div
                                    onClick={() =>
                                        handleClick(node.piece, node.square)
                                    }
                                    className={`relative flex flex-1 aspect-square cursor-pointer hover:bg-blue-300 ${
                                        node.square.bg === "black"
                                            ? "bg-board-black"
                                            : "bg-board-white"
                                    }`}
                                    key={`x-${indexX}`}
                                >
                                    <Piece
                                        type={node.piece.type}
                                        color={node.piece.color}
                                    />
                                    {node.square.isAvailableMove && (
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
