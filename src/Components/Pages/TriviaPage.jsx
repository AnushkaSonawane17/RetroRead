import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TriviaPage = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [koinsEarned, setKoinsEarned] = useState(0);

  const questions = [
    {
      question: "Who wrote '1984'?",
      options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "H.G. Wells"],
      correct: 0,
      hint: "Big Brother is watching you"
    },
    {
      question: "What is the first book in the Harry Potter series?",
      options: ["Chamber of Secrets", "Prisoner of Azkaban", "Sorcerer's Stone", "Goblet of Fire"],
      correct: 2,
      hint: "The boy who lived"
    },
    {
      question: "Which author wrote 'The Great Gatsby'?",
      options: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "William Faulkner"],
      correct: 1,
      hint: "The green light at the end of the dock"
    },
    {
      question: "In 'To Kill a Mockingbird', who is the narrator?",
      options: ["Atticus Finch", "Scout Finch", "Jem Finch", "Boo Radley"],
      correct: 1,
      hint: "She's the daughter of a lawyer in Maycomb"
    },
    {
      question: "Who wrote 'The Alchemist'?",
      options: ["Paulo Coelho", "Gabriel García Márquez", "Jorge Luis Borges", "Isabel Allende"],
      correct: 0,
      hint: "A shepherd boy's journey to find treasure"
    }
  ];

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
      setKoinsEarned(koinsEarned + 20);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
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
              <h1 className="text-3xl font-bold text-[#D4A017]">🧠 Book Trivia</h1>
              <p className="text-[#D4A017]/50 text-sm mt-1">Test your book knowledge and earn KOINS!</p>
            </div>
          </div>
        </div>

        {/* Game */}
        <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-2xl p-8 border border-[#D4A017]/10 shadow-2xl">
          {!showResult ? (
            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#D4A017]/50">Question {currentQuestion + 1} of {questions.length}</span>
                  <span className="text-sm text-[#D4A017]">⭐ {koinsEarned} KOINS</span>
                </div>
                <span className="text-sm text-[#f5ede4]">Score: {score}</span>
              </div>

              <div className="w-full h-1.5 bg-[#1a0f0a]/80 rounded-full mb-6">
                <div 
                  className="h-full bg-gradient-to-r from-[#D4A017] to-[#8B6914] rounded-full transition-all duration-500"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>

              <div className="bg-[#1a0f0a]/60 rounded-xl p-4 mb-6 border border-[#D4A017]/10">
                <p className="text-lg font-semibold text-[#f5ede4]">{questions[currentQuestion].question}</p>
                <p className="text-sm text-[#D4A017]/30 mt-2">💡 Hint: {questions[currentQuestion].hint}</p>
              </div>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 ${
                      selectedAnswer === null
                        ? 'bg-[#1a0f0a]/80 text-[#f5ede4] hover:bg-[#D4A017]/20 hover:border-[#D4A017]/30'
                        : selectedAnswer === index
                          ? index === questions[currentQuestion].correct
                            ? 'bg-emerald-600/40 text-emerald-400 border-emerald-400'
                            : 'bg-red-600/40 text-red-400 border-red-400'
                          : index === questions[currentQuestion].correct && selectedAnswer !== null
                            ? 'bg-emerald-600/40 text-emerald-400 border-emerald-400'
                            : 'bg-[#1a0f0a]/40 text-[#D4A017]/30'
                    } border border-[#D4A017]/10 hover:border-[#D4A017]/30 transition`}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                  >
                    <span>{option}</span>
                    {selectedAnswer === index && (
                      <span className="float-right">
                        {index === questions[currentQuestion].correct ? '✅' : '❌'}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">{score >= 4 ? '🏆' : score >= 3 ? '📚' : '📖'}</div>
              <h2 className="text-3xl font-bold text-[#f5ede4]">Quiz Complete!</h2>
              <p className="text-[#D4A017] text-xl mt-2">You scored {score}/{questions.length}</p>
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

export default TriviaPage;