import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ScratchPage = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([
    { id: 1, revealed: false, prize: '20 KOINS', emoji: '⭐', color: 'from-[#D4A017] to-[#FFD700]' },
    { id: 2, revealed: false, prize: '50 KOINS', emoji: '🌟', color: 'from-blue-500 to-purple-500' },
    { id: 3, revealed: false, prize: '100 KOINS', emoji: '🎉', color: 'from-red-500 to-orange-500' },
    { id: 4, revealed: false, prize: 'Free Book', emoji: '📚', color: 'from-emerald-500 to-green-500' },
    { id: 5, revealed: false, prize: '200 KOINS', emoji: '🏆', color: 'from-amber-500 to-yellow-500' },
    { id: 6, revealed: false, prize: '25 KOINS', emoji: '🎁', color: 'from-pink-500 to-rose-500' },
  ]);

  const handleScratch = (id) => {
    setCards(cards.map(card => 
      card.id === id ? { ...card, revealed: true } : card
    ));
  };

  const totalWon = cards.filter(c => c.revealed).reduce((sum, c) => {
    const amount = parseInt(c.prize) || 0;
    return sum + amount;
  }, 0);

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
              <h1 className="text-3xl font-bold text-[#D4A017]">🎰 Scratch Cards</h1>
              <p className="text-[#D4A017]/50 text-sm mt-1">Scratch to reveal your prize!</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#D4A017]/10">
            <div className="text-2xl font-bold text-[#D4A017]">{cards.filter(c => c.revealed).length}</div>
            <div className="text-xs text-[#D4A017]/50">Cards Scratched</div>
          </div>
          <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#D4A017]/10">
            <div className="text-2xl font-bold text-[#D4A017]">{cards.filter(c => !c.revealed).length}</div>
            <div className="text-xs text-[#D4A017]/50">Cards Remaining</div>
          </div>
          <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#D4A017]/10">
            <div className="text-2xl font-bold text-emerald-400">{totalWon}</div>
            <div className="text-xs text-[#D4A017]/50">Total KOINS Won</div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-2xl p-6 border border-[#D4A017]/10 shadow-xl hover:shadow-2xl transition"
            >
              <div 
                className={`relative w-full h-48 rounded-xl overflow-hidden cursor-pointer bg-gradient-to-br ${
                  !card.revealed ? 'from-[#1a0f0a] to-[#2d1a0e] border-2 border-[#D4A017]/20' : card.color
                }`}
                onClick={() => handleScratch(card.id)}
              >
                {!card.revealed ? (
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="text-6xl mb-2">🎁</div>
                    <p className="text-[#D4A017]/60 text-sm">Click to scratch!</p>
                    <div className="w-24 h-1 bg-[#D4A017]/20 rounded-full mt-2" />
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="text-6xl mb-2">{card.emoji}</div>
                    <p className="text-2xl font-bold text-white">🎉 {card.prize}!</p>
                    <p className="text-white/70 text-sm mt-1">Congratulations!</p>
                  </div>
                )}
              </div>
              <div className="flex gap-2 mt-4">
                <button 
                  onClick={() => handleScratch(card.id)}
                  disabled={card.revealed}
                  className={`flex-1 px-4 py-2 rounded-full text-sm font-semibold transition ${
                    card.revealed 
                      ? 'bg-[#1a0f0a]/60 text-[#D4A017]/30 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-[#D4A017] to-[#8B6914] text-[#1a0f0a] hover:shadow-lg hover:shadow-[#D4A017]/20'
                  }`}
                >
                  {card.revealed ? '✅ Claimed' : '🔄 Scratch'}
                </button>
                {card.revealed && (
                  <button className="px-4 py-2 bg-[#1a0f0a]/80 text-[#D4A017] rounded-full text-sm border border-[#D4A017]/20 hover:border-[#D4A017]/50 transition">
                    💰 Claim
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScratchPage;