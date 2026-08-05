import React from 'react';

const BadgeDisplay = ({ badges = [] }) => {
  const defaultBadges = [
    { id: 1, name: 'First Reader', icon: '📖', unlocked: true },
    { id: 2, name: 'Bookworm', icon: '🐛', unlocked: true },
    { id: 3, name: 'Streak Master', icon: '🔥', unlocked: true },
    { id: 4, name: 'Book Collector', icon: '📚', unlocked: false },
  ];

  const displayBadges = badges.length > 0 ? badges : defaultBadges;

  return (
    <div>
      <h3 className="font-semibold text-lg text-[#2D3436] mb-3">Your Badges</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {displayBadges.map((badge) => (
          <div
            key={badge.id}
            className={`
              p-3 rounded-lg text-center transition-all duration-200
              ${badge.unlocked 
                ? 'bg-gradient-to-br from-[#0984E3]/10 to-[#6C5CE7]/10 border-2 border-[#0984E3]/30' 
                : 'bg-gray-50 border-2 border-gray-200 opacity-50'
              }
            `}
          >
            <div className="text-3xl mb-1">{badge.icon}</div>
            <p className="text-xs font-medium text-[#2D3436] truncate">{badge.name}</p>
            {!badge.unlocked && (
              <span className="text-xs text-[#E17055]">🔒 Locked</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BadgeDisplay;