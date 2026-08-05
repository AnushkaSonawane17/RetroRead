// import React from 'react';

// const MarketplacePage = () => {
//   return (
//     <div className="space-y-6">
//       <h1 className="text-3xl font-bold">📖 Book Marketplace</h1>
//       <p className="text-[#636E72]">Browse and buy books from other readers</p>
//     </div>
//   );
// };

// export default MarketplacePage;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const MarketplacePage = () => {
//   const [filter, setFilter] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [viewMode, setViewMode] = useState('grid');

//   const books = [
//     { id: 1, title: "Atomic Habits", author: "James Clear", price: 14.99, condition: "Like New", cover: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg", category: "Self-Help", seller: "Sarah Wilson", rating: 4.9 },
//     { id: 2, title: "Ikigai", author: "Héctor García", price: 11.99, condition: "Good", cover: "https://images-na.ssl-images-amazon.com/images/I/81l3rZK4HFL.jpg", category: "Self-Help", seller: "Mike Johnson", rating: 4.7 },
//     { id: 3, title: "Wings of Fire", author: "Tui T. Sutherland", price: 9.99, condition: "Like New", cover: "https://images-na.ssl-images-amazon.com/images/I/91t3RZbqUPL.jpg", category: "Fantasy", seller: "Emily Davis", rating: 4.8 },
//     { id: 4, title: "Deep Work", author: "Cal Newport", price: 12.99, condition: "Used", cover: "https://images-na.ssl-images-amazon.com/images/I/81bGXaJ9PLL.jpg", category: "Self-Help", seller: "David Brown", rating: 4.6 },
//     { id: 5, title: "The Psychology of Money", author: "Morgan Housel", price: 15.99, condition: "Like New", cover: "https://images-na.ssl-images-amazon.com/images/I/71TR5M0nVdL.jpg", category: "Finance", seller: "Amanda Lee", rating: 4.9 },
//     { id: 6, title: "Sapiens", author: "Yuval N. Harari", price: 13.99, condition: "Good", cover: "https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg", category: "History", seller: "James Chen", rating: 4.7 },
//     { id: 7, title: "The Alchemist", author: "Paulo Coelho", price: 10.99, condition: "Like New", cover: "https://images-na.ssl-images-amazon.com/images/I/71aFt4J5fKL.jpg", category: "Fiction", seller: "Rachel Green", rating: 4.8 },
//     { id: 8, title: "Meditations", author: "Marcus Aurelius", price: 8.99, condition: "Used", cover: "https://images-na.ssl-images-amazon.com/images/I/81bWgY6WQ4L.jpg", category: "Philosophy", seller: "Tom Harris", rating: 4.5 },
//     { id: 9, title: "The Power of Now", author: "Eckhart Tolle", price: 12.99, condition: "Good", cover: "https://images-na.ssl-images-amazon.com/images/I/71WtKt7fVqL.jpg", category: "Self-Help", seller: "Lisa Park", rating: 4.6 },
//     { id: 10, title: "Thinking Fast and Slow", author: "Daniel Kahneman", price: 16.99, condition: "Like New", cover: "https://images-na.ssl-images-amazon.com/images/I/71Y9M0KxLML.jpg", category: "Psychology", seller: "Robert Kim", rating: 4.8 },
//     { id: 11, title: "The 7 Habits", author: "Stephen R. Covey", price: 13.99, condition: "Good", cover: "https://images-na.ssl-images-amazon.com/images/I/71nX4DvT4ML.jpg", category: "Self-Help", seller: "Michelle Obama", rating: 4.7 },
//     { id: 12, title: "Clean Code", author: "Robert C. Martin", price: 14.99, condition: "Like New", cover: "https://images-na.ssl-images-amazon.com/images/I/71i1R8w7e-L.jpg", category: "Programming", seller: "Bill Gates", rating: 4.9 },
//   ];

//   const filteredBooks = books.filter(book => {
//     const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                           book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                           book.seller.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesFilter = filter === 'all' || book.condition.toLowerCase() === filter.toLowerCase();
//     return matchesSearch && matchesFilter;
//   });

//   const getConditionColor = (condition) => {
//     switch(condition) {
//       case 'Like New': return 'from-emerald-600 to-emerald-400';
//       case 'Good': return 'from-blue-600 to-blue-400';
//       case 'Used': return 'from-amber-600 to-amber-400';
//       default: return 'from-gray-600 to-gray-400';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#1a0f0a] via-[#2d1a0e] to-[#1a0f0a] py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* ===== Header ===== */}
//         <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-2xl p-6 border border-[#D4A017]/10 shadow-2xl mb-6">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//             <div>
//               <h1 className="text-3xl font-bold text-[#D4A017]">📚 Book Marketplace</h1>
//               <p className="text-[#D4A017]/50 text-sm mt-1">Buy and sell books from fellow readers</p>
//             </div>
//             <div className="flex gap-3">
//               <button 
//                 onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
//                 className="px-4 py-2 bg-[#2d1a0e]/60 rounded-full text-sm text-[#D4A017] border border-[#D4A017]/20 hover:border-[#D4A017]/50 transition"
//               >
//                 {viewMode === 'grid' ? '⊞ List' : '⊟ Grid'}
//               </button>
//               <button className="px-6 py-2.5 bg-gradient-to-r from-[#D4A017] to-[#8B6914] text-white rounded-full text-sm font-medium shadow-lg shadow-[#D4A017]/20 hover:shadow-[#D4A017]/40 transition">
//                 + Sell a Book
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* ===== Search & Filter ===== */}
//         <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-2xl p-4 border border-[#D4A017]/10 shadow-2xl mb-6">
//           <div className="flex flex-col sm:flex-row gap-4">
//             <div className="flex-1 relative">
//               <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#D4A017]/40">🔍</span>
//               <input
//                 type="text"
//                 placeholder="Search books, authors, sellers..."
//                 className="w-full pl-10 pr-4 py-2.5 bg-[#1a0f0a]/80 rounded-xl border border-[#D4A017]/10 focus:outline-none focus:ring-2 focus:ring-[#D4A017] text-[#f5ede4] placeholder:text-[#D4A017]/30"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//             <div className="flex gap-2 flex-wrap">
//               {['all', 'like new', 'good', 'used'].map((option) => (
//                 <button
//                   key={option}
//                   className={`px-4 py-2 rounded-full text-sm font-medium transition ${
//                     filter === option 
//                       ? 'bg-gradient-to-r from-[#D4A017] to-[#8B6914] text-[#1a0f0a] shadow-lg shadow-[#D4A017]/20' 
//                       : 'bg-[#1a0f0a]/60 text-[#D4A017]/60 hover:text-[#D4A017] border border-[#D4A017]/10'
//                   }`}
//                   onClick={() => setFilter(option)}
//                 >
//                   {option.charAt(0).toUpperCase() + option.slice(1)}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ===== Books Grid ===== */}
//         <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'} gap-4`}>
//           {filteredBooks.map((book) => (
//             <div key={book.id} className={`bg-[#2d1a0e]/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#D4A017]/10 hover:border-[#D4A017]/30 shadow-lg hover:shadow-2xl transition group ${viewMode === 'list' ? 'flex' : ''}`}>
//               <div className={`${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''} h-56 overflow-hidden relative`}>
//                 <img src={book.cover} alt={book.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
//                 <span className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getConditionColor(book.condition)}`}>
//                   {book.condition}
//                 </span>
//                 <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-[#1a0f0a]/70 text-[#D4A017] text-[10px] font-medium">
//                   ★ {book.rating}
//                 </div>
//               </div>
//               <div className="p-4 flex-1 flex flex-col">
//                 <h3 className="font-semibold text-[#f5ede4] group-hover:text-[#D4A017] transition">{book.title}</h3>
//                 <p className="text-sm text-[#D4A017]/50">{book.author}</p>
//                 <p className="text-xs text-[#D4A017]/30 mt-1">Seller: {book.seller}</p>
//                 <div className="flex justify-between items-center mt-auto pt-3">
//                   <span className="text-xl font-bold text-[#D4A017]">${book.price}</span>
//                   <button className="px-4 py-1.5 bg-gradient-to-r from-[#D4A017] to-[#8B6914] text-[#1a0f0a] rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#D4A017]/20 transition">
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Empty State */}
//         {filteredBooks.length === 0 && (
//           <div className="bg-[#2d1a0e]/60 backdrop-blur-sm rounded-2xl p-12 text-center border border-[#D4A017]/10">
//             <div className="text-5xl mb-4">📭</div>
//             <h3 className="text-xl font-semibold text-[#f5ede4]">No books found</h3>
//             <p className="text-[#D4A017]/50 text-sm mt-2">Try adjusting your search or filter</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MarketplacePage;

