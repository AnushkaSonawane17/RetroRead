import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GuessPage = () => {
  const navigate = useNavigate();
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
    <div className="min-h-screen bg-gradient-to-b from-[#1a0f0a] via-[#2d1a0e] to-[#1a0f0a] py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-2xl p-6 border border-[#D4A017]/10 shadow-2xl mb-6">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-[#1a0f0a]/80 text-[#D4A017] rounded-full text-sm border border-[#D4A017]/20 hover:border-[#D4A017]/50 transition"
            >
              ← Back
            </button>
            <div>
              <h1 className="text-3xl font-bold text-[#D4A017]">🎯 Guess The Book</h1>
              <p className="text-[#D4A017]/50 text-sm mt-1">Can you guess the book from the emoji and clue?</p>
            </div>
          </div>
        </div>

        {/* Game */}
        <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-2xl p-8 border border-[#D4A017]/10 shadow-2xl">
          {!showResult ? (
            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#D4A017]/50">Round {currentRound + 1} of {books.length}</span>
                  <span className="text-sm text-[#D4A017]">⭐ {koinsEarned} KOINS</span>
                </div>
                <span className="text-sm text-[#f5ede4]">Score: {score}</span>
              </div>

              <div className="w-full h-1.5 bg-[#1a0f0a]/80 rounded-full mb-6">
                <div 
                  className="h-full bg-gradient-to-r from-[#D4A017] to-[#8B6914] rounded-full transition-all duration-500"
                  style={{ width: `${((currentRound + 1) / books.length) * 100}%` }}
                />
              </div>

              <div className="text-center mb-8">
                <div className="text-7xl mb-4">{books[currentRound].emoji}</div>
                <p className="text-lg text-[#D4A017]/50">💡 {books[currentRound].clue}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {books.map((book) => (
                  <button
                    key={book.title}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
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
            <div className="text-center py-12">
              <div className="text-6xl mb-4">{score >= 5 ? '🏆' : score >= 3 ? '📚' : '📖'}</div>
              <h2 className="text-3xl font-bold text-[#f5ede4]">Game Complete!</h2>
              <p className="text-[#D4A017] text-xl mt-2">You guessed {score}/{books.length} correctly</p>
              <p className="text-emerald-400 text-lg mt-1">Earned {koinsEarned} KOINS! ⭐</p>
              <div className="flex gap-4 justify-center mt-6">
                <button
                  onClick={resetGame}
                  className="px-8 py-3 bg-gradient-to-r from-[#D4A017] to-[#8B6914] text-[#1a0f0a] rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#D4A017]/20 transition"
                >
                  Play Again
                </button>
                <button
                  onClick={() => navigate('/gamification')}
                  className="px-8 py-3 bg-[#1a0f0a]/80 text-[#D4A017] rounded-full text-sm border border-[#D4A017]/20 hover:border-[#D4A017]/50 transition"
                >
                  🏠 Back to Hub
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GuessPage;