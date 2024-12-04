import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Board from "./components/board/board";
import useMainStore, { useMainGetters } from "./stores/main";

const App = () => {
    const [data, setData] = useState(null);

    const { activePiece, moveHistory, validMoves } = useMainStore();
    const { getTurnColor } = useMainGetters();

    useEffect(() => {
        fetch("/api/data")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div className="relative bg-main-black flex justify-center items-center w-screen h-screen text-white">
            <div className="absolute top-3 left-3 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <span>Active Piece:</span>
                    <span>{JSON.stringify(activePiece)}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span>Valid Moves:</span>
                    <span>{JSON.stringify(validMoves)}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span>Turn Colour:</span>
                    <span>{getTurnColor()}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span>Move History:</span>
                    <span>
                        {moveHistory.map((move, i) =>
                            i % 2 ? (
                                <React.Fragment key={i}>
                                    , {move}
                                    <br />
                                </React.Fragment>
                            ) : (
                                <React.Fragment key={i}>
                                    {i / 2 + 1}) {move}
                                </React.Fragment>
                            )
                        )}
                    </span>
                </div>
            </div>
            {/* <div className="text-white">
                <h1>{data ? data.message : "Loading..."}</h1>
            </div> */}
            <Board />
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