import React, { useState } from 'react';
import { Search, LayoutGrid, Rows3, Plus, Star, User } from 'lucide-react';

/**
 * MarketplacePage — same forest / brass token system as the RetroRead home page.
 * Covers are served from Open Library's cover API keyed by ISBN-13, which is a
 * stable, no-auth, publicly documented endpoint (covers.openlibrary.org/b/isbn/{isbn}-L.jpg).
 */

const books = [
  { id: 1, title: "Atomic Habits", author: "James Clear", price: 349, condition: "Like New", isbn: "9780735211292", category: "Self-Help", seller: "Ananya Rao", city: "Mumbai", rating: 4.9 },
  { id: 2, title: "Ikigai", author: "Héctor García", price: 249, condition: "Good", isbn: "9780143130727", category: "Self-Help", seller: "Rohan Mehta", city: "Delhi", rating: 4.7 },
  { id: 3, title: "Deep Work", author: "Cal Newport", price: 299, condition: "Used", isbn: "9781455586691", category: "Self-Help", seller: "Priya Nair", city: "Bengaluru", rating: 4.6 },
  { id: 4, title: "The Psychology of Money", author: "Morgan Housel", price: 329, condition: "Like New", isbn: "9780857197689", category: "Finance", seller: "Karan Verma", city: "Pune", rating: 4.9 },
  { id: 5, title: "Sapiens", author: "Yuval N. Harari", price: 399, condition: "Good", isbn: "9780062316097", category: "History", seller: "Meera Iyer", city: "Hyderabad", rating: 4.7 },
  { id: 6, title: "The Alchemist", author: "Paulo Coelho", price: 249, condition: "Like New", isbn: "9780062315007", category: "Fiction", seller: "Aditya Kulkarni", city: "Chennai", rating: 4.8 },
  { id: 7, title: "Meditations", author: "Marcus Aurelius", price: 199, condition: "Used", isbn: "9780140449334", category: "Philosophy", seller: "Sneha Joshi", city: "Kolkata", rating: 4.5 },
  { id: 8, title: "Thinking, Fast and Slow", author: "Daniel Kahneman", price: 379, condition: "Like New", isbn: "9780374533557", category: "Psychology", seller: "Vikram Singh", city: "Ahmedabad", rating: 4.8 },
];

const coverUrl = (isbn) => `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;

const conditionStyle = {
  "Like New": "from-[#7E9B76] to-[#5C7A54]",
  "Good": "from-[#C9A567] to-[#A98849]",
  "Used": "from-[#8B6F47] to-[#6B5636]",
};

const MarketplacePage = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const filteredBooks = books.filter((book) => {
    const q = searchTerm.toLowerCase();
    const matchesSearch =
      book.title.toLowerCase().includes(q) ||
      book.author.toLowerCase().includes(q) ||
      book.seller.toLowerCase().includes(q);
    const matchesFilter = filter === 'all' || book.condition.toLowerCase() === filter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

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
            <div>
              <h1 className="font-display font-bold text-3xl text-[#EFE7D8]">Book Marketplace</h1>
              <p className="text-[#7E8F80] text-sm mt-1">Buy and sell books from fellow readers, city to city</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                className="flex items-center gap-2 px-4 py-2 bg-[#141C16]/60 rounded-full text-sm text-[#EFE7D8] border border-[#2E3A30] hover:border-[#C9A567]/50 transition"
              >
                {viewMode === 'grid' ? <Rows3 size={15} /> : <LayoutGrid size={15} />}
                {viewMode === 'grid' ? 'List' : 'Grid'}
              </button>
              <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#C9A567] to-[#A98849] text-[#141C16] rounded-full text-sm font-semibold shadow-lg shadow-black/30 hover:scale-[1.03] transition">
                <Plus size={15} /> Sell a Book
              </button>
            </div>
          </div>
        </div>

        {/* ===== Search & Filter ===== */}
        <div className="bg-[#1A2320]/70 backdrop-blur-sm rounded-2xl p-4 border border-[#2E3A30] shadow-xl">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7E8F80]" />
              <input
                type="text"
                placeholder="Search books, authors, sellers..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#141C16]/80 rounded-xl border border-[#2E3A30] focus:outline-none focus:ring-2 focus:ring-[#C9A567]/60 text-[#EFE7D8] placeholder:text-[#7E8F80]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {['all', 'like new', 'good', 'used'].map((option) => (
                <button
                  key={option}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    filter === option
                      ? 'bg-gradient-to-r from-[#C9A567] to-[#A98849] text-[#141C16] shadow-lg shadow-black/20'
                      : 'bg-[#141C16]/60 text-[#7E8F80] hover:text-[#EFE7D8] border border-[#2E3A30]'
                  }`}
                  onClick={() => setFilter(option)}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Books Grid ===== */}
        <div
          className={
            viewMode === 'grid'
              ? 'grid gap-x-6 gap-y-10 [grid-template-columns:repeat(auto-fit,minmax(160px,1fr))]'
              : 'grid grid-cols-1 gap-4'
          }
        >
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className={`bg-[#1A2320]/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#2E3A30] hover:border-[#C9A567]/40 shadow-lg hover:shadow-black/40 transition group ${
                viewMode === 'list' ? 'flex' : 'w-full max-w-[190px] mx-auto'
              }`}
            >
              <div className={`${viewMode === 'list' ? 'w-24 flex-shrink-0' : ''} aspect-[2/3] overflow-hidden relative bg-[#0F1512]`}>
                <img
                  src={coverUrl(book.isbn)}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                <span className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-medium text-[#141C16] bg-gradient-to-r ${conditionStyle[book.condition]}`}>
                  {book.condition}
                </span>
                <div className="absolute bottom-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#141C16]/75 text-[#C9A567] text-[10px] font-medium">
                  <Star size={10} className="fill-[#C9A567] text-[#C9A567]" /> {book.rating}
                </div>
              </div>
              <div className={`${viewMode === 'list' ? 'p-4 flex-1' : 'p-3.5'} flex flex-col`}>
                <h3 className="font-semibold text-sm text-[#EFE7D8] group-hover:text-[#C9A567] transition line-clamp-1">{book.title}</h3>
                <p className="text-xs text-[#B9C9AE] line-clamp-1">{book.author}</p>
                <p className="flex items-center gap-1 text-[11px] text-[#7E8F80] mt-1.5">
                  <User size={11} /> {book.seller} · {book.city}
                </p>
                <div className="flex justify-between items-center mt-auto pt-3">
                  <span className="font-display font-semibold text-base text-[#C9A567]">₹{book.price}</span>
                  <button className="px-3.5 py-1.5 bg-gradient-to-r from-[#C9A567] to-[#A98849] text-[#141C16] rounded-full text-xs font-semibold hover:shadow-lg hover:shadow-black/20 transition">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Empty State ===== */}
        {filteredBooks.length === 0 && (
          <div className="bg-[#1A2320]/70 backdrop-blur-sm rounded-2xl p-12 text-center border border-[#2E3A30]">
            <h3 className="font-display text-xl font-semibold text-[#EFE7D8]">No books found</h3>
            <p className="text-[#7E8F80] text-sm mt-2">Try adjusting your search or filter</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketplacePage;