// // // import React from 'react';

// // // const CommunityPage = () => {
// // //   return (
// // //     <div className="space-y-6">
// // //       <h1 className="text-3xl font-bold">👥 Community</h1>
// // //       <p className="text-[#636E72]">Join reading clubs and discussions</p>
// // //     </div>
// // //   );
// // // };

// // // export default CommunityPage;


// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';

// // const CommunityPage = () => {
// //   const [activeTab, setActiveTab] = useState('all');
// //   const [showCreateModal, setShowCreateModal] = useState(false);

// //   const clubs = [
// //     { id: 1, name: "📚 Fiction Lovers", members: 234, books: 45, description: "Discussing the best fiction from around the world", tag: "Fiction", active: true },
// //     { id: 2, name: "🧠 Self-Help Readers", members: 189, books: 32, description: "Improving ourselves one book at a time", tag: "Self-Help", active: true },
// //     { id: 3, name: "🐉 Fantasy Guild", members: 156, books: 28, description: "Exploring magical worlds and epic adventures", tag: "Fantasy", active: true },
// //     { id: 4, name: "📖 Classics Club", members: 112, books: 20, description: "Reading and discussing timeless literature", tag: "Classics", active: true },
// //     { id: 5, name: "🌍 Non-Fiction Explorers", members: 98, books: 18, description: "Learning from real-world stories and facts", tag: "Non-Fiction", active: false },
// //     { id: 6, name: "🎭 Drama Readers", members: 76, books: 15, description: "Exploring plays and dramatic works", tag: "Drama", active: false },
// //   ];

// //   const discussions = [
// //     { id: 1, title: "What are you reading this week?", author: "Sarah Wilson", replies: 24, likes: 45, time: "2 hours ago", pinned: true },
// //     { id: 2, title: "Best book to start your morning with?", author: "Mike Johnson", replies: 18, likes: 32, time: "5 hours ago", pinned: false },
// //     { id: 3, title: "Book recommendations for beginners", author: "Emily Davis", replies: 31, likes: 56, time: "1 day ago", pinned: false },
// //     { id: 4, title: "How many books do you read per month?", author: "David Brown", replies: 42, likes: 78, time: "3 days ago", pinned: false },
// //   ];

// //   const members = [
// //     { id: 1, name: "Sarah Wilson", books: 156, joined: "2023", avatar: "SW" },
// //     { id: 2, name: "Mike Johnson", books: 89, joined: "2022", avatar: "MJ" },
// //     { id: 3, name: "Emily Davis", books: 234, joined: "2021", avatar: "ED" },
// //     { id: 4, name: "David Brown", books: 67, joined: "2023", avatar: "DB" },
// //     { id: 5, name: "Amanda Lee", books: 143, joined: "2022", avatar: "AL" },
// //   ];

