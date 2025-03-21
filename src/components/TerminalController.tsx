"use client";
import React, { useState, useEffect, useRef } from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";

type Command = {
  name: string;
  description: string;
};

const commandList: Command[] = [
  { name: 'ls', description: 'List directory contents' },
  { name: 'cd', description: 'Change the current directory' },
  { name: 'pwd', description: 'Print working directory' },
  { name: 'echo', description: 'Display a line of text' },
  { name: 'cat', description: 'Concatenate and display file content' },
  { name: 'help', description: 'Show this command guide' }, // Ghidul de comenzi
];

type Prop = {
  side: string; // offensive / defensive
  terminalLineData: React.JSX.Element[]; // Terminal lines list
  action: React.Dispatch<React.SetStateAction<React.JSX.Element[]>>;
}

//TODO: faceti incat terminalul sa ocupe tot divul ala incadrat cu rosu/cyan
export default function TerminalController({ side, terminalLineData, action }: Prop) {
  const [showHelp, setShowHelp] = useState(false);

  const isOffensive = side === "offensive";
  const textColor = isOffensive ? "#ff5555" : "#00ffff"; // Red for Offensive, Cyan for Defensive
  const sideTag = isOffensive ? "[Offensive]" : "[Defensive]";

  // Effect to type text
  const typeText = (text: string, callback: (typedText: string) => void) => {
    let i = 0;
    const interval = setInterval(() => {
      callback(text.substring(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 50); // Adjust speed here
  };

  const onEnter = (terminalInput: string) => {
    if (terminalInput === "help") {
      setShowHelp(true);
    } else {
      action((prev: React.JSX.Element[]) => {
        const lastThreeCommands = prev.slice(-3);
        let typedText = "";
        typeText(terminalInput, (text) => {
          typedText = text;
          action([
            ...lastThreeCommands,
            <TerminalOutput key={`command-${Date.now()}`}>
              <span className="text-green-400 font-bold glitch">$</span>{" "}
              <span className="font-bold" style={{ color: textColor, marginRight: "5px" }}>
                {sideTag}
              </span>
              <span className="hacker-text">{typedText}</span>
            </TerminalOutput>,
          ]);
        });
      });
    }

  };

  //TODO: faceti ceva font mai bun si un text mai bun
  useEffect(() => {
    action([
      <TerminalOutput key="ascii-art">
        <pre className="text-green-400">
          {`
        ██████╗ ███████╗███╗   ██╗ █████╗ ██████╗ ███████╗
        ██╔══██╗██╔════╝████╗  ██║██╔══██╗██╔══██╗██╔════╝
        ██████╔╝█████╗  ██╔██╗ ██║███████║██║  ██║█████╗  
        ██╔═══╝ ██╔══╝  ██║╚██╗██║██╔══██║██║  ██║██╔══╝  
        ██║     ███████╗██║ ╚████║██║  ██║██████╔╝███████╗
        ╚═╝     ╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═════╝ ╚══════╝
        `}
        </pre>
      </TerminalOutput>,
    ]);
  }, []);




  return (
    <div
      className="relative w-full h-full p-4 rounded-lg shadow-lg flicker"
      style={{
        background: "rgba(10, 10, 10, 0.9)",
        border: `2px solid ${textColor}`,
        boxShadow: `0px 0px 10px ${textColor}`,
        fontFamily: "'Courier New', monospace",
      }}
      tabIndex={0}
    >
      <Terminal
        name={`H4CK3R TERMINAL - ${side.toUpperCase()}`}
        colorMode={ColorMode.Dark}
        onInput={onEnter}
      >
        {terminalLineData}
      </Terminal>

      {/* Ghidul de comenzi */}
      {showHelp && (
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-r from-gray-800 to-black text-white p-6 rounded-lg shadow-2xl border-l-4 border-green-500 overflow-y-auto transition-transform transform duration-300">
          <h2 className="text-2xl font-extrabold mb-6 text-center text-green-500">Command Guide</h2>
          <ul className="space-y-3">
            {commandList.map((cmd) => (
              <li key={cmd.name} className="hover:bg-gray-700 p-2 rounded-lg">
                <span className="font-bold text-green-400">{cmd.name}</span>: <span className="text-sm">{cmd.description}</span>
              </li>
            ))}
          </ul>
          <button
            className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300 ease-in-out"
            onClick={() => setShowHelp(false)}
          >
            Close Help
          </button>
        </div>
      )}

      {/* Scanline Effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none scanline"></div>

    </div>
  );
}

