import React from 'react';
import { useNavigate } from 'react-router-dom';

const BadgesPage = () => {
  const navigate = useNavigate();

  const badges = [
    { id: 1, name: 'First Reader', icon: '📖', description: 'Read your first book', unlocked: true, date: 'Jan 2024' },
    { id: 2, name: 'Bookworm', icon: '🐛', description: 'Read 10 books', unlocked: true, date: 'Feb 2024' },
    { id: 3, name: 'Streak Master', icon: '🔥', description: '7-day reading streak', unlocked: true, date: 'Mar 2024' },
    { id: 4, name: 'Book Collector', icon: '📚', description: 'Own 20 books', unlocked: false, progress: 15 },
    { id: 5, name: 'Reviewer Pro', icon: '✍️', description: 'Write 5 reviews', unlocked: false, progress: 3 },
    { id: 6, name: 'Exchange Expert', icon: '🔄', description: 'Complete 10 exchanges', unlocked: false, progress: 6 },
    { id: 7, name: 'Trivia Champion', icon: '🧠', description: 'Win 5 trivia games', unlocked: true, date: 'Apr 2024' },
    { id: 8, name: 'Guess Master', icon: '🎯', description: 'Guess 10 books correctly', unlocked: false, progress: 7 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0f0a] via-[#2d1a0e] to-[#1a0f0a] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
              <h1 className="text-3xl font-bold text-[#D4A017]">🏅 My Badges</h1>
              <p className="text-[#D4A017]/50 text-sm mt-1">Collect all badges by completing achievements</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#D4A017]/10">
            <div className="text-2xl font-bold text-[#D4A017]">{badges.filter(b => b.unlocked).length}</div>
            <div className="text-xs text-[#D4A017]/50">Unlocked</div>
          </div>
          <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#D4A017]/10">
            <div className="text-2xl font-bold text-[#D4A017]/30">{badges.filter(b => !b.unlocked).length}</div>
            <div className="text-xs text-[#D4A017]/50">Locked</div>
          </div>
          <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#D4A017]/10">
            <div className="text-2xl font-bold text-[#D4A017]">{Math.round((badges.filter(b => b.unlocked).length / badges.length) * 100)}%</div>
            <div className="text-xs text-[#D4A017]/50">Completion</div>
          </div>
          <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#D4A017]/10">
            <div className="text-2xl font-bold text-[#D4A017]">🏆</div>
            <div className="text-xs text-[#D4A017]/50">Keep Going!</div>
          </div>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`
                rounded-2xl p-6 text-center transition-all duration-300
                ${badge.unlocked 
                  ? 'bg-gradient-to-br from-[#D4A017]/20 to-[#8B6914]/10 border-2 border-[#D4A017]/30 hover:scale-105 hover:shadow-xl hover:shadow-[#D4A017]/20 cursor-pointer' 
                  : 'bg-[#1a0f0a]/60 border-2 border-[#D4A017]/5 opacity-60'
                }
              `}
            >
              <div className={`text-5xl mb-3 ${badge.unlocked ? 'animate-bounce-slow' : ''}`}>
                {badge.icon}
              </div>
              <h3 className="font-bold text-[#f5ede4] text-lg">{badge.name}</h3>
              <p className="text-sm text-[#D4A017]/50 mt-1">{badge.description}</p>
              {badge.unlocked ? (
                <div className="mt-3">
                  <span className="text-xs text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">✅ Unlocked • {badge.date}</span>
                </div>
              ) : (
                <div className="mt-3">
                  <div className="w-full h-1.5 bg-[#1a0f0a]/80 rounded-full mb-2">
                    <div 
                      className="h-full bg-gradient-to-r from-[#D4A017] to-[#8B6914] rounded-full transition-all duration-500"
                      style={{ width: `${(badge.progress / 10) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-[#D4A017]/30">🔒 {badge.progress}/10</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BadgesPage;