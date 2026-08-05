import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProgressPage = () => {
  const navigate = useNavigate();

  const progressData = [
    { title: 'Reading Progress', current: 150, total: 500, icon: '📖', color: 'from-[#D4A017] to-[#8B6914]' },
    { title: 'Books Completed', current: 3, total: 12, icon: '📚', color: 'from-emerald-500 to-green-500' },
    { title: 'Pages Read', current: 450, total: 1000, icon: '📄', color: 'from-blue-500 to-purple-500' },
    { title: 'Book Exchange', current: 6, total: 10, icon: '🔄', color: 'from-orange-500 to-red-500' },
    { title: 'Reviews Written', current: 3, total: 5, icon: '✍️', color: 'from-pink-500 to-rose-500' },
    { title: 'Trivia Wins', current: 4, total: 10, icon: '🧠', color: 'from-purple-500 to-indigo-500' },
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
              <h1 className="text-3xl font-bold text-[#D4A017]">📊 Progress Dashboard</h1>
              <p className="text-[#D4A017]/50 text-sm mt-1">Track your reading achievements</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#D4A017]/10">
            <div className="text-2xl font-bold text-[#D4A017]">72%</div>
            <div className="text-xs text-[#D4A017]/50">Overall Progress</div>
          </div>
          <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#D4A017]/10">
            <div className="text-2xl font-bold text-emerald-400">12</div>
            <div className="text-xs text-[#D4A017]/50">Books Read</div>
          </div>
          <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#D4A017]/10">
            <div className="text-2xl font-bold text-[#D4A017]">450</div>
            <div className="text-xs text-[#D4A017]/50">Pages Read</div>
          </div>
          <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#D4A017]/10">
            <div className="text-2xl font-bold text-[#D4A017]">7</div>
            <div className="text-xs text-[#D4A017]/50">Day Streak</div>
          </div>
        </div>

        {/* Progress Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {progressData.map((item, index) => (
            <div key={index} className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-2xl p-6 border border-[#D4A017]/10 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-[#f5ede4]">{item.title}</h3>
                  <p className="text-[#D4A017]/50 text-sm">{item.current} / {item.total}</p>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-3 bg-[#1a0f0a]/80 rounded-full overflow-hidden border border-[#D4A017]/10">
                  <div 
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${(item.current / item.total) * 100}%` }}
                  />
                </div>
                <div className="absolute -top-5 right-0 text-sm font-bold text-[#D4A017]">
                  {Math.round((item.current / item.total) * 100)}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;