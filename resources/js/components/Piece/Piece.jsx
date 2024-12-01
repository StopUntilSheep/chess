import React from "react";
import Rook from "./Pieces/Rook";
import Knight from "./Pieces/Knight";
import Bishop from "./Pieces/Bishop";
import Queen from "./Pieces/Queen";
import King from "./Pieces/King";
import Pawn from "./Pieces/Pawn";

const Piece = ({ type, color }) => {
    return (
        <div className="flex items-center justify-center">
            {type === "R" && <Rook color={color} />}
            {type === "N" && <Knight color={color} />}
            {type === "B" && <Bishop color={color} />}
            {type === "Q" && <Queen color={color} />}
            {type === "K" && <King color={color} />}
            {type === "" && <Pawn color={color} />}
        </div>
    );
};

export default Piece;
