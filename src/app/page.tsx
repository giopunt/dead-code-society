'use client';

import { useEffect, useState } from 'react';

const deadCodePhrases = [
  "🗑️ Dead code is clutter—delete it mercilessly.",
  "🧹 Unused code is wasted space—clean it out.",
  "🌪️ Dead code breeds confusion—kill it now.",
  "🦠 If it's not running, it's rotting—remove it.",
  "💸 Dead code is technical debt—pay it off.",
  "🎭 Unused code is a lie—erase the fiction.",
  "🐌 Dead code slows progress—cut it loose.",
  "⚓ Unreachable code is dead weight—dump it.",
  "📢 Dead code is noise—silence it forever.",
  "⚰️ If it's dead, bury it—no exceptions."
];

export default function Home() {
  const [phrase, setPhrase] = useState('');

  const changePhrase = () => {
    const randomPhrase = deadCodePhrases[Math.floor(Math.random() * deadCodePhrases.length)];
    setPhrase(randomPhrase);
  };

  useEffect(() => {
    changePhrase();

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        event.preventDefault();
        changePhrase();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <main className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-2xl md:text-3xl text-gray-500 font-['EB_Garamond']">DEAD CODE SOCIETY</h1>
          <p className="text-5xl md:text-7xl font-bold">{phrase}</p>
        <button onClick={changePhrase} className="text-sm text-white px-2 py-2">Hit  <span className="mx-1 px-3 py-1 bg-gray-100 text-black rounded">Space</span>  or Click</button>
      </main>
    </div>
  );
}
