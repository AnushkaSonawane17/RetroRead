import React from 'react';
import Card from '../Common/Card';

const KoinCounter = ({ koins = 0, streak = 0, level = 1, nextLevelKoins = 100 }) => {
  const progress = (koins / nextLevelKoins) * 100;

  return (
    <Card className="bg-gradient-to-r from-[#FDCB6E]/10 to-[#FDCB6E]/5 border-2 border-[#FDCB6E]/30">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-[#FDCB6E] to-[#F39C12] rounded-full flex items-center justify-center text-2xl shadow-lg">
            ⭐
          </div>
          <div>
            <p className="text-sm text-[#636E72]">Your Balance</p>
            <p className="text-3xl font-bold text-[#2D3436]">{koins} KOINS</p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🔥</span>
            <div>
              <p className="text-sm text-[#636E72]">Streak</p>
              <p className="font-bold text-[#2D3436]">{streak} days</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between text-sm text-[#636E72] mb-1">
          <span>Level {level}</span>
          <span>{koins} / {nextLevelKoins} KOINS</span>
        </div>
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#FDCB6E] to-[#F39C12] rounded-full transition-all duration-500"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
    </Card>
  );
};

export default KoinCounter;