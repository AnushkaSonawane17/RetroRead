// // import React from 'react';

// // const ExchangePage = () => {
// //   return (
// //     <div className="space-y-6">
// //       <h1 className="text-3xl font-bold">🔄 Book Exchange</h1>
// //       <p className="text-[#636E72]">Exchange physical books with nearby readers</p>
// //     </div>
// //   );
// // };

// // export default ExchangePage;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const ExchangePage = () => {
//   const [activeTab, setActiveTab] = useState('available');
//   const [location, setLocation] = useState('New York');

//   const exchangeBooks = [
//     { id: 1, title: "Atomic Habits", author: "James Clear", owner: "Sarah Wilson", location: "New York", distance: "2.3 km", cover: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg", status: "available", rating: 4.9 },
//     { id: 2, title: "Ikigai", author: "Héctor García", owner: "Mike Johnson", location: "Los Angeles", distance: "5.1 km", cover: "https://images-na.ssl-images-amazon.com/images/I/81l3rZK4HFL.jpg", status: "available", rating: 4.7 },
//     { id: 3, title: "Deep Work", author: "Cal Newport", owner: "Emily Davis", location: "Chicago", distance: "3.7 km", cover: "https://images-na.ssl-images-amazon.com/images/I/81bGXaJ9PLL.jpg", status: "pending", rating: 4.6 },
//     { id: 4, title: "Sapiens", author: "Yuval N. Harari", owner: "David Brown", location: "San Francisco", distance: "1.8 km", cover: "https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg", status: "available", rating: 4.8 },
//     { id: 5, title: "The Psychology of Money", author: "Morgan Housel", owner: "Amanda Lee", location: "Austin", distance: "4.2 km", cover: "https://images-na.ssl-images-amazon.com/images/I/71TR5M0nVdL.jpg", status: "completed", rating: 4.9 },
//     { id: 6, title: "Meditations", author: "Marcus Aurelius", owner: "James Chen", location: "Seattle", distance: "2.9 km", cover: "https://images-na.ssl-images-amazon.com/images/I/81bWgY6WQ4L.jpg", status: "available", rating: 4.5 },
//     { id: 7, title: "The Alchemist", author: "Paulo Coelho", owner: "Rachel Green", location: "New York", distance: "1.2 km", cover: "https://images-na.ssl-images-amazon.com/images/I/71aFt4J5fKL.jpg", status: "available", rating: 4.8 },
//     { id: 8, title: "The Power of Now", author: "Eckhart Tolle", owner: "Lisa Park", location: "Los Angeles", distance: "3.5 km", cover: "https://images-na.ssl-images-amazon.com/images/I/71WtKt7fVqL.jpg", status: "pending", rating: 4.6 },
//   ];

//   const filteredBooks = exchangeBooks.filter(book => book.status === activeTab);

//   const getStatusColor = (status) => {
//     switch(status) {
//       case 'available': return 'from-emerald-600 to-emerald-400';
//       case 'pending': return 'from-amber-600 to-amber-400';
//       case 'completed': return 'from-blue-600 to-blue-400';
//       default: return 'from-gray-600 to-gray-400';
//     }
//   };

//   const getStatusIcon = (status) => {
//     switch(status) {
//       case 'available': return '🟢';
//       case 'pending': return '🟡';
//       case 'completed': return '🔵';
//       default: return '⚪';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#1a0f0a] via-[#2d1a0e] to-[#1a0f0a] py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* ===== Header ===== */}
//         <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-2xl p-6 border border-[#D4A017]/10 shadow-2xl mb-6">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//             <div>
//               <h1 className="text-3xl font-bold text-[#D4A017]">🔄 Book Exchange</h1>
//               <p className="text-[#D4A017]/50 text-sm mt-1">Exchange physical books with nearby readers</p>
//             </div>
//             <div className="flex items-center gap-3">
//               <span className="text-sm text-[#D4A017]/50">📍 {location}</span>
//               <button className="px-4 py-2 bg-[#1a0f0a]/80 rounded-full text-sm text-[#D4A017] border border-[#D4A017]/20 hover:border-[#D4A017]/50 transition">
//                 Change
//               </button>
//               <button className="px-6 py-2.5 bg-gradient-to-r from-[#D4A017] to-[#8B6914] text-[#1a0f0a] rounded-full text-sm font-semibold shadow-lg shadow-[#D4A017]/20 hover:shadow-[#D4A017]/40 transition">
//                 + List Book
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* ===== Tabs ===== */}
//         <div className="flex gap-2 mb-6 overflow-x-auto">
//           {['available', 'pending', 'completed'].map((tab) => (
//             <button
//               key={tab}
//               className={`px-6 py-2.5 rounded-full text-sm font-medium transition ${
//                 activeTab === tab
//                   ? 'bg-gradient-to-r from-[#D4A017] to-[#8B6914] text-[#1a0f0a] shadow-lg shadow-[#D4A017]/20'
//                   : 'bg-[#1a0f0a]/60 text-[#D4A017]/60 hover:text-[#D4A017] border border-[#D4A017]/10'
//               }`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {getStatusIcon(tab)} {tab.charAt(0).toUpperCase() + tab.slice(1)}
//               <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
//                 activeTab === tab ? 'bg-[#1a0f0a]/20 text-[#1a0f0a]' : 'bg-[#D4A017]/10 text-[#D4A017]'
//               }`}>
//                 {exchangeBooks.filter(b => b.status === tab).length}
//               </span>
//             </button>
//           ))}
//         </div>

