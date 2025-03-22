
"use client";

// aici vreau landing page
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";



export default function LandingPage() {
  const router = useRouter();
  const [selectedSession, setSelectedSession] = useState<string | null>(null);

  const sessionIDs = ["SSH-EXPLOIT", "CRYPT0-CR4CK", "P0RT-SC4N"];

  const handleSelect = (session: string) => {
    setSelectedSession(session);
    //setTimeout(() => router.push(`/battle?session=${session}`), 1000);
    setTimeout(() => router.push(`/battle/${session}`), 1000);
    if (session === "SSH-EXPLOIT")
      setTimeout(() => router.push(`/battle/${session}`), 1000);
    else if (session === "CRYPT0-CR4CK")
      setTimeout(() => router.push(`/battle/CRYPTO_CRACK`), 1000);
    else if (session === "P0RT-SC4N")
      setTimeout(() => router.push(`/battle/PORT_SCAN`), 1000);
  };

  const handleClick = () => {
    router.push("/battle");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-green-400 font-mono">
      <h1 className="text-4xl font-bold glitch mb-6">Select Your Session</h1>
      <div className="grid grid-cols-1 gap-4">
        {sessionIDs.map((session) => (
          <button
            key={session}
            className={`px-6 py-3 text-xl font-bold border-2 border-green-500 rounded-lg transition-all duration-300 ${selectedSession === session ? "bg-green-500 text-black" : "hover:bg-green-700"
              }`}
            onClick={() => handleSelect(session)}
          >
            {session}
          </button>
        ))}

        <button
          onClick={handleClick}
          key={"battle"}
          className="px-6 py-3 text-xl font-bold border-2 border-green-500 rounded-lg transition-all duration-300 bg-green-500 text-black"
        >
          Go to Battle
        </button>
      </div>
      {selectedSession && <p className="mt-4 text-yellow-400">Loading {selectedSession}...</p>}
    </div>
  );
}
