import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StreakPage = () => {
  const navigate = useNavigate();
  const [streak, setStreak] = useState(7);
  const [days, setDays] = useState([]);
  const [logs, setLogs] = useState([
    { date: 'Today', time: '2 hours', book: 'Atomic Habits', pages: 45 },
    { date: 'Yesterday', time: '1.5 hours', book: 'Ikigai', pages: 32 },
    { date: '2 days ago', time: '2 hours', book: 'Deep Work', pages: 50 },
    { date: '3 days ago', time: '1 hour', book: 'Sapiens', pages: 28 },
  ]);

  useEffect(() => {
    const today = new Date();
    const weekDays = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      weekDays.push({
        date: date,
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        dateNum: date.getDate(),
        read: i < streak
      });
    }
    setDays(weekDays);
  }, [streak]);

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
              <h1 className="text-3xl font-bold text-[#D4A017]">🔥 Reading Streak</h1>
              <p className="text-[#D4A017]/50 text-sm mt-1">Keep reading daily to maintain your streak!</p>
            </div>
          </div>
        </div>

        {/* Streak Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#D4A017]/10">
            <div className="text-3xl font-bold text-[#D4A017]">{streak}</div>
            <div className="text-xs text-[#D4A017]/50">Day Streak</div>
          </div>
          <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#D4A017]/10">
            <div className="text-3xl font-bold text-[#f5ede4]">🔥</div>
            <div className="text-xs text-[#D4A017]/50">Best Streak: 14 days</div>
          </div>
          <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#D4A017]/10">
            <div className="text-3xl font-bold text-emerald-400">⚡</div>
            <div className="text-xs text-[#D4A017]/50">Next: {30 - streak} days to go</div>
          </div>
          <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#D4A017]/10">
            <div className="text-3xl font-bold text-[#D4A017]">⭐</div>
            <div className="text-xs text-[#D4A017]/50">{streak * 5} KOINS Earned</div>
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-2xl p-6 border border-[#D4A017]/10 shadow-xl mb-6">
          <h3 className="font-bold text-[#f5ede4] mb-4">📅 This Week</h3>
          <div className="grid grid-cols-7 gap-3">
            {days.map((day, index) => (
              <div key={index} className="text-center">
                <div className="text-xs text-[#D4A017]/50 mb-1">{day.day}</div>
                <div className={`
                  w-12 h-12 mx-auto rounded-full flex items-center justify-center text-sm font-bold
                  ${day.read 
                    ? 'bg-gradient-to-r from-[#D4A017] to-[#8B6914] text-[#1a0f0a] shadow-lg shadow-[#D4A017]/20' 
                    : 'bg-[#1a0f0a]/60 text-[#D4A017]/30 border border-[#D4A017]/10'}
                `}>
                  {day.dateNum}
                </div>
                <div className="text-[10px] text-[#D4A017]/30 mt-1">
                  {day.read ? '✅ Read' : '⬜ Missed'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reading Log */}
        <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-2xl p-6 border border-[#D4A017]/10 shadow-xl">
          <h3 className="font-bold text-[#f5ede4] mb-4">📚 Recent Reading Log</h3>
          <div className="space-y-3">
            {logs.map((log, index) => (
              <div key={index} className="bg-[#1a0f0a]/80 rounded-xl p-3 flex items-center justify-between border border-[#D4A017]/5 hover:border-[#D4A017]/20 transition">
                <div>
                  <div className="font-medium text-[#f5ede4] text-sm">{log.book}</div>
                  <div className="text-xs text-[#D4A017]/30">{log.date} • {log.pages} pages</div>
                </div>
                <div className="text-sm text-[#D4A017]">{log.time}</div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 bg-gradient-to-r from-[#D4A017] to-[#8B6914] text-[#1a0f0a] rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#D4A017]/20 transition">
            + Log Today's Reading
          </button>
        </div>
      </div>
    </div>
  );
};

export default StreakPage;