//         {/* ===== Exchange Grid ===== */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {filteredBooks.map((book) => (
//             <div key={book.id} className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#D4A017]/10 hover:border-[#D4A017]/30 shadow-lg hover:shadow-2xl transition group">
//               <div className="flex p-4 gap-4">
//                 <div className="w-24 h-32 flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
//                   <img src={book.cover} alt={book.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <h3 className="font-semibold text-[#f5ede4] group-hover:text-[#D4A017] transition truncate">{book.title}</h3>
//                   <p className="text-sm text-[#D4A017]/50 truncate">{book.author}</p>
//                   <p className="text-xs text-[#D4A017]/30 mt-1">👤 {book.owner}</p>
//                   <p className="text-xs text-[#D4A017]/30">📍 {book.location} • {book.distance}</p>
//                   <p className="text-xs text-[#D4A017]">★ {book.rating}</p>
//                   <div className="flex items-center gap-2 mt-3">
//                     <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium text-white bg-gradient-to-r ${getStatusColor(book.status)}`}>
//                       {book.status.charAt(0).toUpperCase() + book.status.slice(1)}
//                     </span>
//                     {book.status === 'available' && (
//                       <button className="px-3 py-1 bg-gradient-to-r from-[#D4A017] to-[#8B6914] text-[#1a0f0a] rounded-full text-xs font-semibold hover:shadow-lg hover:shadow-[#D4A017]/20 transition ml-auto">
//                         Request Exchange
//                       </button>
//                     )}
//                     {book.status === 'pending' && (
//                       <span className="text-xs text-[#D4A017]/40 ml-auto">⏳ Awaiting response</span>
//                     )}
//                     {book.status === 'completed' && (
//                       <span className="text-xs text-emerald-400 ml-auto">✅ Completed</span>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ===== Empty State ===== */}
//         {filteredBooks.length === 0 && (
//           <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-2xl p-12 text-center border border-[#D4A017]/10">
//             <div className="text-5xl mb-4">📭</div>
//             <h3 className="text-xl font-semibold text-[#f5ede4]">No {activeTab} exchanges</h3>
//             <p className="text-[#D4A017]/50 text-sm mt-2">Check back later or list your own books for exchange</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ExchangePage;


import React, { useState } from 'react';
import { RefreshCw, MapPin, User, Star, Clock, CheckCircle2, Plus } from 'lucide-react';

/**
 * ExchangePage — same forest / brass token system as the RetroRead home page.
 * Covers are served from Open Library's cover API keyed by ISBN-13
 * (covers.openlibrary.org/b/isbn/{isbn}-L.jpg) — stable and no auth needed.
 */

const exchangeBooks = [
  { id: 1, title: "Atomic Habits", author: "James Clear", owner: "Ananya Rao", city: "Mumbai", distance: "2.3 km", isbn: "9780735211292", status: "available", rating: 4.9 },
  { id: 2, title: "Ikigai", author: "Héctor García", owner: "Rohan Mehta", city: "Delhi", distance: "5.1 km", isbn: "9780143130727", status: "available", rating: 4.7 },
  { id: 3, title: "Deep Work", author: "Cal Newport", owner: "Priya Nair", city: "Bengaluru", distance: "3.7 km", isbn: "9781455586691", status: "pending", rating: 4.6 },
  { id: 4, title: "Sapiens", author: "Yuval N. Harari", owner: "Karan Verma", city: "Pune", distance: "1.8 km", isbn: "9780062316097", status: "available", rating: 4.8 },
  { id: 5, title: "The Psychology of Money", author: "Morgan Housel", owner: "Meera Iyer", city: "Hyderabad", distance: "4.2 km", isbn: "9780857197689", status: "completed", rating: 4.9 },
  { id: 6, title: "Meditations", author: "Marcus Aurelius", owner: "Aditya Kulkarni", city: "Chennai", distance: "2.9 km", isbn: "9780140449334", status: "available", rating: 4.5 },
  { id: 7, title: "The Alchemist", author: "Paulo Coelho", owner: "Sneha Joshi", city: "Kolkata", distance: "1.2 km", isbn: "9780062315007", status: "available", rating: 4.8 },
  { id: 8, title: "The Power of Now", author: "Eckhart Tolle", owner: "Vikram Singh", city: "Ahmedabad", distance: "3.5 km", isbn: "9781577314806", status: "pending", rating: 4.6 },
];