// //   const filteredClubs = activeTab === 'all' ? clubs : clubs.filter(c => c.active);

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-[#1a0f0a] via-[#2d1a0e] to-[#1a0f0a] py-8">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
// //         {/* ===== Header ===== */}
// //         <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-2xl p-6 border border-[#D4A017]/10 shadow-2xl mb-6">
// //           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
// //             <div>
// //               <h1 className="text-3xl font-bold text-[#D4A017]">👥 Community</h1>
// //               <p className="text-[#D4A017]/50 text-sm mt-1">Connect with fellow readers and join discussions</p>
// //             </div>
// //             <div className="flex gap-3">
// //               <button className="px-4 py-2 bg-[#1a0f0a]/80 rounded-full text-sm text-[#D4A017] border border-[#D4A017]/20 hover:border-[#D4A017]/50 transition">
// //                 🌐 Find Groups
// //               </button>
// //               <button 
// //                 onClick={() => setShowCreateModal(!showCreateModal)}
// //                 className="px-6 py-2.5 bg-gradient-to-r from-[#D4A017] to-[#8B6914] text-[#1a0f0a] rounded-full text-sm font-semibold shadow-lg shadow-[#D4A017]/20 hover:shadow-[#D4A017]/40 transition"
// //               >
// //                 + Create Club
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
// //           {/* ===== LEFT COLUMN ===== */}
// //           <div className="lg:col-span-2 space-y-6">
            
// //             {/* ===== Reading Clubs ===== */}
// //             <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-2xl p-5 border border-[#D4A017]/10 shadow-xl">
// //               <div className="flex justify-between items-center mb-4">
// //                 <h2 className="text-lg font-bold text-[#f5ede4]">📚 Reading Clubs</h2>
// //                 <div className="flex gap-2">
// //                   <button 
// //                     className={`text-sm font-medium transition px-3 py-1 rounded-full ${activeTab === 'all' ? 'bg-[#D4A017]/20 text-[#D4A017]' : 'text-[#D4A017]/40 hover:text-[#D4A017]'}`}
// //                     onClick={() => setActiveTab('all')}
// //                   >
// //                     All
// //                   </button>
// //                   <button 
// //                     className={`text-sm font-medium transition px-3 py-1 rounded-full ${activeTab === 'active' ? 'bg-[#D4A017]/20 text-[#D4A017]' : 'text-[#D4A017]/40 hover:text-[#D4A017]'}`}
// //                     onClick={() => setActiveTab('active')}
// //                   >
// //                     Active
// //                   </button>
// //                 </div>
// //               </div>
// //               <div className="space-y-3">
// //                 {filteredClubs.map((club) => (
// //                   <div key={club.id} className="bg-[#1a0f0a]/80 rounded-xl p-4 border border-[#D4A017]/10 hover:border-[#D4A017]/30 hover:shadow-xl transition cursor-pointer group">
// //                     <div className="flex justify-between items-start">
// //                       <div className="flex-1">
// //                         <h3 className="font-semibold text-[#f5ede4] group-hover:text-[#D4A017] transition">{club.name}</h3>
// //                         <p className="text-sm text-[#D4A017]/50">{club.description}</p>
// //                         <div className="flex gap-4 mt-2 text-xs text-[#D4A017]/30">
// //                           <span>👥 {club.members} members</span>
// //                           <span>📖 {club.books} books</span>
// //                           {club.active && <span className="text-emerald-400">● Active</span>}
// //                         </div>
// //                       </div>
// //                       <div className="flex flex-col items-end gap-2">
// //                         <span className="px-3 py-1 bg-[#D4A017]/10 text-[#D4A017] rounded-full text-xs font-medium">
// //                           {club.tag}
// //                         </span>
// //                         <button className="text-xs text-[#D4A017] hover:text-[#f5ede4] transition">Join →</button>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* ===== Discussions ===== */}
// //             <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-2xl p-5 border border-[#D4A017]/10 shadow-xl">
// //               <div className="flex justify-between items-center mb-4">
// //                 <h2 className="text-lg font-bold text-[#f5ede4]">💬 Recent Discussions</h2>
// //                 <Link to="/discussions" className="text-[#D4A017] text-sm font-medium hover:underline">View all</Link>
// //               </div>
// //               <div className="space-y-3">
// //                 {discussions.map((disc) => (
// //                   <div key={disc.id} className={`bg-[#1a0f0a]/80 rounded-xl p-4 border ${disc.pinned ? 'border-[#D4A017]/30' : 'border-[#D4A017]/10'} hover:border-[#D4A017]/50 hover:shadow-xl transition cursor-pointer`}>
// //                     <div className="flex justify-between items-start">
// //                       <div className="flex-1">
// //                         <div className="flex items-center gap-2">
// //                           {disc.pinned && <span className="text-[#D4A017] text-xs">📌</span>}
// //                           <h3 className="font-semibold text-[#f5ede4] hover:text-[#D4A017] transition">{disc.title}</h3>
// //                         </div>
// //                         <div className="flex items-center gap-3 mt-1 text-xs text-[#D4A017]/40">
// //                           <span>👤 {disc.author}</span>
// //                           <span>💬 {disc.replies} replies</span>
// //                           <span>❤️ {disc.likes} likes</span>
// //                         </div>
// //                       </div>
// //                       <span className="text-xs text-[#D4A017]/30">{disc.time}</span>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>

// //           {/* ===== RIGHT COLUMN ===== */}
// //           <div className="space-y-4">
            
// //             {/* ===== Top Members ===== */}
// //             <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-2xl p-5 border border-[#D4A017]/10 shadow-xl">
// //               <h2 className="text-lg font-bold text-[#f5ede4] mb-4">🏆 Top Members</h2>
// //               <div className="space-y-3">
// //                 {members.map((member) => (
// //                   <div key={member.id} className="bg-[#1a0f0a]/80 rounded-xl p-3 border border-[#D4A017]/10 flex items-center gap-3 hover:border-[#D4A017]/30 transition">
// //                     <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D4A017] to-[#8B6914] flex items-center justify-center text-[#1a0f0a] font-bold text-sm">
// //                       {member.avatar}
// //                     </div>
// //                     <div className="flex-1">
// //                       <div className="font-medium text-[#f5ede4] text-sm">{member.name}</div>
// //                       <div className="text-xs text-[#D4A017]/40">📚 {member.books} books • Joined {member.joined}</div>
// //                     </div>
// //                     <button className="text-[#D4A017] text-xs hover:text-[#f5ede4] transition">Follow</button>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* ===== Join Community CTA ===== */}
// //             <div className="bg-gradient-to-br from-[#D4A017]/10 to-[#8B6914]/10 rounded-2xl p-5 border border-[#D4A017]/20 text-center">
// //               <div className="text-3xl mb-2">🌱</div>
// //               <h3 className="font-semibold text-[#f5ede4]">Join the Community</h3>
// //               <p className="text-sm text-[#D4A017]/50 mt-1">Connect with readers who share your interests</p>
// //               <button className="mt-3 px-6 py-2 bg-gradient-to-r from-[#D4A017] to-[#8B6914] text-[#1a0f0a] rounded-full text-sm font-semibold shadow-lg shadow-[#D4A017]/20 hover:shadow-[#D4A017]/40 transition">
// //                 Get Started
// //               </button>
// //             </div>

// //             {/* ===== Active Now ===== */}
// //             <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-2xl p-4 border border-[#D4A017]/10 shadow-xl">
// //               <h3 className="text-sm font-semibold text-[#f5ede4] mb-2">🟢 Active Now</h3>
// //               <div className="flex flex-wrap gap-2">
// //                 {['Sarah', 'Mike', 'Emily', 'David', 'Amanda', 'James'].map((name) => (
// //                   <span key={name} className="text-xs text-[#D4A017]/60 bg-[#1a0f0a]/80 px-2 py-1 rounded-full">
// //                     {name}
// //                   </span>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CommunityPage;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   Users, Globe2, Plus, BookOpen, Pin, MessageCircle, Heart,
//   Trophy, Sprout, UserPlus,
// } from 'lucide-react';

// /**
//  * CommunityPage — same forest / brass token system as Home, Marketplace, and Exchange.
//  */

// const clubs = [
//   { id: 1, name: "Fiction Lovers", members: 234, books: 45, description: "Discussing the best fiction from around the world", tag: "Fiction", active: true },
//   { id: 2, name: "Self-Help Readers", members: 189, books: 32, description: "Improving ourselves one book at a time", tag: "Self-Help", active: true },
//   { id: 3, name: "Fantasy Guild", members: 156, books: 28, description: "Exploring magical worlds and epic adventures", tag: "Fantasy", active: true },
//   { id: 4, name: "Classics Club", members: 112, books: 20, description: "Reading and discussing timeless literature", tag: "Classics", active: true },
//   { id: 5, name: "Non-Fiction Explorers", members: 98, books: 18, description: "Learning from real-world stories and facts", tag: "Non-Fiction", active: false },
//   { id: 6, name: "Drama Readers", members: 76, books: 15, description: "Exploring plays and dramatic works", tag: "Drama", active: false },
// ];

// const discussions = [
//   { id: 1, title: "What are you reading this week?", author: "Ananya Rao", replies: 24, likes: 45, time: "2 hours ago", pinned: true },
//   { id: 2, title: "Best book to start your morning with?", author: "Rohan Mehta", replies: 18, likes: 32, time: "5 hours ago", pinned: false },
//   { id: 3, title: "Book recommendations for beginners", author: "Priya Nair", replies: 31, likes: 56, time: "1 day ago", pinned: false },
//   { id: 4, title: "How many books do you read per month?", author: "Karan Verma", replies: 42, likes: 78, time: "3 days ago", pinned: false },
// ];

// const members = [
//   { id: 1, name: "Ananya Rao", books: 156, joined: "2023", avatar: "AR" },
//   { id: 2, name: "Rohan Mehta", books: 89, joined: "2022", avatar: "RM" },
//   { id: 3, name: "Priya Nair", books: 234, joined: "2021", avatar: "PN" },
//   { id: 4, name: "Karan Verma", books: 67, joined: "2023", avatar: "KV" },
//   { id: 5, name: "Meera Iyer", books: 143, joined: "2022", avatar: "MI" },
// ];

// const activeNow = ["Ananya", "Rohan", "Priya", "Karan", "Meera", "Aditya"];

// const CommunityPage = () => {
//   const [activeTab, setActiveTab] = useState('all');

//   const filteredClubs = activeTab === 'all' ? clubs : clubs.filter((c) => c.active);

//   return (
//     <div className="min-h-screen w-full bg-[#141C16] text-[#EFE7D8] py-10">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap');
//         .font-display { font-family: 'Fraunces', serif; }
//         .font-body { font-family: 'Inter', sans-serif; }
//       `}</style>

//       <div className="font-body max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

//         {/* ===== Header ===== */}
//         <div className="bg-[#1A2320]/70 backdrop-blur-sm rounded-2xl p-6 border border-[#2E3A30] shadow-xl">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//             <div className="flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C9A567]/10 border border-[#C9A567]/30">
//                 <Users size={18} className="text-[#C9A567]" />
//               </div>
//               <div>
//                 <h1 className="font-display font-bold text-3xl text-[#EFE7D8]">Community</h1>
//                 <p className="text-[#7E8F80] text-sm mt-1">Connect with fellow readers and join discussions</p>
//               </div>
//             </div>
//             <div className="flex gap-3">
//               <button className="flex items-center gap-2 px-4 py-2 bg-[#141C16]/60 rounded-full text-sm text-[#EFE7D8] border border-[#2E3A30] hover:border-[#C9A567]/50 transition">
//                 <Globe2 size={15} /> Find Groups
//               </button>
//               <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#C9A567] to-[#A98849] text-[#141C16] rounded-full text-sm font-semibold shadow-lg shadow-black/30 hover:scale-[1.03] transition">
//                 <Plus size={15} /> Create Club
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

//           {/* ===== LEFT COLUMN ===== */}
//           <div className="lg:col-span-2 space-y-6">

//             {/* ===== Reading Clubs ===== */}
//             <div className="bg-[#1A2320]/70 backdrop-blur-sm rounded-2xl p-5 border border-[#2E3A30] shadow-xl">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="font-display font-semibold text-lg text-[#EFE7D8]">Reading Clubs</h2>
//                 <div className="flex gap-2">
//                   <button
//                     className={`text-sm font-medium transition px-3 py-1 rounded-full ${
//                       activeTab === 'all' ? 'bg-[#C9A567]/15 text-[#C9A567]' : 'text-[#7E8F80] hover:text-[#EFE7D8]'
//                     }`}
//                     onClick={() => setActiveTab('all')}
//                   >
//                     All
//                   </button>
//                   <button
//                     className={`text-sm font-medium transition px-3 py-1 rounded-full ${
//                       activeTab === 'active' ? 'bg-[#C9A567]/15 text-[#C9A567]' : 'text-[#7E8F80] hover:text-[#EFE7D8]'
//                     }`}
//                     onClick={() => setActiveTab('active')}
//                   >
//                     Active
//                   </button>
//                 </div>
//               </div>
//               <div className="space-y-3">
//                 {filteredClubs.map((club) => (
//                   <div key={club.id} className="bg-[#141C16]/70 rounded-xl p-4 border border-[#2E3A30] hover:border-[#C9A567]/40 hover:shadow-lg hover:shadow-black/30 transition cursor-pointer group">
//                     <div className="flex justify-between items-start gap-3">
//                       <div className="flex-1 min-w-0">
//                         <h3 className="font-semibold text-[#EFE7D8] group-hover:text-[#C9A567] transition">{club.name}</h3>
//                         <p className="text-sm text-[#B9C9AE]">{club.description}</p>
//                         <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-[#7E8F80]">
//                           <span className="flex items-center gap-1"><Users size={12} /> {club.members} members</span>
//                           <span className="flex items-center gap-1"><BookOpen size={12} /> {club.books} books</span>
//                           {club.active && <span className="flex items-center gap-1 text-[#7E9B76]">● Active</span>}
//                         </div>
//                       </div>
//                       <div className="flex flex-col items-end gap-2 shrink-0">
//                         <span className="px-3 py-1 bg-[#C9A567]/10 text-[#C9A567] rounded-full text-xs font-medium">
//                           {club.tag}
//                         </span>
//                         <button className="text-xs text-[#C9A567] hover:text-[#EFE7D8] transition">Join →</button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* ===== Discussions ===== */}
//             <div className="bg-[#1A2320]/70 backdrop-blur-sm rounded-2xl p-5 border border-[#2E3A30] shadow-xl">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="font-display font-semibold text-lg text-[#EFE7D8]">Recent Discussions</h2>
//                 <Link to="/discussions" className="text-[#C9A567] text-sm font-medium hover:underline">View all</Link>
//               </div>
//               <div className="space-y-3">
//                 {discussions.map((disc) => (
//                   <div
//                     key={disc.id}
//                     className={`bg-[#141C16]/70 rounded-xl p-4 border ${
//                       disc.pinned ? 'border-[#C9A567]/30' : 'border-[#2E3A30]'
//                     } hover:border-[#C9A567]/50 hover:shadow-lg hover:shadow-black/30 transition cursor-pointer`}
//                   >
//                     <div className="flex justify-between items-start gap-3">
//                       <div className="flex-1 min-w-0">
//                         <div className="flex items-center gap-2">
//                           {disc.pinned && <Pin size={12} className="text-[#C9A567]" />}
//                           <h3 className="font-semibold text-[#EFE7D8] hover:text-[#C9A567] transition truncate">{disc.title}</h3>
//                         </div>
//                         <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-[#7E8F80]">
//                           <span>{disc.author}</span>
//                           <span className="flex items-center gap-1"><MessageCircle size={12} /> {disc.replies}</span>
//                           <span className="flex items-center gap-1"><Heart size={12} /> {disc.likes}</span>
//                         </div>
//                       </div>
//                       <span className="text-xs text-[#7E8F80] shrink-0">{disc.time}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* ===== RIGHT COLUMN ===== */}
//           <div className="space-y-4">

//             {/* ===== Top Members ===== */}
//             <div className="bg-[#1A2320]/70 backdrop-blur-sm rounded-2xl p-5 border border-[#2E3A30] shadow-xl">
//               <h2 className="font-display font-semibold text-lg text-[#EFE7D8] mb-4 flex items-center gap-2">
//                 <Trophy size={16} className="text-[#C9A567]" /> Top Members
//               </h2>
//               <div className="space-y-3">
//                 {members.map((member) => (
//                   <div key={member.id} className="bg-[#141C16]/70 rounded-xl p-3 border border-[#2E3A30] flex items-center gap-3 hover:border-[#C9A567]/40 transition">
//                     <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#C9A567] to-[#A98849] flex items-center justify-center text-[#141C16] font-bold text-sm shrink-0">
//                       {member.avatar}
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <div className="font-medium text-[#EFE7D8] text-sm truncate">{member.name}</div>
//                       <div className="text-xs text-[#7E8F80]">{member.books} books · Joined {member.joined}</div>
//                     </div>
//                     <button className="flex items-center gap-1 text-[#C9A567] text-xs hover:text-[#EFE7D8] transition shrink-0">
//                       <UserPlus size={12} /> Follow
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* ===== Join Community CTA ===== */}
//             <div className="bg-gradient-to-br from-[#C9A567]/10 to-[#7E9B76]/10 rounded-2xl p-5 border border-[#C9A567]/20 text-center">
//               <div className="flex justify-center mb-2">
//                 <Sprout size={26} className="text-[#7E9B76]" />
//               </div>
//               <h3 className="font-display font-semibold text-[#EFE7D8]">Join the Community</h3>
//               <p className="text-sm text-[#7E8F80] mt-1">Connect with readers who share your interests</p>
//               <button className="mt-3 px-6 py-2 bg-gradient-to-r from-[#C9A567] to-[#A98849] text-[#141C16] rounded-full text-sm font-semibold shadow-lg shadow-black/30 hover:scale-[1.03] transition">
//                 Get Started
//               </button>
//             </div>

