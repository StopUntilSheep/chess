import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Board from "./components/board/board";

const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("/api/data")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div className="bg-main-black flex justify-center items-center w-screen h-screen">
            {/* <div className="text-white">
                <h1>{data ? data.message : "Loading..."}</h1>
            </div> */}
            <Board />
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
