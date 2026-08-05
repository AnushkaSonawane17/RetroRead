import React from 'react';
import { Card } from '../Common';
import { KoinCounter, BadgeDisplay } from '../Gamification';

const ProfilePage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">My Profile</h1>
      <Card>
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#0984E3] to-[#6C5CE7] flex items-center justify-center text-white text-2xl font-bold">
            JD
          </div>
          <div>
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-[#636E72]">john@example.com</p>
          </div>
        </div>
      </Card>
      <KoinCounter koins={250} streak={7} level={3} />
      <BadgeDisplay />
    </div>
  );
};

export default ProfilePage;