//             {/* ===== Active Now ===== */}
//             <div className="bg-[#1A2320]/70 backdrop-blur-sm rounded-2xl p-4 border border-[#2E3A30] shadow-xl">
//               <h3 className="text-sm font-semibold text-[#EFE7D8] mb-2.5 flex items-center gap-1.5">
//                 <span className="h-2 w-2 rounded-full bg-[#7E9B76] inline-block" /> Active Now
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {activeNow.map((name) => (
//                   <span key={name} className="text-xs text-[#B9C9AE] bg-[#141C16]/70 border border-[#2E3A30] px-2.5 py-1 rounded-full">
//                     {name}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommunityPage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users, Globe2, Plus, BookOpen, Pin, MessageCircle, Heart,
  Trophy, Sprout, UserPlus,
} from 'lucide-react';

/**
 * CommunityPage — same forest / brass token system as Home, Marketplace, and Exchange.
 */

const clubs = [
  { id: 1, name: "Fiction Lovers", members: 234, books: 45, description: "Discussing the best fiction from around the world", tag: "Fiction", active: true },
  { id: 2, name: "Self-Help Readers", members: 189, books: 32, description: "Improving ourselves one book at a time", tag: "Self-Help", active: true },
  { id: 3, name: "Fantasy Guild", members: 156, books: 28, description: "Exploring magical worlds and epic adventures", tag: "Fantasy", active: true },
  { id: 4, name: "Classics Club", members: 112, books: 20, description: "Reading and discussing timeless literature", tag: "Classics", active: true },
  { id: 5, name: "Non-Fiction Explorers", members: 98, books: 18, description: "Learning from real-world stories and facts", tag: "Non-Fiction", active: false },
  { id: 6, name: "Drama Readers", members: 76, books: 15, description: "Exploring plays and dramatic works", tag: "Drama", active: false },
];

const discussions = [
  { id: 1, title: "What are you reading this week?", author: "Ananya Rao", replies: 24, likes: 45, time: "2 hours ago", pinned: true },
  { id: 2, title: "Best book to start your morning with?", author: "Rohan Mehta", replies: 18, likes: 32, time: "5 hours ago", pinned: false },
  { id: 3, title: "Book recommendations for beginners", author: "Priya Nair", replies: 31, likes: 56, time: "1 day ago", pinned: false },
  { id: 4, title: "How many books do you read per month?", author: "Karan Verma", replies: 42, likes: 78, time: "3 days ago", pinned: false },
];

const members = [
  { id: 1, name: "Archie Bhagchanani", books: 172, joined: "2022", avatar: "AB" },
  { id: 2, name: "Komal Adhave", books: 134, joined: "2023", avatar: "KA" },
  { id: 3, name: "Anushka Sonwane", books: 98, joined: "2023", avatar: "AS" },
  { id: 4, name: "Samrudhi Bansode", books: 61, joined: "2024", avatar: "SB" },
];

const activeNow = ["Ananya", "Rohan", "Priya", "Karan", "Meera", "Aditya"];

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredClubs = activeTab === 'all' ? clubs : clubs.filter((c) => c.active);

  return (
    <div className="min-h-screen w-full bg-[#141C16] text-[#EFE7D8] py-10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="font-body max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* ===== Header ===== */}
        <div className="bg-[#1A2320]/70 backdrop-blur-sm rounded-2xl p-6 border border-[#C9A567]/25 shadow-xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C9A567]/10 border border-[#C9A567]/30">
                <Users size={18} className="text-[#C9A567]" />
              </div>
              <div>
                <h1 className="font-display font-bold text-3xl text-[#EFE7D8]">Community</h1>
                <p className="text-[#7E8F80] text-sm mt-1">Connect with fellow readers and join discussions</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#141C16]/60 rounded-full text-sm text-[#EFE7D8] border border-[#2E3A30] hover:border-[#C9A567]/50 transition">
                <Globe2 size={15} /> Find Groups
              </button>
              <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#C9A567] to-[#A98849] text-[#141C16] rounded-full text-sm font-semibold shadow-lg shadow-black/30 hover:scale-[1.03] transition">
                <Plus size={15} /> Create Club
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ===== LEFT COLUMN ===== */}
          <div className="lg:col-span-2 space-y-8">

            {/* ===== Reading Clubs ===== */}
            <div className="bg-[#1A2320]/70 backdrop-blur-sm rounded-2xl p-5 border border-[#C9A567]/25 shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-display font-semibold text-lg text-[#EFE7D8]">Reading Clubs</h2>
                <div className="flex gap-2">
                  <button
                    className={`text-sm font-medium transition px-3 py-1 rounded-full ${
                      activeTab === 'all' ? 'bg-[#C9A567]/15 text-[#C9A567]' : 'text-[#7E8F80] hover:text-[#EFE7D8]'
                    }`}
                    onClick={() => setActiveTab('all')}
                  >
                    All
                  </button>
                  <button
                    className={`text-sm font-medium transition px-3 py-1 rounded-full ${
                      activeTab === 'active' ? 'bg-[#C9A567]/15 text-[#C9A567]' : 'text-[#7E8F80] hover:text-[#EFE7D8]'
                    }`}
                    onClick={() => setActiveTab('active')}
                  >
                    Active
                  </button>
                </div>
              </div>
              <div className="space-y-6">
                {filteredClubs.map((club) => (
                  <div key={club.id} className="bg-[#141C16]/70 rounded-xl p-4 border border-[#C9A567]/20 hover:border-[#C9A567]/50 hover:shadow-lg hover:shadow-black/30 transition cursor-pointer group">
                    <div className="flex justify-between items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-[#EFE7D8] group-hover:text-[#C9A567] transition">{club.name}</h3>
                        <p className="text-sm text-[#B9C9AE]">{club.description}</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-[#7E8F80]">
                          <span className="flex items-center gap-1"><Users size={12} /> {club.members} members</span>
                          <span className="flex items-center gap-1"><BookOpen size={12} /> {club.books} books</span>
                          {club.active && <span className="flex items-center gap-1 text-[#7E9B76]">● Active</span>}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <span className="px-3 py-1 bg-[#C9A567]/10 text-[#C9A567] rounded-full text-xs font-medium">
                          {club.tag}
                        </span>
                        <button className="text-xs text-[#C9A567] hover:text-[#EFE7D8] transition">Join →</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ===== Discussions ===== */}
            <div className="bg-[#1A2320]/70 backdrop-blur-sm rounded-2xl p-5 border border-[#C9A567]/25 shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-display font-semibold text-lg text-[#EFE7D8]">Recent Discussions</h2>
                <Link to="/discussions" className="text-[#C9A567] text-sm font-medium hover:underline">View all</Link>
              </div>
              <div className="space-y-6">
                {discussions.map((disc) => (
                  <div
                    key={disc.id}
                    className={`bg-[#141C16]/70 rounded-xl p-4 border ${
                      disc.pinned ? 'border-[#C9A567]/50' : 'border-[#C9A567]/20'
                    } hover:border-[#C9A567]/50 hover:shadow-lg hover:shadow-black/30 transition cursor-pointer`}
                  >
                    <div className="flex justify-between items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          {disc.pinned && <Pin size={12} className="text-[#C9A567]" />}
                          <h3 className="font-semibold text-[#EFE7D8] hover:text-[#C9A567] transition truncate">{disc.title}</h3>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-[#7E8F80]">
                          <span>{disc.author}</span>
                          <span className="flex items-center gap-1"><MessageCircle size={12} /> {disc.replies}</span>
                          <span className="flex items-center gap-1"><Heart size={12} /> {disc.likes}</span>
                        </div>
                      </div>
                      <span className="text-xs text-[#7E8F80] shrink-0">{disc.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ===== RIGHT COLUMN ===== */}
          <div className="space-y-6">

            {/* ===== Top Members ===== */}
            <div className="bg-[#1A2320]/70 backdrop-blur-sm rounded-2xl p-5 border border-[#C9A567]/25 shadow-xl">
              <h2 className="font-display font-semibold text-lg text-[#EFE7D8] mb-4 flex items-center gap-2">
                <Trophy size={16} className="text-[#C9A567]" /> Top Members
              </h2>
              <div className="space-y-5">
                {members.map((member) => (
                  <div key={member.id} className="bg-[#141C16]/70 rounded-xl p-3 border border-[#C9A567]/20 flex items-center gap-3 hover:border-[#C9A567]/50 transition">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#C9A567] to-[#A98849] flex items-center justify-center text-[#141C16] font-bold text-sm shrink-0">
                      {member.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-[#EFE7D8] text-sm truncate">{member.name}</div>
                      <div className="text-xs text-[#7E8F80]">{member.books} books · Joined {member.joined}</div>
                    </div>
                    <button className="flex items-center gap-1 text-[#C9A567] text-xs hover:text-[#EFE7D8] transition shrink-0">
                      <UserPlus size={12} /> Follow
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* ===== Join Community CTA ===== */}
            <div className="bg-gradient-to-br from-[#C9A567]/10 to-[#7E9B76]/10 rounded-2xl p-5 border border-[#C9A567]/20 text-center">
              <div className="flex justify-center mb-2">
                <Sprout size={26} className="text-[#7E9B76]" />
              </div>
              <h3 className="font-display font-semibold text-[#EFE7D8]">Join the Community</h3>
              <p className="text-sm text-[#7E8F80] mt-1">Connect with readers who share your interests</p>
              <button className="mt-3 px-6 py-2 bg-gradient-to-r from-[#C9A567] to-[#A98849] text-[#141C16] rounded-full text-sm font-semibold shadow-lg shadow-black/30 hover:scale-[1.03] transition">
                Get Started
              </button>
            </div>

            {/* ===== Active Now ===== */}
            <div className="bg-[#1A2320]/70 backdrop-blur-sm rounded-2xl p-4 border border-[#C9A567]/25 shadow-xl">
              <h3 className="text-sm font-semibold text-[#EFE7D8] mb-2.5 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#7E9B76] inline-block" /> Active Now
              </h3>
              <div className="flex flex-wrap gap-2">
                {activeNow.map((name) => (
                  <span key={name} className="text-xs text-[#B9C9AE] bg-[#141C16]/70 border border-[#C9A567]/25 px-2.5 py-1 rounded-full">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;