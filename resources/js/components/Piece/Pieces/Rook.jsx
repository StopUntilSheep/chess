import React from "react";

const Rook = ({ color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 45 45"
            width="100%"
            height="100%"
        >
            {color === "black" ? (
                <g
                    style={{
                        opacity: 1,
                        fill: color,
                        fillOpacity: 1,
                        fillRule: "evenodd",
                        stroke: "#000000",
                        strokeWidth: 1.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 4,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                    }}
                    transform="translate(0,0.3)"
                >
                    <path
                        d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "
                        style={{ strokeLinecap: "butt" }}
                    />
                    <path
                        d="M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z "
                        style={{ strokeLinecap: "butt" }}
                    />
                    <path
                        d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "
                        style={{ strokeLinecap: "butt" }}
                    />
                    <path
                        d="M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z "
                        style={{
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter",
                        }}
                    />
                    <path
                        d="M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z "
                        style={{ strokeLinecap: "butt" }}
                    />
                    <path
                        d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 L 11,14 z "
                        style={{ strokeLinecap: "butt" }}
                    />
                    <path
                        d="M 12,35.5 L 33,35.5 L 33,35.5"
                        style={{
                            fill: "none",
                            stroke: "#ffffff",
                            strokeWidth: 1,
                            strokeLinejoin: "miter",
                        }}
                    />
                    <path
                        d="M 13,31.5 L 32,31.5"
                        style={{
                            fill: "none",
                            stroke: "#ffffff",
                            strokeWidth: 1,
                            strokeLinejoin: "miter",
                        }}
                    />
                    <path
                        d="M 14,29.5 L 31,29.5"
                        style={{
                            fill: "none",
                            stroke: "#ffffff",
                            strokeWidth: 1,
                            strokeLinejoin: "miter",
                        }}
                    />
                    <path
                        d="M 14,16.5 L 31,16.5"
                        style={{
                            fill: "none",
                            stroke: "#ffffff",
                            strokeWidth: 1,
                            strokeLinejoin: "miter",
                        }}
                    />
                    <path
                        d="M 11,14 L 34,14"
                        style={{
                            fill: "none",
                            stroke: "#ffffff",
                            strokeWidth: 1,
                            strokeLinejoin: "miter",
                        }}
                    />
                </g>
            ) : (
                <g
                    style={{
                        opacity: 1,
                        fill: "#ffffff",
                        fillOpacity: 1,
                        fillRule: "evenodd",
                        stroke: "#000000",
                        strokeWidth: 1.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 4,
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                    }}
                    transform="translate(0,0.3)"
                >
                    <path
                        d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "
                        style={{ strokeLinecap: "butt" }}
                    />
                    <path
                        d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "
                        style={{ strokeLinecap: "butt" }}
                    />
                    <path
                        d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14"
                        style={{ strokeLinecap: "butt" }}
                    />
                    <path d="M 34,14 L 31,17 L 14,17 L 11,14" />
                    <path
                        d="M 31,17 L 31,29.5 L 14,29.5 L 14,17"
                        style={{
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter",
                        }}
                    />
                    <path d="M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5" />
                    <path
                        d="M 11,14 L 34,14"
                        style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeLinejoin: "miter",
                        }}
                    />
                </g>
            )}
        </svg>
    );
};

export default Rook;
