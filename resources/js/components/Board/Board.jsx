import React from "react";
import Piece from "../Piece/Piece";
import useMainStore, {
    useMainGetters,
    useMainSetters,
    useMainActions,
} from "../../stores/main";
import arrayExistsInArrayOfArrays from "../../utils/arrayExistsInArrayOfArrays";

const Board = () => {
    const { board, pieces, activePiece, validMoves } = useMainStore();
    const { getTurnColor } = useMainGetters();
    const { setActivePiece, clearActivePiece, setValidMoves, clearValidMoves } =
        useMainSetters();
    const { moveActivePiece, pushLatestMove, flipBoardAndPieces } =
        useMainActions();

    const handleClickSquare = (y, x) => {
        if (activePiece && arrayExistsInArrayOfArrays([y, x], validMoves)) {
            moveActivePiece(y, x);
            pushLatestMove({ y, x, type: activePiece.type, isCapture: false });
            setTimeout(flipBoardAndPieces, 200);
            console.log(pieces);
        }

        clearActivePiece();
        clearValidMoves();
    };

    const handleClickPiece = (y, x) => {
        if (activePiece && arrayExistsInArrayOfArrays([y, x], validMoves)) {
            moveActivePiece(y, x);
            pushLatestMove({ y, x, type: activePiece.type, isCapture: true });
            flipBoardAndPieces();
        } else {
            setActivePiece(pieces[y][x]);
            setValidMoves();
        }
    };

    return (
        <div className="flex flex-col aspect-square max-h-screen">
            {board.map((row, y) => {
                return (
                    <div className="flex flex-1 basis-0" key={`y-${y}`}>
                        {row.map((node, x) => {
                            return (
                                <div
                                    onClick={() =>
                                        handleClickSquare(node.y, node.x)
                                    }
                                    className={`relative flex flex-1 aspect-square cursor-pointer ${
                                        activePiece?.y === node.y &&
                                        activePiece?.x === node.x
                                            ? "bg-green-700"
                                            : node.bg === "black"
                                            ? "bg-board-black"
                                            : "bg-board-white"
                                    }`}
                                    key={`x-${x}`}
                                >
                                    {pieces[node.y][node.x] && (
                                        <Piece
                                            action={(e) => {
                                                e.stopPropagation();
                                                handleClickPiece(
                                                    pieces[node.y][node.x].y,
                                                    pieces[node.y][node.x].x
                                                );
                                            }}
                                            type={pieces[node.y][node.x].type}
                                            color={pieces[node.y][node.x].color}
                                        />
                                    )}
                                    {arrayExistsInArrayOfArrays(
                                        [node.y, node.x],
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
