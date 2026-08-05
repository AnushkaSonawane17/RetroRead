import React, { useEffect, useState } from 'react';
import { Coins, Flame, Trophy, Award, BookOpen, Target, Star } from 'lucide-react';

const user = { name: 'John Doe', email: 'john@example.com', koins: 250, streak: 7, level: 3 };

const badges = [
  { id: 1, label: 'First Chapter', icon: BookOpen, earned: true },
  { id: 2, label: '7-Day Streak', icon: Flame, earned: true },
  { id: 3, label: 'Club Joiner', icon: Trophy, earned: true },
  { id: 4, label: 'Marathon Reader', icon: Target, earned: false },
  { id: 5, label: 'Top Rated', icon: Star, earned: false },
  { id: 6, label: 'Bookworm Elite', icon: Award, earned: false },
];

function useCountUp(target, duration = 1000) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return value;
}

function MiniReadingBook() {
  return (
    <div className="relative w-14 h-9" style={{ perspective: '600px' }}>
      <div className="absolute inset-0 flex rounded overflow-hidden shadow-sm">
        <div className="w-1/2 bg-[#F6EFE3] border-r border-[#1E2A42]/10" />
        <div className="w-1/2 bg-[#F6EFE3]" />
      </div>
      {[0, 1].map((i) => (
        <div
          key={i}
          className="mini-page"
          style={{ animation: `mini-flip 3s ease-in-out ${i * 1.4}s infinite`, zIndex: 2 - i }}
        />
      ))}
    </div>
  );
}

const ProfilePage = () => {
  const [mounted, setMounted] = useState(false);
  const koinCount = useCountUp(user.koins, 1200);

  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="min-h-screen w-full bg-[#F6EFE3] py-10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Work+Sans:wght@400;500;600&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'Work Sans', sans-serif; }

        @keyframes badge-in {
          0% { opacity: 0; transform: scale(0.7) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .badge-in { animation: badge-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; opacity: 0; }

        @keyframes flame-flicker {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.12) rotate(-4deg); }
        }
        .flame-flicker { animation: flame-flicker 1.8s ease-in-out infinite; }

        @keyframes ring-progress { from { stroke-dashoffset: 226; } }
        .ring-progress { animation: ring-progress 1.2s ease-out forwards; }

        .mini-page {
          position: absolute; top: 0; right: 0; width: 50%; height: 100%;
          background: #F6EFE3; border-left: 1px solid rgba(30,42,66,0.12);
          transform-origin: left center; backface-visibility: hidden;
          border-radius: 0 3px 3px 0;
        }
        @keyframes mini-flip {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(-172deg); }
          100% { transform: rotateY(0deg); }
        }
      `}</style>

      <div className="font-body relative z-10 max-w-4xl mx-auto px-4 sm:px-6 space-y-6">

        {/* ===== Header ===== */}
        <div
          className={`bg-[#FFFBF3] rounded-2xl p-6 border border-[#E2D5BC] shadow-[0_8px_20px_-14px_rgba(30,42,66,0.3)] transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center justify-between mb-5">
            <h1 className="font-display font-bold text-3xl text-[#1E2A42]">My Profile</h1>
            <MiniReadingBook />
          </div>
          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-[#D8472F] flex items-center justify-center text-[#FFFBF3] text-2xl font-display font-bold shadow-[0_10px_20px_-10px_rgba(216,71,47,0.5)]">
                JD
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#A9812F] border-2 border-[#FFFBF3] flex items-center justify-center text-[10px] font-bold text-[#FFFBF3]">
                {user.level}
              </div>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-[#1E2A42]">{user.name}</h2>
              <p className="text-[#8A7F6B] text-sm">{user.email}</p>
            </div>
          </div>
        </div>

        {/* ===== Koin / Streak / Level ===== */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-4 transition-all duration-700 delay-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="bg-[#FFFBF3] rounded-2xl p-5 border border-[#E2D5BC] shadow-[0_8px_20px_-14px_rgba(30,42,66,0.3)] flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#A9812F]/10 border border-[#A9812F]/30">
              <Coins size={20} className="text-[#A9812F]" />
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-[#1E2A42] tabular-nums">{koinCount}</p>
              <p className="text-xs text-[#8A7F6B]">Koins earned</p>
            </div>
          </div>

          <div className="bg-[#FFFBF3] rounded-2xl p-5 border border-[#E2D5BC] shadow-[0_8px_20px_-14px_rgba(30,42,66,0.3)] flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D8472F]/10 border border-[#D8472F]/30">
              <Flame size={20} className="text-[#D8472F] flame-flicker" />
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-[#1E2A42]">{user.streak} days</p>
              <p className="text-xs text-[#8A7F6B]">Current streak</p>
            </div>
          </div>

          <div className="bg-[#FFFBF3] rounded-2xl p-5 border border-[#E2D5BC] shadow-[0_8px_20px_-14px_rgba(30,42,66,0.3)] flex items-center gap-4">
            <div className="relative h-12 w-12 shrink-0">
              <svg className="h-12 w-12 -rotate-90" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="34" fill="none" stroke="#EDE2CE" strokeWidth="8" />
                <circle
                  cx="40" cy="40" r="34" fill="none" stroke="#1E2A42" strokeWidth="8" strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 34} strokeDashoffset={2 * Math.PI * 34 * (1 - 0.45)}
                  className="ring-progress"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center font-display text-xs font-bold text-[#1E2A42]">
                Lv{user.level}
              </span>
            </div>
            <div>
              <p className="font-display text-base font-bold text-[#1E2A42]">Level {user.level}</p>
              <p className="text-xs text-[#8A7F6B]">45% to next level</p>
            </div>
          </div>
        </div>

        {/* ===== Badges ===== */}
        <div
          className={`bg-[#FFFBF3] rounded-2xl p-6 border border-[#E2D5BC] shadow-[0_8px_20px_-14px_rgba(30,42,66,0.3)] transition-all duration-700 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="font-display font-semibold text-lg text-[#1E2A42] mb-5">Badges</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {badges.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.id}
                  className={`badge-in flex flex-col items-center text-center gap-2 rounded-xl p-4 border ${
                    b.earned ? 'border-[#A9812F]/40 bg-[#A9812F]/[0.06]' : 'border-[#E2D5BC] bg-[#F6EFE3] opacity-50'
                  }`}
                  style={{ animationDelay: `${300 + i * 90}ms` }}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${
                      b.earned ? 'bg-[#A9812F]/15 text-[#A9812F]' : 'bg-[#E2D5BC]/60 text-[#8A7F6B]'
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                  <p className="text-xs font-medium text-[#1E2A42]">{b.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;