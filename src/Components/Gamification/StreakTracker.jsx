import React, { useState, useEffect } from 'react';

const StreakTracker = ({ initialStreak = 7, lastReadDate = null }) => {
  const [streak, setStreak] = useState(initialStreak);
  const [days, setDays] = useState([]);
  const [currentStreak, setCurrentStreak] = useState(initialStreak);

  // Generate last 7 days
  useEffect(() => {
    const today = new Date();
    const weekDays = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      weekDays.push({
        date: date,
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        read: i < streak // Simulate reading days
      });
    }
    setDays(weekDays);
  }, [streak]);

  const getStreakEmoji = () => {
    if (streak >= 30) return '🔥🔥🔥';
    if (streak >= 14) return '🔥🔥';
    if (streak >= 7) return '🔥';
    if (streak >= 3) return '💪';
    return '📖';
  };

  const getStreakColor = () => {
    if (streak >= 30) return 'from-red-600 to-red-400';
    if (streak >= 14) return 'from-orange-600 to-orange-400';
    if (streak >= 7) return 'from-[#D4A017] to-[#8B6914]';
    if (streak >= 3) return 'from-blue-600 to-blue-400';
    return 'from-gray-600 to-gray-400';
  };

  return (
    <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-2xl p-6 border border-[#D4A017]/10 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-lg text-[#f5ede4]">🔥 Reading Streak</h3>
          <p className="text-[#D4A017]/50 text-sm">Keep reading daily to maintain your streak!</p>
        </div>
        <div className="text-right">
          <div className="text-3xl">{getStreakEmoji()}</div>
          <div className="text-2xl font-bold text-[#D4A017]">{streak} days</div>
        </div>
      </div>

      {/* Streak Calendar */}
      <div className="grid grid-cols-7 gap-2 mb-4">
        {days.map((day, index) => (
          <div key={index} className="text-center">
            <div className={`text-xs text-[#D4A017]/50 mb-1`}>{day.day}</div>
            <div className={`
              w-10 h-10 mx-auto rounded-full flex items-center justify-center text-sm font-bold
              ${day.read 
                ? 'bg-gradient-to-r from-[#D4A017] to-[#8B6914] text-[#1a0f0a] shadow-lg shadow-[#D4A017]/20' 
                : 'bg-[#1a0f0a]/60 text-[#D4A017]/30 border border-[#D4A017]/10'}
            `}>
              {day.read ? '✓' : '○'}
            </div>
          </div>
        ))}
      </div>

      {/* Streak Progress */}
      <div className="bg-[#1a0f0a]/80 rounded-xl p-4 border border-[#D4A017]/10">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-[#f5ede4]">Next Milestone</span>
          <span className="text-[#D4A017]">{streak}/30 days</span>
        </div>
        <div className="w-full h-2 bg-[#1a0f0a]/80 rounded-full overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r ${getStreakColor()} rounded-full transition-all duration-500`}
            style={{ width: `${Math.min((streak / 30) * 100, 100)}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-[#D4A017]/30 mt-1">
          <span>Beginner</span>
          <span>🔥 7 Days</span>
          <span>🔥🔥 14 Days</span>
          <span>🔥🔥🔥 30 Days</span>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <button className="flex-1 px-4 py-2 bg-gradient-to-r from-[#D4A017] to-[#8B6914] text-[#1a0f0a] rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#D4A017]/20 transition">
          Log Today's Reading
        </button>
        <button className="px-4 py-2 bg-[#1a0f0a]/80 text-[#D4A017] rounded-full text-sm border border-[#D4A017]/20 hover:border-[#D4A017]/50 transition">
          📊 Stats
        </button>
      </div>
    </div>
  );
};

export default StreakTracker;