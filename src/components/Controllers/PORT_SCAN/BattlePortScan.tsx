
"use client";
import React, { useState, useEffect } from "react";
import TerminalPortScan from "./TerminalPortScan";

//TODO: make the timer look nicer and make it stop when it reaches 0:00, 
//make it stop and display a message something like it is done 

//TODO: add session id, logic
export default function BattlePortScan() {
  const [lines, setLines] = useState<React.JSX.Element[]>([]);
  const [timeLeft, setTimeLeft] = useState(60); // 1-minute timer
  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-8">
      <div className="flex gap-8 w-full max-w-[90%]">
        {/* Terminal Offensive */}
        <div className="flex-1 p-6 bg-gray-800 rounded-xl shadow-xl h-[80vh]">
          <h2 className="text-center text-red-400 text-2xl font-bold mb-4 uppercase">
            Offensive Terminal
          </h2>
          <TerminalPortScan side="offensive" terminalLineData={lines} action={setLines} />
        </div>
        {/* Terminal Defensive */}
        <div className="flex-1 p-6 bg-gray-800 rounded-xl shadow-xl h-[80vh]">
          <h2 className="text-center text-blue-400 text-2xl font-bold mb-4 uppercase">
            Defensive Terminal
          </h2>
          <TerminalPortScan side="defensive" terminalLineData={lines} action={setLines} />
        </div>
      </div>


      <div className="w-full max-w-[20%] p-6 bg-gray-900 rounded-xl shadow-2xl h-[80vh] flex flex-col justify-center items-center border-2 border-green-500 glow-effect">
        <h2 className="text-center text-red-600 text-2xl font-extrabold mb-6">Time Left</h2>
        <div className="text-center text-5xl text-green-500 glitch font-mono">{formatTime(timeLeft)}</div>
      </div>

    </div>
  );
}

