import React from 'react';
import { useNavigate } from 'react-router-dom';

const GamificationPage = () => {
  const navigate = useNavigate();

  const features = [
    { name: '🏅 Badges', desc: 'Collect all badges', path: '/gamification/badges', color: 'from-[#D4A017] to-[#FFD700]' },
    { name: '⭐ KOINS', desc: 'Earn and redeem', path: '/gamification/koins', color: 'from-emerald-500 to-green-500' },
    { name: '🧠 Trivia', desc: 'Test your knowledge', path: '/gamification/trivia', color: 'from-blue-500 to-purple-500' },
    { name: '🎯 Guess', desc: 'Guess the book', path: '/gamification/guess', color: 'from-pink-500 to-rose-500' },
    { name: '🔥 Streak', desc: 'Keep reading daily', path: '/gamification/streak', color: 'from-orange-500 to-red-500' },
    { name: '🎰 Scratch', desc: 'Win prizes', path: '/gamification/scratch', color: 'from-purple-500 to-indigo-500' },
    { name: '📊 Progress', desc: 'Track achievements', path: '/gamification/progress', color: 'from-cyan-500 to-blue-500' },
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
              <h1 className="text-3xl font-bold text-[#D4A017]">🎮 Gamification Hub</h1>
              <p className="text-[#D4A017]/50 text-sm mt-1">Earn KOINS, unlock badges, and compete with friends</p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#D4A017]/10">
            <div className="text-2xl font-bold text-[#D4A017]">2,450</div>
            <div className="text-xs text-[#D4A017]/50">⭐ KOINS</div>
          </div>
          <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#D4A017]/10">
            <div className="text-2xl font-bold text-emerald-400">8</div>
            <div className="text-xs text-[#D4A017]/50">🏅 Badges</div>
          </div>
          <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#D4A017]/10">
            <div className="text-2xl font-bold text-[#D4A017]">7</div>
            <div className="text-xs text-[#D4A017]/50">🔥 Day Streak</div>
          </div>
          <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#D4A017]/10">
            <div className="text-2xl font-bold text-[#D4A017]">12</div>
            <div className="text-xs text-[#D4A017]/50">📚 Books Read</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <div
              key={feature.name}
              onClick={() => navigate(feature.path)}
              className={`bg-gradient-to-br ${feature.color} p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg`}
            >
              <div className="text-4xl mb-2">{feature.name.split(' ')[0]}</div>
              <h3 className="font-bold text-white text-lg">{feature.name}</h3>
              <p className="text-white/70 text-sm">{feature.desc}</p>
              <div className="mt-3 text-white/50 text-xs">Click to explore →</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamificationPage;