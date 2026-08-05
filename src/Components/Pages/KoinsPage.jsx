import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const KoinsPage = () => {
  const navigate = useNavigate();
  const [showBonus, setShowBonus] = useState(false);

  const transactions = [
    { id: 1, type: 'Daily Bonus', amount: '+25', date: 'Today', icon: '🎁' },
    { id: 2, type: 'Book Completed', amount: '+50', date: 'Today', icon: '📚' },
    { id: 3, type: 'Trivia Win', amount: '+20', date: 'Yesterday', icon: '🧠' },
    { id: 4, type: 'Streak Bonus', amount: '+15', date: 'Yesterday', icon: '🔥' },
    { id: 5, type: 'Scratch Card', amount: '+100', date: '2 days ago', icon: '🎰' },
    { id: 6, type: 'Book Exchange', amount: '+30', date: '3 days ago', icon: '🔄' },
  ];

  const handleDailyBonus = () => {
    setShowBonus(true);
    setTimeout(() => setShowBonus(false), 3000);
  };

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
              <h1 className="text-3xl font-bold text-[#D4A017]">⭐ My KOINS</h1>
              <p className="text-[#D4A017]/50 text-sm mt-1">Earn KOINS by reading, playing games, and more</p>
            </div>
          </div>
        </div>

        {/* Balance Card */}
        <div className="bg-gradient-to-br from-[#D4A017]/20 to-[#8B6914]/20 rounded-2xl p-8 border border-[#D4A017]/30 shadow-2xl mb-6 text-center">
          <div className="text-6xl mb-2">💰</div>
          <div className="text-5xl font-bold text-[#D4A017]">2,450</div>
          <div className="text-[#D4A017]/50 mt-1">Total KOINS</div>
          <div className="flex gap-4 justify-center mt-4">
            <button 
              onClick={handleDailyBonus}
              className="px-6 py-2 bg-gradient-to-r from-[#D4A017] to-[#8B6914] text-[#1a0f0a] rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#D4A017]/20 transition relative"
            >
              🎁 Daily Bonus
              {showBonus && (
                <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full animate-bounce">
                  +25 KOINS!
                </span>
              )}
            </button>
            <button className="px-6 py-2 bg-[#1a0f0a]/80 text-[#D4A017] rounded-full text-sm border border-[#D4A017]/20 hover:border-[#D4A017]/50 transition">
              💰 Redeem
            </button>
          </div>
        </div>

        {/* How to Earn */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#D4A017]/10">
            <div className="text-2xl mb-1">📖</div>
            <div className="text-xs font-semibold text-[#f5ede4]">Read Book</div>
            <div className="text-[10px] text-[#D4A017]/50">+50 KOINS</div>
          </div>
          <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#D4A017]/10">
            <div className="text-2xl mb-1">🔥</div>
            <div className="text-xs font-semibold text-[#f5ede4]">Streak</div>
            <div className="text-[10px] text-[#D4A017]/50">+15 KOINS</div>
          </div>
          <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#D4A017]/10">
            <div className="text-2xl mb-1">🧠</div>
            <div className="text-xs font-semibold text-[#f5ede4]">Trivia</div>
            <div className="text-[10px] text-[#D4A017]/50">+20 KOINS</div>
          </div>
          <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#D4A017]/10">
            <div className="text-2xl mb-1">🎰</div>
            <div className="text-xs font-semibold text-[#f5ede4]">Scratch Card</div>
            <div className="text-[10px] text-[#D4A017]/50">+100 KOINS</div>
          </div>
        </div>

        {/* Transactions */}
        <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-2xl p-6 border border-[#D4A017]/10 shadow-xl">
          <h3 className="font-bold text-[#f5ede4] mb-4">📊 Recent Transactions</h3>
          <div className="space-y-3">
            {transactions.map((tx) => (
              <div key={tx.id} className="bg-[#1a0f0a]/80 rounded-xl p-3 flex items-center justify-between border border-[#D4A017]/5 hover:border-[#D4A017]/20 transition">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{tx.icon}</span>
                  <div>
                    <div className="font-medium text-[#f5ede4] text-sm">{tx.type}</div>
                    <div className="text-xs text-[#D4A017]/30">{tx.date}</div>
                  </div>
                </div>
                <div className={`font-bold ${tx.amount.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                  {tx.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KoinsPage;