const coverUrl = (isbn) => `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;

const statusStyle = {
  available: "from-[#7E9B76] to-[#5C7A54]",
  pending: "from-[#C9A567] to-[#A98849]",
  completed: "from-[#6E8DA6] to-[#4E6E84]",
};

const ExchangePage = () => {
  const [activeTab, setActiveTab] = useState('available');
  const [city, setCity] = useState('Mumbai');

  const filteredBooks = exchangeBooks.filter((book) => book.status === activeTab);

  return (
    <div className="min-h-screen w-full bg-[#141C16] text-[#EFE7D8] py-10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="font-body max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* ===== Header ===== */}
        <div className="bg-[#1A2320]/70 backdrop-blur-sm rounded-2xl p-6 border border-[#2E3A30] shadow-xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C9A567]/10 border border-[#C9A567]/30">
                <RefreshCw size={18} className="text-[#C9A567]" />
              </div>
              <div>
                <h1 className="font-display font-bold text-3xl text-[#EFE7D8]">Book Exchange</h1>
                <p className="text-[#7E8F80] text-sm mt-1">Swap physical books with readers near you</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-sm text-[#B9C9AE]">
                <MapPin size={14} className="text-[#C9A567]" /> {city}
              </span>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="px-3 py-2 bg-[#141C16]/80 rounded-full text-sm text-[#EFE7D8] border border-[#2E3A30] focus:outline-none focus:ring-2 focus:ring-[#C9A567]/60"
              >
                {["Mumbai", "Delhi", "Bengaluru", "Pune", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad"].map((c) => (
                  <option key={c} value={c} className="bg-[#141C16]">{c}</option>
                ))}
              </select>
              <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#C9A567] to-[#A98849] text-[#141C16] rounded-full text-sm font-semibold shadow-lg shadow-black/30 hover:scale-[1.03] transition">
                <Plus size={15} /> List Book
              </button>
            </div>
          </div>
        </div>

        {/* ===== Tabs ===== */}
        <div className="flex gap-2 overflow-x-auto">
          {['available', 'pending', 'completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-[#C9A567] to-[#A98849] text-[#141C16] shadow-lg shadow-black/20'
                  : 'bg-[#1A2320]/70 text-[#7E8F80] hover:text-[#EFE7D8] border border-[#2E3A30]'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                activeTab === tab ? 'bg-[#141C16]/20 text-[#141C16]' : 'bg-[#2E3A30] text-[#B9C9AE]'
              }`}>
                {exchangeBooks.filter((b) => b.status === tab).length}
              </span>
            </button>
          ))}
        </div>

        {/* ===== Exchange Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredBooks.map((book) => (
            <div key={book.id} className="bg-[#1A2320]/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#2E3A30] hover:border-[#C9A567]/40 shadow-lg hover:shadow-black/40 transition group">
              <div className="flex p-4 gap-4">
                <div className="w-20 h-28 flex-shrink-0 rounded-lg overflow-hidden shadow-lg bg-[#0F1512]">
                  <img src={coverUrl(book.isbn)} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm text-[#EFE7D8] group-hover:text-[#C9A567] transition truncate">{book.title}</h3>
                  <p className="text-xs text-[#B9C9AE] truncate">{book.author}</p>
                  <p className="flex items-center gap-1 text-[11px] text-[#7E8F80] mt-1.5">
                    <User size={11} /> {book.owner}
                  </p>
                  <p className="flex items-center gap-1 text-[11px] text-[#7E8F80]">
                    <MapPin size={11} /> {book.city} · {book.distance}
                  </p>
                  <p className="flex items-center gap-1 text-[11px] text-[#C9A567] mt-0.5">
                    <Star size={10} className="fill-[#C9A567] text-[#C9A567]" /> {book.rating}
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium text-[#141C16] bg-gradient-to-r ${statusStyle[book.status]}`}>
                      {book.status.charAt(0).toUpperCase() + book.status.slice(1)}
                    </span>
                    {book.status === 'available' && (
                      <button className="ml-auto px-3 py-1 bg-gradient-to-r from-[#C9A567] to-[#A98849] text-[#141C16] rounded-full text-xs font-semibold hover:shadow-lg hover:shadow-black/20 transition">
                        Request
                      </button>
                    )}
                    {book.status === 'pending' && (
                      <span className="ml-auto flex items-center gap-1 text-xs text-[#7E8F80]">
                        <Clock size={12} /> Awaiting
                      </span>
                    )}
                    {book.status === 'completed' && (
                      <span className="ml-auto flex items-center gap-1 text-xs text-[#7E9B76]">
                        <CheckCircle2 size={12} /> Done
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Empty State ===== */}
        {filteredBooks.length === 0 && (
          <div className="bg-[#1A2320]/70 backdrop-blur-sm rounded-2xl p-12 text-center border border-[#2E3A30]">
            <h3 className="font-display text-xl font-semibold text-[#EFE7D8]">No {activeTab} exchanges</h3>
            <p className="text-[#7E8F80] text-sm mt-2">Check back later, or list your own books for exchange</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExchangePage;