import React, { useState } from 'react';

const GuessTheBook = () => {
  const [currentRound, setCurrentRound] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [koinsEarned, setKoinsEarned] = useState(0);

  const books = [
    { title: "Atomic Habits", author: "James Clear", emoji: "⚛️", clue: "Small changes, big results" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", emoji: "🟢", clue: "The green light at the end of the dock" },
    { title: "1984", author: "George Orwell", emoji: "👁️", clue: "Big Brother is watching" },
    { title: "The Alchemist", author: "Paulo Coelho", emoji: "🏜️", clue: "A shepherd's journey to find treasure" },
    { title: "Pride and Prejudice", author: "Jane Austen", emoji: "💐", clue: "It is a truth universally acknowledged" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", emoji: "🧙", clue: "An unexpected journey" },
  ];

  const handleGuess = (title) => {
    if (title === books[currentRound].title) {
      setScore(score + 1);
      setKoinsEarned(koinsEarned + 15);
      setRevealed(true);
    } else {
      setRevealed(true);
    }

    setTimeout(() => {
      if (currentRound < books.length - 1) {
        setCurrentRound(currentRound + 1);
        setRevealed(false);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const resetGame = () => {
    setCurrentRound(0);
    setScore(0);
    setShowResult(false);
    setRevealed(false);
    setKoinsEarned(0);
  };

  return (
    <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-2xl p-6 border border-[#D4A017]/10 shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg text-[#f5ede4]">🎯 Guess The Book</h3>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-[#D4A017]">⭐ {koinsEarned} KOINS</span>
          <span className="text-[#D4A017]/50">Score: {score}/{books.length}</span>
        </div>
      </div>

      {!showResult ? (
        <div>
          <div className="text-center mb-6">
            <div className="text-6xl mb-2">{books[currentRound].emoji}</div>
            <div className="flex justify-between text-xs text-[#D4A017]/50">
              <span>Round {currentRound + 1} of {books.length}</span>
              <span>💡 {books[currentRound].clue}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {books.map((book) => (
              <button
                key={book.title}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  revealed
                    ? book.title === books[currentRound].title
                      ? 'bg-emerald-600/40 text-emerald-400 border-emerald-400'
                      : 'bg-[#1a0f0a]/40 text-[#D4A017]/30'
                    : 'bg-[#1a0f0a]/80 text-[#f5ede4] hover:bg-[#D4A017]/20 hover:border-[#D4A017]/30'
                } border border-[#D4A017]/10 hover:border-[#D4A017]/30 transition`}
                onClick={() => handleGuess(book.title)}
                disabled={revealed}
              >
                {book.title}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-8">
          <div className="text-5xl mb-4">{score >= 5 ? '🏆' : score >= 3 ? '📚' : '📖'}</div>
          <h4 className="text-2xl font-bold text-[#f5ede4]">Game Complete!</h4>
          <p className="text-[#D4A017] text-lg mt-2">You guessed {score}/{books.length} correctly</p>
          <p className="text-[#D4A017]/50 text-sm mt-1">Earned {koinsEarned} KOINS!</p>
          <button
            onClick={resetGame}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-[#D4A017] to-[#8B6914] text-[#1a0f0a] rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#D4A017]/20 transition"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default GuessTheBook;


// import React, { useState } from 'react';
// import Card from '../Common/Card';

// const puzzles = [
//   { emojis: "🕷️👑🌙", answer: "The Night Circus" },
//   { emojis: "🚀🔴🧪", answer: "Project Hail Mary" },
//   { emojis: "🐉⚔️🏰", answer: "Dune" },
//   { emojis: "🧠💰📈", answer: "The Psychology of Money" },
//   { emojis: "🧙‍♂️💍🌋", answer: "The Hobbit" },
// ];

// const KOINS_PER_GUESS = 15;

// const GuessTheBook = ({ onKoinsEarned }) => {
//   const [index, setIndex] = useState(0);
//   const [guess, setGuess] = useState("");
//   const [feedback, setFeedback] = useState(null); // "correct" | "wrong" | null
//   const [koinsThisRound, setKoinsThisRound] = useState(0);

//   function checkGuess() {
//     const correct = guess.trim().toLowerCase() === puzzles[index].answer.toLowerCase();
//     setFeedback(correct ? "correct" : "wrong");

//     if (correct) {
//       setKoinsThisRound((k) => k + KOINS_PER_GUESS);
//       if (onKoinsEarned) onKoinsEarned(KOINS_PER_GUESS);
//     }
//   }

//   function next() {
//     setIndex((i) => (i + 1) % puzzles.length);
//     setGuess("");
//     setFeedback(null);
//   }

//   const puzzle = puzzles[index];

//   return (
//     <Card>
//       <h3 className="font-semibold text-lg text-[#2D3436] mb-1">Guess the Book</h3>
//       <p className="text-xs text-[#636E72] mb-4">Decode the emoji clue</p>

//       <div className="text-5xl text-center mb-4">{puzzle.emojis}</div>

//       <input
//         value={guess}
//         onChange={(e) => setGuess(e.target.value)}
//         onKeyDown={(e) => e.key === "Enter" && checkGuess()}
//         placeholder="Type the book title..."
//         disabled={feedback === "correct"}
//         className="w-full border-2 border-gray-200 focus:border-[#0984E3] rounded-lg px-3 py-2 text-sm outline-none transition-colors"
//       />

//       {feedback === "wrong" && (
//         <p className="text-[#E17055] text-sm mt-2">Not quite — try again!</p>
//       )}
//       {feedback === "correct" && (
//         <p className="text-green-600 text-sm mt-2 font-medium">
//           Correct! +{KOINS_PER_GUESS} KOINS 🎉
//         </p>
//       )}

//       <div className="flex gap-2 mt-4">
//         {feedback !== "correct" ? (
//           <button
//             onClick={checkGuess}
//             className="flex-1 px-4 py-2 rounded-lg bg-[#0984E3] text-white text-sm font-medium hover:bg-[#0870c2] transition-colors"
//           >
//             Submit Guess
//           </button>
//         ) : (
//           <button
//             onClick={next}
//             className="flex-1 px-4 py-2 rounded-lg bg-[#6C5CE7] text-white text-sm font-medium hover:bg-[#5b4bd6] transition-colors"
//           >
//             Next Puzzle
//           </button>
//         )}
//       </div>
//     </Card>
//   );
// };

// export default GuessTheBook;