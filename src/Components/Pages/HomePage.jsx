
// import React, { useEffect, useState } from "react";
// import { ArrowRight, Sparkles, BookOpen, Users, Feather, Quote } from "lucide-react";

// /**
//  * RetroRead — HomePage
//  * Signature: hero headline rotates through short literary quotes.
//  * No navbar / search bar — those live in the parent layout.
//  */

// const bookQuotes = [
//   { text: "A reader lives a thousand lives before he dies.", author: "George R. R. Martin" },
//   { text: "There is no friend as loyal as a book.", author: "Ernest Hemingway" },
//   { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
//   { text: "Books are a uniquely portable magic.", author: "Stephen King" },
//   { text: "Once you learn to read, you will be forever free.", author: "Frederick Douglass" },
//   { text: "Books are the mirrors of the soul.", author: "Virginia Woolf" },
// ];

// const trending = [
//   { rank: 1, title: "The Night Circus", author: "Erin Morgenstern", cover: "https://covers.openlibrary.org/b/isbn/9780307744432-L.jpg" },
//   { rank: 2, title: "Project Hail Mary", author: "Andy Weir", cover: "https://covers.openlibrary.org/b/isbn/9780593135204-L.jpg" },
//   { rank: 3, title: "The Silent Patient", author: "Alex Michaelides", cover: "https://covers.openlibrary.org/b/isbn/9781250301697-L.jpg" },
//   { rank: 4, title: "It Ends With Us", author: "Colleen Hoover", cover: "https://covers.openlibrary.org/b/isbn/9781501110368-L.jpg" },
//   { rank: 5, title: "Dune", author: "Frank Herbert", cover: "https://covers.openlibrary.org/b/isbn/9780441013593-L.jpg" },
// ];

// const forYou = [
//   { title: "Klara and the Sun", author: "Kazuo Ishiguro", cover: "https://covers.openlibrary.org/b/isbn/9780571364879-L.jpg" },
//   { title: "The Hobbit", author: "J.R.R. Tolkien", cover: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg" },
//   { title: "Educated", author: "Tara Westover", cover: "https://covers.openlibrary.org/b/isbn/9780399590504-L.jpg" },
// ];

// const recentlyAdded = [
//   { rank: null, title: "Lessons in Chemistry", author: "Bonnie Garmus", cover: "https://covers.openlibrary.org/b/isbn/9780385547345-L.jpg" },
//   { rank: null, title: "Tomorrow, and Tomorrow, and Tomorrow", author: "Gabrielle Zevin", cover: "https://covers.openlibrary.org/b/isbn/9780593321201-L.jpg" },
//   { rank: null, title: "Fourth Wing", author: "Rebecca Yarros", cover: "https://covers.openlibrary.org/b/isbn/9781649374042-L.jpg" },
// ];

// const shelfRowA = [
//   { title: "The Psychology of Money", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4e8GZDve-S3E7Z9MWbnBg6DxpIBHTSNmmSdMV6wip4g&s=10" },
//   { title: "The Almanack of Naval Ravikant", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi2iH4nzRUJhjM5QdR-TkRh6ronj-8Bd-0c1Z571wXMQ&s" },
//   { title: "The Design of Everyday Things", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRymGoQp0oPqVTNGiT0oy90Bhizxih9ApTM_SbOaKir4za_7W3Esmici__1&s=10" },
// ];
// const shelfRowB = [
//   { title: "Deep Work", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYoNbwM6uYYhX5mzJvJNf3zcVh5n1uN8ou0VUFGbFi-A&s" },
//   { title: "Thinking, Fast and Slow", cover: "https://m.media-amazon.com/images/I/41iJ8QmVs2L._SY445_SX342_FMwebp_.jpg" },
//   { title: "Clean Code", cover: "https://m.media-amazon.com/images/I/71I-zd7XWkL._UF1000,1000_QL80_.jpg" },
// ];

// const stats = [
//   { icon: BookOpen, value: "10K+", label: "Books Available" },
//   { icon: Sparkles, value: "AI", label: "Powered" },
//   { icon: Users, value: "50K+", label: "Happy Readers" },
// ];

// function BookCard({ b, size = "normal" }) {
//   const w = size === "small" ? "max-w-[130px]" : "";
//   return (
//     <div className={`group text-center ${w} mx-auto`}>
//       <div className="relative">
//         {b.rank && (
//           <span className="absolute -top-2 -left-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-[#1a120a]">
//             {b.rank}
//           </span>
//         )}
//         <div className="aspect-[2/3] rounded-lg bg-gradient-to-br from-[#3a2e22] to-[#1a1209] border border-[#4a3a28]/40 overflow-hidden shadow-md transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-amber-900/30">
//           <img src={b.cover} alt={b.title} className="h-full w-full object-cover opacity-90" loading="lazy" />
//         </div>
//       </div>
//       <p className="mt-3 font-body text-sm text-[#F1E7D6]/90 line-clamp-1">{b.title}</p>
//       <p className="font-body text-xs text-[#8a7a63]">{b.author}</p>
//     </div>
//   );
// }

// export default function HomePage() {
//   const [mounted, setMounted] = useState(false);
//   const [quoteIndex, setQuoteIndex] = useState(0);
//   const [quoteVisible, setQuoteVisible] = useState(true);

//   useEffect(() => {
//     setMounted(true);
//     const id = setInterval(() => {
//       setQuoteVisible(false);
//       setTimeout(() => {
//         setQuoteIndex((i) => (i + 1) % bookQuotes.length);
//         setQuoteVisible(true);
//       }, 450);
//     }, 4800);
//     return () => clearInterval(id);
//   }, []);

//   const activeQuote = bookQuotes[quoteIndex];

//   return (
//     <div className="min-h-screen w-full bg-[#100B08] text-[#F1E7D6] overflow-x-hidden relative">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,600&family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap');
//         @keyframes flicker { 0%,100% { opacity: .9; } 50% { opacity: .6; } }
//         .font-quote { font-family: 'Cormorant Garamond', serif; }
//         .font-display { font-family: 'Fraunces', serif; }
//         .font-body { font-family: 'Inter', sans-serif; }
//       `}</style>

//       <div className="pointer-events-none fixed inset-0 z-0">
//         <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />
//         <div className="absolute top-1/3 right-0 h-72 w-72 rounded-full bg-amber-400/10 blur-[100px]" />
//       </div>

//       <main className="font-body relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-14 space-y-24">
//         {/* HERO */}
//         <section
//           className={`grid md:grid-cols-2 gap-14 items-center transition-all duration-1000 ease-out ${
//             mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//         >
//           {/* LEFT: quote headline, then everything below centered */}
//           <div>
//             <div className="inline-flex items-center gap-2 rounded-full border border-amber-700/40 bg-amber-500/5 px-4 py-1.5 text-xs tracking-wide text-amber-300/90 mb-8">
//               <Feather size={13} className="text-amber-400" />
//               A new line, every visit
//             </div>

//             <div className="min-h-[9.5rem] md:min-h-[11rem] mb-8">
//               <p
//                 className={`font-quote italic text-4xl md:text-5xl leading-[1.15] text-transparent bg-clip-text bg-gradient-to-br from-[#F6E9CF] via-[#F1DDB0] to-amber-400 transition-all duration-500 ${
//                   quoteVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
//                 }`}
//               >
//                 "{activeQuote.text}"
//               </p>
//               <p
//                 className={`font-body mt-4 text-sm tracking-[0.15em] uppercase text-amber-300/70 transition-all duration-500 delay-100 ${
//                   quoteVisible ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 — {activeQuote.author}
//               </p>
//             </div>

//             {/* Centered block: creamy quote-shaped subhead, CTAs, stats */}
//             <div className="flex flex-col items-center text-center">
//               <div className="relative max-w-md mb-9 rounded-tl-[2.5rem] rounded-tr-[1rem] rounded-br-[2.5rem] rounded-bl-[1rem] border border-amber-200/15 bg-gradient-to-br from-[#F1E7D6]/10 to-amber-100/[0.04] px-7 py-6 shadow-inner shadow-black/20">
//                 <Quote size={20} className="mx-auto mb-2 text-amber-300/60" />
//                 <p className="text-[#E9DCC3] text-base md:text-lg leading-relaxed">
//                   Every shelf tells a story before you've turned a page.
//                   Let's go find the one that's yours.
//                 </p>
//               </div>

//               {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
//                 <button className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 font-medium text-sm text-[#1a120a] shadow-lg shadow-orange-900/30 transition-transform duration-300 hover:scale-[1.03] active:scale-95">
//                   Explore Library
//                   <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
//                 </button>
//                 <button className="rounded-full border border-[#3a2e22] px-6 py-3 font-medium text-sm text-[#F1E7D6] transition-colors duration-300 hover:bg-[#1d1710]">
//                   AI Recommendations
//                 </button>
//               </div> */}

//               <div className="flex justify-center gap-3">
//                 {stats.map(({ icon: Icon, value, label }) => (
//                   <div
//                     key={label}
//                     className="flex flex-col items-center gap-2 rounded-[1.75rem] border border-[#3a2e22]/70 bg-[#1a130c]/70 backdrop-blur-sm px-6 py-4 transition-all duration-300 hover:border-amber-600/50 hover:-translate-y-1"
//                   >
//                     <Icon size={18} className="text-amber-400" />
//                     <p className="text-lg font-semibold leading-none">{value}</p>
//                     <p className="text-[11px] text-[#8a7a63]">{label}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* RIGHT: a lit shelf, two rows of spines, in place of any icon/badge cluster */}
//           <div
//             className={`relative transition-all duration-1000 delay-200 ease-out ${
//               mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
//             }`}
//           >
//             <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-amber-500/10 to-orange-600/5 blur-2xl" />
//             <div className="relative rounded-2xl border border-[#2a2118] bg-gradient-to-b from-[#1c150e] to-[#120d09] p-6 space-y-8">
//               {[shelfRowA, shelfRowB].map((row, ri) => (
//                 <div key={ri}>
//                   <div className="grid grid-cols-3 gap-4">
//                     {row.map((book, i) => (
//                       <div
//                         key={book.title}
//                         className="group relative h-28 md:h-32 rounded-md overflow-hidden bg-gradient-to-br from-[#3a2e22] to-[#1a1209] border border-[#4a3a28]/50 shadow-lg shadow-black/50 transition-transform duration-300 hover:-translate-y-2"
//                         style={{ animation: `flicker ${4 + i}s ease-in-out infinite` }}
//                       >
//                         <img src={book.cover} alt={book.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
//                         <p className="absolute bottom-0 left-0 right-0 p-3 font-body text-[11px] text-[#F1E7D6]/95 leading-tight">{book.title}</p>
//                       </div>
//                     ))}
//                   </div>
//                   {/* wooden shelf plank */}
//                   <div className="mt-3 h-2.5 rounded-full bg-gradient-to-r from-[#4a3220] via-[#2a1c10] to-[#4a3220] shadow-md shadow-black/40" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* TRENDING */}
//         <section
//           className={`transition-all duration-1000 delay-300 ease-out ${
//             mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//         >
//           <div className="flex items-end justify-between mb-7">
//             <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">Trending Now</h2>
//             <span className="font-body text-xs text-amber-400/80 cursor-pointer hover:underline mb-2">View all</span>
//           </div>
//           <div className="grid grid-cols-2 sm:grid-cols-5 gap-5">
//             {trending.map((b) => (
//               <BookCard key={b.title} b={b} />
//             ))}
//           </div>
//         </section>

//         {/* RECENTLY ADDED — same visual treatment as Trending */}
//         <section
//           className={`transition-all duration-1000 delay-400 ease-out ${
//             mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//         >
//           <div className="flex items-end justify-between mb-7">
//             <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">Recently Added</h2>
//             <span className="font-body text-xs text-amber-400/80 cursor-pointer hover:underline mb-2">View all</span>
//           </div>
//           <div className="grid grid-cols-2 sm:grid-cols-5 gap-5">
//             {recentlyAdded.map((b) => (
//               <BookCard key={b.title} b={b} />
//             ))}
//           </div>
//         </section>

//         {/* FOR YOU — slightly smaller cards */}
//         <section
//           className={`transition-all duration-1000 delay-500 ease-out ${
//             mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//         >
//           <div className="flex items-end justify-between mb-7">
//             <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">For You</h2>
//             <span className="font-body text-xs text-[#8a7a63]">AI picks, tuned to your shelf</span>
//           </div>
//           <div className="grid grid-cols-2 sm:grid-cols-5 gap-5">
//             {forYou.map((b) => (
//               <BookCard key={b.title} b={b} />
//             ))}
//           </div>
//         </section>

//         {/* READING PROGRESS */}
//         <section
//           className={`transition-all duration-1000 delay-700 ease-out ${
//             mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//         >
//           <div className="rounded-[1.75rem] border border-[#2a2118] bg-[#160f0a]/60 p-6 flex items-center gap-6">
//             <div className="relative h-20 w-20 shrink-0">
//               <svg className="h-20 w-20 -rotate-90" viewBox="0 0 80 80">
//                 <circle cx="40" cy="40" r="34" fill="none" stroke="#2a2118" strokeWidth="8" />
//                 <circle
//                   cx="40"
//                   cy="40"
//                   r="34"
//                   fill="none"
//                   stroke="url(#grad)"
//                   strokeWidth="8"
//                   strokeLinecap="round"
//                   strokeDasharray={2 * Math.PI * 34}
//                   strokeDashoffset={2 * Math.PI * 34 * (1 - 0.68)}
//                   className="transition-all duration-1000 ease-out"
//                 />
//                 <defs>
//                   <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
//                     <stop offset="0%" stopColor="#fbbf24" />
//                     <stop offset="100%" stopColor="#f97316" />
//                   </linearGradient>
//                 </defs>
//               </svg>
//               <span className="absolute inset-0 flex items-center justify-center font-body text-sm font-semibold">68%</span>
//             </div>
//             <div className="flex-1">
//               <p className="font-body font-semibold text-[#F1E7D6]">Atomic Habits</p>
//               <p className="font-body text-xs text-[#8a7a63]">James Clear</p>
//             </div>
//             {/* <button className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2 font-body text-xs font-medium text-[#1a120a] transition-transform duration-300 hover:scale-105">
//               Continue Reading
//             </button> */}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }



// import React, { useEffect, useState } from "react";
// import { ArrowRight, Sparkles, BookOpen, Users, Feather, Quote } from "lucide-react";

// /**
//  * RetroRead — HomePage
//  * Signature: hero headline rotates through short literary quotes.
//  * No navbar / search bar — those live in the parent layout.
//  */

// const bookQuotes = [
//   { text: "A reader lives a thousand lives before he dies.", author: "George R. R. Martin" },
//   { text: "There is no friend as loyal as a book.", author: "Ernest Hemingway" },
//   { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
//   { text: "Books are a uniquely portable magic.", author: "Stephen King" },
//   { text: "Once you learn to read, you will be forever free.", author: "Frederick Douglass" },
//   { text: "Books are the mirrors of the soul.", author: "Virginia Woolf" },
// ];

// const trending = [
//   { rank: 1, title: "The Night Circus", author: "Erin Morgenstern", cover: "https://covers.openlibrary.org/b/isbn/9780307744432-L.jpg" },
//   { rank: 2, title: "Project Hail Mary", author: "Andy Weir", cover: "https://covers.openlibrary.org/b/isbn/9780593135204-L.jpg" },
//   { rank: 3, title: "The Silent Patient", author: "Alex Michaelides", cover: "https://covers.openlibrary.org/b/isbn/9781250301697-L.jpg" },
//   { rank: 4, title: "It Ends With Us", author: "Colleen Hoover", cover: "https://covers.openlibrary.org/b/isbn/9781501110368-L.jpg" },
//   { rank: 5, title: "Dune", author: "Frank Herbert", cover: "https://covers.openlibrary.org/b/isbn/9780441013593-L.jpg" },
// ];

// const forYou = [
//   { title: "Klara and the Sun", author: "Kazuo Ishiguro", cover: "https://covers.openlibrary.org/b/isbn/9780571364879-L.jpg" },
//   { title: "The Hobbit", author: "J.R.R. Tolkien", cover: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg" },
//   { title: "Educated", author: "Tara Westover", cover: "https://covers.openlibrary.org/b/isbn/9780399590504-L.jpg" },
// ];

// const recentlyAdded = [
//   { rank: null, title: "Lessons in Chemistry", author: "Bonnie Garmus", cover: "https://covers.openlibrary.org/b/isbn/9780385547345-L.jpg" },
//   { rank: null, title: "Tomorrow, and Tomorrow, and Tomorrow", author: "Gabrielle Zevin", cover: "https://covers.openlibrary.org/b/isbn/9780593321201-L.jpg" },
//   { rank: null, title: "Fourth Wing", author: "Rebecca Yarros", cover: "https://covers.openlibrary.org/b/isbn/9781649374042-L.jpg" },
// ];

// const shelfRowA = [
//   { title: "The Psychology of Money", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4e8GZDve-S3E7Z9MWbnBg6DxpIBHTSNmmSdMV6wip4g&s=10" },
//   { title: "The Almanack of Naval Ravikant", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi2iH4nzRUJhjM5QdR-TkRh6ronj-8Bd-0c1Z571wXMQ&s" },
//   { title: "The Design of Everyday Things", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRymGoQp0oPqVTNGiT0oy90Bhizxih9ApTM_SbOaKir4za_7W3Esmici__1&s=10" },
// ];
// const shelfRowB = [
//   { title: "Deep Work", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYoNbwM6uYYhX5mzJvJNf3zcVh5n1uN8ou0VUFGbFi-A&s" },
//   { title: "Thinking, Fast and Slow", cover: "https://m.media-amazon.com/images/I/41iJ8QmVs2L._SY445_SX342_FMwebp_.jpg" },
//   { title: "Clean Code", cover: "https://m.media-amazon.com/images/I/71I-zd7XWkL._UF1000,1000_QL80_.jpg" },
// ];

// const stats = [
//   { icon: BookOpen, value: "10K+", label: "Books Available" },
//   { icon: Sparkles, value: "AI", label: "Powered" },
//   { icon: Users, value: "50K+", label: "Happy Readers" },
// ];

// function BookCard({ b, size = "normal" }) {
//   const w = size === "small" ? "max-w-[130px]" : "";
//   return (
//     <div className={`group text-center ${w} mx-auto`}>
//       <div className="relative">
//         {b.rank && (
//           <span className="absolute -top-2 -left-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-[#1a120a]">
//             {b.rank}
//           </span>
//         )}
//         <div className="aspect-[2/3] rounded-lg bg-gradient-to-br from-[#453626] to-[#221609] border border-[#55442f]/50 overflow-hidden shadow-md transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-amber-900/30">
//           <img src={b.cover} alt={b.title} className="h-full w-full object-cover opacity-90" loading="lazy" />
//         </div>
//       </div>
//       <p className="mt-3 font-body text-sm text-[#F1E7D6]/90 line-clamp-1">{b.title}</p>
//       <p className="font-body text-xs text-[#8a7a63]">{b.author}</p>
//     </div>
//   );
// }

// export default function HomePage() {
//   const [mounted, setMounted] = useState(false);
//   const [quoteIndex, setQuoteIndex] = useState(0);
//   const [quoteVisible, setQuoteVisible] = useState(true);

//   useEffect(() => {
//     setMounted(true);
//     const id = setInterval(() => {
//       setQuoteVisible(false);
//       setTimeout(() => {
//         setQuoteIndex((i) => (i + 1) % bookQuotes.length);
//         setQuoteVisible(true);
//       }, 450);
//     }, 4800);
//     return () => clearInterval(id);
//   }, []);

//   const activeQuote = bookQuotes[quoteIndex];

//   return (
//     <div className="min-h-screen w-full bg-[#1A130E] text-[#F1E7D6] overflow-x-hidden relative">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,600&family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap');
//         @keyframes flicker { 0%,100% { opacity: .9; } 50% { opacity: .6; } }
//         .font-quote { font-family: 'Cormorant Garamond', serif; }
//         .font-display { font-family: 'Fraunces', serif; }
//         .font-body { font-family: 'Inter', sans-serif; }
//       `}</style>

//       <div className="pointer-events-none fixed inset-0 z-0">
//         <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />
//         <div className="absolute top-1/3 right-0 h-72 w-72 rounded-full bg-amber-400/10 blur-[100px]" />
//       </div>

//       <main className="font-body relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-16 space-y-32">
//         {/* HERO */}
//         <section
//           className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 ease-out ${
//             mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//         >
//           {/* LEFT: quote headline, then everything below centered */}
//           <div>
//             <div className="inline-flex items-center gap-2 rounded-full border border-amber-700/40 bg-amber-500/5 px-4 py-1.5 text-xs tracking-wide text-amber-300/90 mb-8">
//               <Feather size={13} className="text-amber-400" />
//               A new line, every visit
//             </div>

//             <div className="min-h-[9.5rem] md:min-h-[11rem] mb-8">
//               <p
//                 className={`font-quote italic text-4xl md:text-5xl leading-[1.15] text-transparent bg-clip-text bg-gradient-to-br from-[#F6E9CF] via-[#F1DDB0] to-amber-400 transition-all duration-500 ${
//                   quoteVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
//                 }`}
//               >
//                 "{activeQuote.text}"
//               </p>
//               <p
//                 className={`font-body mt-4 text-sm tracking-[0.15em] uppercase text-amber-300/70 transition-all duration-500 delay-100 ${
//                   quoteVisible ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 — {activeQuote.author}
//               </p>
//             </div>

//             {/* Centered block: creamy quote-shaped subhead, CTAs, stats */}
//             <div className="flex flex-col items-center text-center">
//               <div className="relative max-w-md mb-9 rounded-tl-[2.5rem] rounded-tr-[1rem] rounded-br-[2.5rem] rounded-bl-[1rem] border border-amber-200/15 bg-gradient-to-br from-[#F1E7D6]/10 to-amber-100/[0.04] px-7 py-6 shadow-inner shadow-black/20">
//                 <Quote size={20} className="mx-auto mb-2 text-amber-300/60" />
//                 <p className="text-[#E9DCC3] text-base md:text-lg leading-relaxed">
//                   Every shelf tells a story before you've turned a page.
//                   Let's go find the one that's yours.
//                 </p>
//               </div>

//               <div className="flex flex-wrap justify-center gap-4 mb-12">
//                 <button className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 font-medium text-sm text-[#1a120a] shadow-lg shadow-orange-900/30 transition-transform duration-300 hover:scale-[1.03] active:scale-95">
//                   Explore Library
//                   <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
//                 </button>
//                 <button className="rounded-full border border-[#3a2e22] px-6 py-3 font-medium text-sm text-[#F1E7D6] transition-colors duration-300 hover:bg-[#1d1710]">
//                   AI Recommendations
//                 </button>
//               </div>

//               <div className="flex justify-center gap-3">
//                 {stats.map(({ icon: Icon, value, label }) => (
//                   <div
//                     key={label}
//                     className="flex flex-col items-center gap-2 rounded-[1.75rem] border border-[#453626]/70 bg-[#22190f]/70 backdrop-blur-sm px-6 py-4 transition-all duration-300 hover:border-amber-600/50 hover:-translate-y-1"
//                   >
//                     <Icon size={18} className="text-amber-400" />
//                     <p className="text-lg font-semibold leading-none">{value}</p>
//                     <p className="text-[11px] text-[#8a7a63]">{label}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* RIGHT: a lit shelf, two rows of spines, in place of any icon/badge cluster */}
//           <div
//             className={`relative transition-all duration-1000 delay-200 ease-out ${
//               mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
//             }`}
//           >
//             <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-amber-500/10 to-orange-600/5 blur-2xl" />
//             <div className="relative rounded-[1.75rem] border border-[#332720] bg-gradient-to-b from-[#241a12] to-[#17110b] p-9 md:p-10 space-y-12">
//               {[shelfRowA, shelfRowB].map((row, ri) => (
//                 <div key={ri}>
//                   <div className="grid grid-cols-3 gap-7">
//                     {row.map((book, i) => (
//                       <div
//                         key={book.title}
//                         className="group relative h-20 md:h-24 rounded-md overflow-hidden bg-gradient-to-br from-[#453626] to-[#221609] border border-[#55442f]/55 shadow-lg shadow-black/50 transition-transform duration-300 hover:-translate-y-2"
//                         style={{ animation: `flicker ${4 + i}s ease-in-out infinite` }}
//                       >
//                         <img src={book.cover} alt={book.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
//                         <p className="absolute bottom-0 left-0 right-0 p-2.5 font-body text-[10px] text-[#F1E7D6]/95 leading-tight">{book.title}</p>
//                       </div>
//                     ))}
//                   </div>
//                   {/* wooden shelf plank */}
//                   <div className="mt-4 h-3 rounded-full bg-gradient-to-r from-[#4a3220] via-[#2a1c10] to-[#4a3220] shadow-md shadow-black/40" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* TRENDING */}
//         <section
//           className={`transition-all duration-1000 delay-300 ease-out ${
//             mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//         >
//           <div className="flex items-end justify-between mb-8">
//             <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">Trending Now</h2>
//             <span className="font-body text-xs text-amber-400/80 cursor-pointer hover:underline mb-2">View all</span>
//           </div>
//           <div className="grid grid-cols-2 sm:grid-cols-5 gap-7">
//             {trending.map((b) => (
//               <BookCard key={b.title} b={b} />
//             ))}
//           </div>
//         </section>

//         {/* RECENTLY ADDED — same visual treatment as Trending */}
//         <section
//           className={`transition-all duration-1000 delay-400 ease-out ${
//             mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//         >
//           <div className="flex items-end justify-between mb-8">
//             <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">Recently Added</h2>
//             <span className="font-body text-xs text-amber-400/80 cursor-pointer hover:underline mb-2">View all</span>
//           </div>
//           <div className="grid grid-cols-2 sm:grid-cols-5 gap-7">
//             {recentlyAdded.map((b) => (
//               <BookCard key={b.title} b={b} />
//             ))}
//           </div>
//         </section>

//         {/* FOR YOU — slightly smaller cards */}
//         <section
//           className={`transition-all duration-1000 delay-500 ease-out ${
//             mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//         >
//           <div className="flex items-end justify-between mb-8">
//             <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">For You</h2>
//             <span className="font-body text-xs text-[#8a7a63]">AI picks, tuned to your shelf</span>
//           </div>
//           <div className="grid grid-cols-2 sm:grid-cols-5 gap-7">
//             {forYou.map((b) => (
//               <BookCard key={b.title} b={b} />
//             ))}
//           </div>
//         </section>

//         {/* READING PROGRESS */}
//         <section
//           className={`transition-all duration-1000 delay-700 ease-out ${
//             mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//         >
//           <div className="rounded-[1.75rem] border border-[#2a2118] bg-[#1d150d]/60 p-6 flex items-center gap-6">
//             <div className="relative h-20 w-20 shrink-0">
//               <svg className="h-20 w-20 -rotate-90" viewBox="0 0 80 80">
//                 <circle cx="40" cy="40" r="34" fill="none" stroke="#2a2118" strokeWidth="8" />
//                 <circle
//                   cx="40"
//                   cy="40"
//                   r="34"
//                   fill="none"
//                   stroke="url(#grad)"
//                   strokeWidth="8"
//                   strokeLinecap="round"
//                   strokeDasharray={2 * Math.PI * 34}
//                   strokeDashoffset={2 * Math.PI * 34 * (1 - 0.68)}
//                   className="transition-all duration-1000 ease-out"
//                 />
//                 <defs>
//                   <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
//                     <stop offset="0%" stopColor="#fbbf24" />
//                     <stop offset="100%" stopColor="#f97316" />
//                   </linearGradient>
//                 </defs>
//               </svg>
//               <span className="absolute inset-0 flex items-center justify-center font-body text-sm font-semibold">68%</span>
//             </div>
//             <div className="flex-1">
//               <p className="font-body font-semibold text-[#F1E7D6]">Atomic Habits</p>
//               <p className="font-body text-xs text-[#8a7a63]">James Clear</p>
//             </div>
//             <button className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2 font-body text-xs font-medium text-[#1a120a] transition-transform duration-300 hover:scale-105">
//               Continue Reading
//             </button>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { ArrowRight, Sparkles, BookOpen, Users, Feather, Quote } from "lucide-react";

// /**
//  * RetroRead — HomePage
//  * Palette: deep forest / library-lamp brass — a nature-toned shift away from
//  * the previous brown-black + amber combo. Lighter, airier spacing throughout.
//  */

// const bookQuotes = [
//   { text: "A reader lives a thousand lives before he dies.", author: "George R. R. Martin" },
//   { text: "There is no friend as loyal as a book.", author: "Ernest Hemingway" },
//   { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
//   { text: "Books are a uniquely portable magic.", author: "Stephen King" },
//   { text: "Once you learn to read, you will be forever free.", author: "Frederick Douglass" },
//   { text: "Books are the mirrors of the soul.", author: "Virginia Woolf" },
// ];

// const trending = [
//   { rank: 1, title: "The Night Circus", author: "Erin Morgenstern", cover: "https://covers.openlibrary.org/b/isbn/9780307744432-L.jpg" },
//   { rank: 2, title: "Project Hail Mary", author: "Andy Weir", cover: "https://covers.openlibrary.org/b/isbn/9780593135204-L.jpg" },
//   { rank: 3, title: "The Silent Patient", author: "Alex Michaelides", cover: "https://covers.openlibrary.org/b/isbn/9781250301697-L.jpg" },
//   { rank: 4, title: "It Ends With Us", author: "Colleen Hoover", cover: "https://covers.openlibrary.org/b/isbn/9781501110368-L.jpg" },
//   { rank: 5, title: "Dune", author: "Frank Herbert", cover: "https://covers.openlibrary.org/b/isbn/9780441013593-L.jpg" },
// ];

// const forYou = [
//   { title: "Klara and the Sun", author: "Kazuo Ishiguro", cover: "https://covers.openlibrary.org/b/isbn/9780571364879-L.jpg" },
//   { title: "The Hobbit", author: "J.R.R. Tolkien", cover: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg" },
//   { title: "Educated", author: "Tara Westover", cover: "https://covers.openlibrary.org/b/isbn/9780399590504-L.jpg" },
// ];

// const recentlyAdded = [
//   { rank: null, title: "Lessons in Chemistry", author: "Bonnie Garmus", cover: "https://covers.openlibrary.org/b/isbn/9780385547345-L.jpg" },
//   { rank: null, title: "Tomorrow, and Tomorrow, and Tomorrow", author: "Gabrielle Zevin", cover: "https://covers.openlibrary.org/b/isbn/9780593321201-L.jpg" },
//   { rank: null, title: "Fourth Wing", author: "Rebecca Yarros", cover: "https://covers.openlibrary.org/b/isbn/9781649374042-L.jpg" },
// ];

// const shelfRowA = [
//   { title: "The Psychology of Money", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4e8GZDve-S3E7Z9MWbnBg6DxpIBHTSNmmSdMV6wip4g&s=10" },
//   { title: "The Almanack of Naval Ravikant", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi2iH4nzRUJhjM5QdR-TkRh6ronj-8Bd-0c1Z571wXMQ&s" },
//   { title: "The Design of Everyday Things", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRymGoQp0oPqVTNGiT0oy90Bhizxih9ApTM_SbOaKir4za_7W3Esmici__1&s=10" },
// ];
// const shelfRowB = [
//   { title: "Deep Work", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYoNbwM6uYYhX5mzJvJNf3zcVh5n1uN8ou0VUFGbFi-A&s" },
//   { title: "Thinking, Fast and Slow", cover: "https://m.media-amazon.com/images/I/41iJ8QmVs2L._SY445_SX342_FMwebp_.jpg" },
//   { title: "Clean Code", cover: "https://m.media-amazon.com/images/I/71I-zd7XWkL._UF1000,1000_QL80_.jpg" },
// ];

// const stats = [
//   { icon: BookOpen, value: "10K+", label: "Books Available" },
//   { icon: Sparkles, value: "AI", label: "Powered" },
//   { icon: Users, value: "50K+", label: "Happy Readers" },
// ];

// function BookCard({ b, size = "normal" }) {
//   const w = size === "small" ? "max-w-[104px]" : "max-w-[128px]";
//   return (
//     <div className={`group text-center ${w} mx-auto`}>
//       <div className="relative">
//         {b.rank && (
//           <span className="absolute -top-2 -left-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#C9A567] text-[11px] font-bold text-[#141C16]">
//             {b.rank}
//           </span>
//         )}
//         <div className="aspect-[2/3] rounded-lg bg-gradient-to-br from-[#2C382E] to-[#161D18] border border-[#3B4A3D]/60 overflow-hidden shadow-md shadow-black/30 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[#C9A567]/10">
//           <img src={b.cover} alt={b.title} className="h-full w-full object-cover opacity-90" loading="lazy" />
//         </div>
//       </div>
//       <p className="mt-3 font-body text-sm text-[#EFE7D8]/90 line-clamp-1">{b.title}</p>
//       <p className="font-body text-xs text-[#7E8F80]">{b.author}</p>
//     </div>
//   );
// }

// export default function HomePage() {
//   const [mounted, setMounted] = useState(false);
//   const [quoteIndex, setQuoteIndex] = useState(0);
//   const [quoteVisible, setQuoteVisible] = useState(true);

//   useEffect(() => {
//     setMounted(true);
//     const id = setInterval(() => {
//       setQuoteVisible(false);
//       setTimeout(() => {
//         setQuoteIndex((i) => (i + 1) % bookQuotes.length);
//         setQuoteVisible(true);
//       }, 450);
//     }, 4800);
//     return () => clearInterval(id);
//   }, []);

//   const activeQuote = bookQuotes[quoteIndex];

//   return (
//     <div className="min-h-screen w-full bg-[#141C16] text-[#EFE7D8] overflow-x-hidden relative">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,600&family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap');
//         @keyframes flicker { 0%,100% { opacity: .92; } 50% { opacity: .68; } }
//         .font-quote { font-family: 'Cormorant Garamond', serif; }
//         .font-display { font-family: 'Fraunces', serif; }
//         .font-body { font-family: 'Inter', sans-serif; }
//       `}</style>

//       {/* soft, nature-toned ambient glow — moss + brass instead of orange */}
//       <div className="pointer-events-none fixed inset-0 z-0">
//         <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-[#7E9B76]/10 blur-[130px]" />
//         <div className="absolute top-1/3 right-0 h-72 w-72 rounded-full bg-[#C9A567]/10 blur-[110px]" />
//       </div>

//       <main className="font-body relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20 space-y-40">
//         {/* HERO */}
//         <section
//           className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 ease-out ${
//             mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//         >
//           {/* LEFT: quote headline, then everything below centered */}
//           <div>
//             <div className="inline-flex items-center gap-2 rounded-full border border-[#3B4A3D] bg-[#7E9B76]/[0.06] px-4 py-1.5 text-xs tracking-wide text-[#B9C9AE] mb-9">
//               <Feather size={13} className="text-[#C9A567]" />
//               A new line, every visit
//             </div>

//             <div className="min-h-[9.5rem] md:min-h-[11rem] mb-9">
//               <p
//                 className={`font-quote italic text-4xl md:text-5xl leading-[1.15] text-transparent bg-clip-text bg-gradient-to-br from-[#F3ECDC] via-[#E6D6A8] to-[#C9A567] transition-all duration-500 ${
//                   quoteVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
//                 }`}
//               >
//                 "{activeQuote.text}"
//               </p>
//               <p
//                 className={`font-body mt-4 text-sm tracking-[0.15em] uppercase text-[#B9C9AE]/80 transition-all duration-500 delay-100 ${
//                   quoteVisible ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 — {activeQuote.author}
//               </p>
//             </div>

//             {/* Centered block: subhead, CTAs, stats — more breathing room between each */}
//             <div className="flex flex-col items-center text-center">
//               <div className="relative max-w-md mb-11 rounded-tl-[2.5rem] rounded-tr-[1rem] rounded-br-[2.5rem] rounded-bl-[1rem] border border-[#EFE7D8]/10 bg-gradient-to-br from-[#EFE7D8]/[0.06] to-[#C9A567]/[0.03] px-7 py-6 shadow-inner shadow-black/20">
//                 <Quote size={20} className="mx-auto mb-2 text-[#C9A567]/70" />
//                 <p className="text-[#DCD2BC] text-base md:text-lg leading-relaxed">
//                   Every shelf tells a story before you've turned a page.
//                   Let's go find the one that's yours.
//                 </p>
//               </div>
//               <div className="flex justify-center gap-4">
//                 {stats.map(({ icon: Icon, value, label }) => (
//                   <div
//                     key={label}
//                     className="flex flex-col items-center gap-2 rounded-[1.75rem] border border-[#2E3A30] bg-[#1A2320]/70 backdrop-blur-sm px-6 py-4 transition-all duration-300 hover:border-[#C9A567]/40 hover:-translate-y-1"
//                   >
//                     <Icon size={18} className="text-[#C9A567]" />
//                     <p className="text-lg font-semibold leading-none">{value}</p>
//                     <p className="text-[11px] text-[#7E8F80]">{label}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* RIGHT: the shelf — now the scale anchor of the hero, bigger spines, roomier */}
//           <div
//             className={`relative transition-all duration-1000 delay-200 ease-out ${
//               mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
//             }`}
//           >
//             <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-[#7E9B76]/10 to-[#C9A567]/5 blur-2xl" />
//             <div className="relative rounded-[1.75rem] border border-[#2A342C] bg-gradient-to-b from-[#1B241D] to-[#111712] p-8 md:p-12 space-y-14">
//               {[shelfRowA, shelfRowB].map((row, ri) => (
//                 <div key={ri}>
//                   <div className="grid grid-cols-3 gap-6 md:gap-8">
//                     {row.map((book, i) => (
//                       <div
//                         key={book.title}
//                         className="group relative h-32 md:h-40 rounded-md overflow-hidden bg-gradient-to-br from-[#2C382E] to-[#161D18] border border-[#3B4A3D]/60 shadow-lg shadow-black/50 transition-transform duration-300 hover:-translate-y-2"
//                         style={{ animation: `flicker ${4 + i}s ease-in-out infinite` }}
//                       >
//                         <img src={book.cover} alt={book.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
//                         <p className="absolute bottom-0 left-0 right-0 p-2.5 font-body text-[11px] text-[#EFE7D8]/95 leading-tight">{book.title}</p>
//                       </div>
//                     ))}
//                   </div>
//                   {/* wooden shelf plank */}
//                   <div className="mt-5 h-3.5 rounded-full bg-gradient-to-r from-[#4A3E28] via-[#241D12] to-[#4A3E28] shadow-md shadow-black/40" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* TRENDING */}
//         <section
//           className={`transition-all duration-1000 delay-300 ease-out ${
//             mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//         >
//           <div className="flex items-end justify-between mb-10">
//             <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">Trending Now</h2>
//             <span className="font-body text-xs text-[#C9A567]/80 cursor-pointer hover:underline mb-2">View all</span>
//           </div>
//           <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-8 gap-y-12">
//             {trending.map((b) => (
//               <BookCard key={b.title} b={b} />
//             ))}
//           </div>
//         </section>

//         {/* RECENTLY ADDED */}
//         <section
//           className={`transition-all duration-1000 delay-400 ease-out ${
//             mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//         >
//           <div className="flex items-end justify-between mb-10">
//             <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">Recently Added</h2>
//             <span className="font-body text-xs text-[#C9A567]/80 cursor-pointer hover:underline mb-2">View all</span>
//           </div>
//           <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-8 gap-y-12">
//             {recentlyAdded.map((b) => (
//               <BookCard key={b.title} b={b} />
//             ))}
//           </div>
//         </section>

//         {/* FOR YOU — slightly smaller cards */}
//         <section
//           className={`transition-all duration-1000 delay-500 ease-out ${
//             mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//         >
//           <div className="flex items-end justify-between mb-10">
//             <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">For You</h2>
//             <span className="font-body text-xs text-[#7E8F80]">AI picks, tuned to your shelf</span>
//           </div>
//           <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-8 gap-y-12">
//             {forYou.map((b) => (
//               <BookCard key={b.title} b={b} size="small" />
//             ))}
//           </div>
//         </section>

//         {/* READING PROGRESS */}
//         <section
//           className={`transition-all duration-1000 delay-700 ease-out ${
//             mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//         >
//           <div className="rounded-[1.75rem] border border-[#242E26] bg-[#171F19]/60 p-7 flex items-center gap-6">
//             <div className="relative h-20 w-20 shrink-0">
//               <svg className="h-20 w-20 -rotate-90" viewBox="0 0 80 80">
//                 <circle cx="40" cy="40" r="34" fill="none" stroke="#242E26" strokeWidth="8" />
//                 <circle
//                   cx="40"
//                   cy="40"
//                   r="34"
//                   fill="none"
//                   stroke="url(#grad)"
//                   strokeWidth="8"
//                   strokeLinecap="round"
//                   strokeDasharray={2 * Math.PI * 34}
//                   strokeDashoffset={2 * Math.PI * 34 * (1 - 0.68)}
//                   className="transition-all duration-1000 ease-out"
//                 />
//                 <defs>
//                   <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
//                     <stop offset="0%" stopColor="#E6D6A8" />
//                     <stop offset="100%" stopColor="#C9A567" />
//                   </linearGradient>
//                 </defs>
//               </svg>
//               <span className="absolute inset-0 flex items-center justify-center font-body text-sm font-semibold">68%</span>
//             </div>
//             <div className="flex-1">
//               <p className="font-body font-semibold text-[#EFE7D8]">Atomic Habits</p>
//               <p className="font-body text-xs text-[#7E8F80]">James Clear</p>
//             </div>
//             <button className="rounded-full bg-gradient-to-r from-[#C9A567] to-[#A98849] px-5 py-2 font-body text-xs font-medium text-[#141C16] transition-transform duration-300 hover:scale-105">
//               Continue Reading
//             </button>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { ArrowRight, Sparkles, BookOpen, Users, Feather } from "lucide-react";

// /**
//  * RetroRead — HomePage
//  * Palette: deep forest / library-lamp brass — a nature-toned shift away from
//  * the previous brown-black + amber combo. Lighter, airier spacing throughout.
//  */

// const bookQuotes = [
//   { text: "A reader lives a thousand lives before he dies.", author: "George R. R. Martin" },
//   { text: "There is no friend as loyal as a book.", author: "Ernest Hemingway" },
//   { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
//   { text: "Books are a uniquely portable magic.", author: "Stephen King" },
//   { text: "Once you learn to read, you will be forever free.", author: "Frederick Douglass" },
//   { text: "Books are the mirrors of the soul.", author: "Virginia Woolf" },
// ];

// const trending = [
//   { rank: 1, title: "The Night Circus", author: "Erin Morgenstern", cover: "https://covers.openlibrary.org/b/isbn/9780307744432-L.jpg" },
//   { rank: 2, title: "Project Hail Mary", author: "Andy Weir", cover: "https://covers.openlibrary.org/b/isbn/9780593135204-L.jpg" },
//   { rank: 3, title: "The Silent Patient", author: "Alex Michaelides", cover: "https://covers.openlibrary.org/b/isbn/9781250301697-L.jpg" },
//   { rank: 4, title: "It Ends With Us", author: "Colleen Hoover", cover: "https://covers.openlibrary.org/b/isbn/9781501110368-L.jpg" },
//   { rank: 5, title: "Dune", author: "Frank Herbert", cover: "https://covers.openlibrary.org/b/isbn/9780441013593-L.jpg" },
// ];

// const forYou = [
//   { title: "Klara and the Sun", author: "Kazuo Ishiguro", cover: "https://covers.openlibrary.org/b/isbn/9780571364879-L.jpg" },
//   { title: "The Hobbit", author: "J.R.R. Tolkien", cover: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg" },
//   { title: "Educated", author: "Tara Westover", cover: "https://covers.openlibrary.org/b/isbn/9780399590504-L.jpg" },
// ];

// const recentlyAdded = [
//   { rank: null, title: "Lessons in Chemistry", author: "Bonnie Garmus", cover: "https://covers.openlibrary.org/b/isbn/9780385547345-L.jpg" },
//   { rank: null, title: "Tomorrow, and Tomorrow, and Tomorrow", author: "Gabrielle Zevin", cover: "https://covers.openlibrary.org/b/isbn/9780593321201-L.jpg" },
//   { rank: null, title: "Fourth Wing", author: "Rebecca Yarros", cover: "https://covers.openlibrary.org/b/isbn/9781649374042-L.jpg" },
// ];

// const shelfRowA = [
//   { title: "The Psychology of Money", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4e8GZDve-S3E7Z9MWbnBg6DxpIBHTSNmmSdMV6wip4g&s=10" },
//   { title: "The Almanack of Naval Ravikant", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi2iH4nzRUJhjM5QdR-TkRh6ronj-8Bd-0c1Z571wXMQ&s" },
//   { title: "The Design of Everyday Things", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRymGoQp0oPqVTNGiT0oy90Bhizxih9ApTM_SbOaKir4za_7W3Esmici__1&s=10" },
// ];
// const shelfRowB = [
//   { title: "Deep Work", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYoNbwM6uYYhX5mzJvJNf3zcVh5n1uN8ou0VUFGbFi-A&s" },
//   { title: "Thinking, Fast and Slow", cover: "https://m.media-amazon.com/images/I/41iJ8QmVs2L._SY445_SX342_FMwebp_.jpg" },
//   { title: "Clean Code", cover: "https://m.media-amazon.com/images/I/71I-zd7XWkL._UF1000,1000_QL80_.jpg" },
// ];

// const stats = [
//   { icon: BookOpen, value: "10K+", label: "Books Available" },
//   { icon: Sparkles, value: "AI", label: "Powered" },
//   { icon: Users, value: "50K+", label: "Happy Readers" },
// ];

// function BookCard({ b, size = "normal" }) {
//   const w = size === "small" ? "max-w-[104px]" : "max-w-[128px]";
//   return (
//     <div className={`group text-center ${w} mx-auto`}>
//       <div className="relative">
//         {b.rank && (
//           <span className="absolute -top-2 -left-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#C9A567] text-[11px] font-bold text-[#141C16]">
//             {b.rank}
//           </span>
//         )}
//         <div className="aspect-[2/3] rounded-lg bg-gradient-to-br from-[#2C382E] to-[#161D18] border border-[#3B4A3D]/60 overflow-hidden shadow-md shadow-black/30 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[#C9A567]/10">
//           <img src={b.cover} alt={b.title} className="h-full w-full object-cover opacity-90" loading="lazy" />
//         </div>
//       </div>
//       <p className="mt-3 font-body text-sm text-[#EFE7D8]/90 line-clamp-1">{b.title}</p>
//       <p className="font-body text-xs text-[#7E8F80]">{b.author}</p>
//     </div>
//   );
// }

// export default function HomePage() {
//   const [mounted, setMounted] = useState(false);
//   const [quoteIndex, setQuoteIndex] = useState(0);
//   const [quoteVisible, setQuoteVisible] = useState(true);

//   useEffect(() => {
//     setMounted(true);
//     const id = setInterval(() => {
//       setQuoteVisible(false);
//       setTimeout(() => {
//         setQuoteIndex((i) => (i + 1) % bookQuotes.length);
//         setQuoteVisible(true);
//       }, 450);
//     }, 7200);
//     return () => clearInterval(id);
//   }, []);

//   const activeQuote = bookQuotes[quoteIndex];

//   return (
//     <div className="min-h-screen w-full bg-[#141C16] text-[#EFE7D8] overflow-x-hidden relative">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,600&family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap');
//         @keyframes flicker { 0%,100% { opacity: .92; } 50% { opacity: .68; } }
//         .font-quote { font-family: 'Cormorant Garamond', serif; }
//         .font-display { font-family: 'Fraunces', serif; }
//         .font-body { font-family: 'Inter', sans-serif; }
//       `}</style>

//       {/* soft, nature-toned ambient glow — moss + brass instead of orange */}
//       <div className="pointer-events-none fixed inset-0 z-0">
//         <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-[#7E9B76]/10 blur-[130px]" />
//         <div className="absolute top-1/3 right-0 h-72 w-72 rounded-full bg-[#C9A567]/10 blur-[110px]" />
//       </div>

//       <main className="font-body relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20 space-y-40">
//         {/* HERO */}
//         <section
//           className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 ease-out ${
//             mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//         >
//           {/* LEFT: quote headline, then everything below centered */}
//           <div>
//             <div className="inline-flex items-center gap-2 rounded-full border border-[#3B4A3D] bg-[#7E9B76]/[0.06] px-4 py-1.5 text-xs tracking-wide text-[#B9C9AE] mb-9">
//               <Feather size={13} className="text-[#C9A567]" />
//               A new line, every visit
//             </div>

//             <div className="min-h-[9.5rem] md:min-h-[11rem] mb-9">
//               <p
//                 className={`font-quote italic text-4xl md:text-5xl leading-[1.15] text-transparent bg-clip-text bg-gradient-to-br from-[#F3ECDC] via-[#E6D6A8] to-[#C9A567] transition-all duration-500 ${
//                   quoteVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
//                 }`}
//               >
//                 "{activeQuote.text}"
//               </p>
//               <p
//                 className={`font-body mt-4 text-sm tracking-[0.15em] uppercase text-[#B9C9AE]/80 transition-all duration-500 delay-100 ${
//                   quoteVisible ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 — {activeQuote.author}
//               </p>
//             </div>

//             {/* Centered block: just the CTAs — quote line now lives in the strip before Trending */}
//             <div className="flex flex-col items-center text-center">
//               <div className="flex flex-wrap justify-center gap-4">
//                 {/* <button className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C9A567] to-[#A98849] px-6 py-3 font-medium text-sm text-[#141C16] shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-[1.03] active:scale-95">
//                   Explore Library
//                   <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
//                 </button>
//                 <button className="rounded-full border border-[#3B4A3D] px-6 py-3 font-medium text-sm text-[#EFE7D8] transition-colors duration-300 hover:bg-[#1C2620]">
//                   AI Recommendations
//                 </button> */}
//               </div>
//             </div>
//           </div>

//           {/* RIGHT: the shelf — now the scale anchor of the hero, bigger spines, roomier */}
//           <div
//             className={`relative transition-all duration-1000 delay-200 ease-out ${
//               mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
//             }`}
//           >
//             <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-[#7E9B76]/10 to-[#C9A567]/5 blur-2xl" />
//             <div className="relative rounded-[1.75rem] border border-[#2A342C] bg-gradient-to-b from-[#1B241D] to-[#111712] p-8 md:p-10 space-y-10">
//               {[shelfRowA, shelfRowB].map((row, ri) => (
//                 <div key={ri}>
//                   <div className="grid grid-cols-3 gap-5 md:gap-7">
//                     {row.map((book, i) => (
//                       <div
//                         key={book.title}
//                         className="group relative h-24 md:h-28 rounded-md overflow-hidden bg-gradient-to-br from-[#2C382E] to-[#161D18] border border-[#3B4A3D]/60 shadow-lg shadow-black/50 transition-transform duration-300 hover:-translate-y-2"
//                         style={{ animation: `flicker ${4 + i}s ease-in-out infinite` }}
//                       >
//                         <img src={book.cover} alt={book.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
//                         <p className="absolute bottom-0 left-0 right-0 p-2 font-body text-[10px] text-[#EFE7D8]/95 leading-tight">{book.title}</p>
//                       </div>
//                     ))}
//                   </div>
//                   {/* wooden shelf plank */}
//                   <div className="mt-4 h-3 rounded-full bg-gradient-to-r from-[#4A3E28] via-[#241D12] to-[#4A3E28] shadow-md shadow-black/40" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* STARTING STRIP — quote line + stats, one box, one line each, sits before Trending */}
//         <section
//           className={`transition-all duration-1000 delay-200 ease-out ${
//             mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 items-center divide-y md:divide-y-0 md:divide-x divide-[#2E3A30] rounded-[1.75rem] border border-[#2E3A30] bg-[#1A2320]/60 backdrop-blur-sm w-full px-8 md:px-12 py-8 md:py-10">
//             <div className="flex items-center justify-center pb-6 md:pb-0 md:pr-8">
//               <p className="text-center text-lg md:text-2xl font-quote italic text-[#DCD2BC] leading-snug">
//                 Every shelf tells a story before you've turned a page.
//               </p>
//             </div>
//             <div className="flex items-center justify-center pt-6 md:pt-0 md:pl-8">
//               <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
//                 {stats.map(({ icon: Icon, value, label }) => (
//                   <div key={label} className="flex items-center gap-2.5">
//                     <Icon size={22} className="text-[#C9A567]" />
//                     <div className="text-left leading-tight">
//                       <p className="text-xl font-semibold">{value}</p>
//                       <p className="text-xs text-[#7E8F80]">{label}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* TRENDING */}
//         <section
//           className={`transition-all duration-1000 delay-300 ease-out ${
//             mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//         >
//           <div className="flex items-end justify-between mb-10">
//             <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">Trending Now</h2>
//             <span className="font-body text-xs text-[#C9A567]/80 cursor-pointer hover:underline mb-2">View all</span>
//           </div>
//           <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-8 gap-y-12">
//             {trending.map((b) => (
//               <BookCard key={b.title} b={b} />
//             ))}
//           </div>
//         </section>

//         {/* RECENTLY ADDED */}
//         <section
//           className={`transition-all duration-1000 delay-400 ease-out ${
//             mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//         >
//           <div className="flex items-end justify-between mb-10">
//             <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">Recently Added</h2>
//             <span className="font-body text-xs text-[#C9A567]/80 cursor-pointer hover:underline mb-2">View all</span>
//           </div>
//           <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-8 gap-y-12">
//             {recentlyAdded.map((b) => (
//               <BookCard key={b.title} b={b} />
//             ))}
//           </div>
//         </section>

//         {/* FOR YOU — slightly smaller cards */}
//         <section
//           className={`transition-all duration-1000 delay-500 ease-out ${
//             mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//         >
//           <div className="flex items-end justify-between mb-10">
//             <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">For You</h2>
//             <span className="font-body text-xs text-[#7E8F80]">AI picks, tuned to your shelf</span>
//           </div>
//           <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-8 gap-y-12">
//             {forYou.map((b) => (
//               <BookCard key={b.title} b={b} size="small" />
//             ))}
//           </div>
//         </section>

//         {/* READING PROGRESS */}
//         <section
//           className={`transition-all duration-1000 delay-700 ease-out ${
//             mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//           }`}
//         >
//           <div className="rounded-[1.75rem] border border-[#242E26] bg-[#171F19]/60 p-7 flex items-center gap-6">
//             <div className="relative h-20 w-20 shrink-0">
//               <svg className="h-20 w-20 -rotate-90" viewBox="0 0 80 80">
//                 <circle cx="40" cy="40" r="34" fill="none" stroke="#242E26" strokeWidth="8" />
//                 <circle
//                   cx="40"
//                   cy="40"
//                   r="34"
//                   fill="none"
//                   stroke="url(#grad)"
//                   strokeWidth="8"
//                   strokeLinecap="round"
//                   strokeDasharray={2 * Math.PI * 34}
//                   strokeDashoffset={2 * Math.PI * 34 * (1 - 0.68)}
//                   className="transition-all duration-1000 ease-out"
//                 />
//                 <defs>
//                   <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
//                     <stop offset="0%" stopColor="#E6D6A8" />
//                     <stop offset="100%" stopColor="#C9A567" />
//                   </linearGradient>
//                 </defs>
//               </svg>
//               <span className="absolute inset-0 flex items-center justify-center font-body text-sm font-semibold">68%</span>
//             </div>
//             <div className="flex-1">
//               <p className="font-body font-semibold text-[#EFE7D8]">Atomic Habits</p>
//               <p className="font-body text-xs text-[#7E8F80]">James Clear</p>
//             </div>
//             <button className="rounded-full bg-gradient-to-r from-[#C9A567] to-[#A98849] px-5 py-2 font-body text-xs font-medium text-[#141C16] transition-transform duration-300 hover:scale-105">
//               Continue Reading
//             </button>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { ArrowRight, Sparkles, BookOpen, Users, Feather, Flame, Target, Library } from "lucide-react";

/**
 * RetroRead — HomePage
 * Palette: brighter forest moss + brass + a touch of warm clay for the streak
 * widget — nature-toned throughout, lifted a shade brighter than before so
 * it doesn't read as flat/dark, with roomier spacing and consistent shadows
 * on every book cover.
 */

const bookQuotes = [
  { text: "A reader lives a thousand lives before he dies.", author: "George R. R. Martin" },
  { text: "There is no friend as loyal as a book.", author: "Ernest Hemingway" },
  { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
  { text: "Books are a uniquely portable magic.", author: "Stephen King" },
  { text: "Once you learn to read, you will be forever free.", author: "Frederick Douglass" },
  { text: "Books are the mirrors of the soul.", author: "Virginia Woolf" },
];

const trending = [
  { rank: 1, title: "The Night Circus", author: "Erin Morgenstern", cover: "https://covers.openlibrary.org/b/isbn/9780307744432-L.jpg" },
  { rank: 2, title: "Project Hail Mary", author: "Andy Weir", cover: "https://covers.openlibrary.org/b/isbn/9780593135204-L.jpg" },
  { rank: 3, title: "The Silent Patient", author: "Alex Michaelides", cover: "https://covers.openlibrary.org/b/isbn/9781250301697-L.jpg" },
  { rank: 4, title: "It Ends With Us", author: "Colleen Hoover", cover: "https://covers.openlibrary.org/b/isbn/9781501110368-L.jpg" },
  { rank: 5, title: "Dune", author: "Frank Herbert", cover: "https://covers.openlibrary.org/b/isbn/9780441013593-L.jpg" },
];

const forYou = [
  { title: "Klara and the Sun", author: "Kazuo Ishiguro", cover: "https://covers.openlibrary.org/b/isbn/9780571364879-L.jpg" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", cover: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg" },
  { title: "Educated", author: "Tara Westover", cover: "https://covers.openlibrary.org/b/isbn/9780399590504-L.jpg" },
];

const recentlyAdded = [
  { rank: null, title: "Lessons in Chemistry", author: "Bonnie Garmus", cover: "https://covers.openlibrary.org/b/isbn/9780385547345-L.jpg" },
  { rank: null, title: "Tomorrow, and Tomorrow, and Tomorrow", author: "Gabrielle Zevin", cover: "https://covers.openlibrary.org/b/isbn/9780593321201-L.jpg" },
  { rank: null, title: "Fourth Wing", author: "Rebecca Yarros", cover: "https://covers.openlibrary.org/b/isbn/9781649374042-L.jpg" },
];

// Shelf rows — trimmed to 2 spines per row so each one gets more breathing
// room and a bigger presence instead of three cramped together.
const shelfRowA = [
  { title: "The Psychology of Money", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4e8GZDve-S3E7Z9MWbnBg6DxpIBHTSNmmSdMV6wip4g&s=10" },
  { title: "The Design of Everyday Things", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRymGoQp0oPqVTNGiT0oy90Bhizxih9ApTM_SbOaKir4za_7W3Esmici__1&s=10" },
];
const shelfRowB = [
  { title: "Deep Work", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYoNbwM6uYYhX5mzJvJNf3zcVh5n1uN8ou0VUFGbFi-A&s" },
  { title: "Thinking, Fast and Slow", cover: "https://m.media-amazon.com/images/I/41iJ8QmVs2L._SY445_SX342_FMwebp_.jpg" },
];

const stats = [
  { icon: BookOpen, value: "10K+", label: "Books Available" },
  { icon: Sparkles, value: "AI", label: "Powered" },
  { icon: Users, value: "50K+", label: "Happy Readers" },
];

// Last 7 days of reading activity for the streak widget — true means the
// user read something that day.
const streakDays = [true, true, false, true, true, true, true];
const streakDayLabels = ["M", "T", "W", "T", "F", "S", "S"];

function SectionEyebrow({ icon: Icon, children }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#8FA688] mb-3">
      <Icon size={13} className="text-[#D8B274]" />
      {children}
    </div>
  );
}

function BookCard({ b, size = "normal" }) {
  // sized up slightly from before (116/144 vs 104/128), same aspect ratio
  const w = size === "small" ? "max-w-[116px]" : "max-w-[144px]";
  return (
    <div className={`group text-center ${w} mx-auto`}>
      <div className="relative">
        {b.rank && (
          <span className="absolute -top-2 -left-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#D8B274] text-[11px] font-bold text-[#16211A] shadow-md shadow-black/40">
            {b.rank}
          </span>
        )}
        <div className="aspect-[2/3] rounded-lg bg-gradient-to-br from-[#33422F] to-[#182319] border border-[#46593F]/60 overflow-hidden shadow-[0_14px_28px_-10px_rgba(0,0,0,0.65)] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_34px_-10px_rgba(216,178,116,0.25)]">
          <img src={b.cover} alt={b.title} className="h-full w-full object-cover opacity-90" loading="lazy" />
        </div>
      </div>
      {/* clear breathing room between the cover and its text block */}
      <p className="mt-7 font-body text-sm text-[#F2ECDD]/90 line-clamp-1">{b.title}</p>
      <p className="mt-2 font-body text-xs text-[#8FA688]">{b.author}</p>
    </div>
  );
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [quoteVisible, setQuoteVisible] = useState(true);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => {
      setQuoteVisible(false);
      setTimeout(() => {
        setQuoteIndex((i) => (i + 1) % bookQuotes.length);
        setQuoteVisible(true);
      }, 450);
    }, 7200);
    return () => clearInterval(id);
  }, []);

  const activeQuote = bookQuotes[quoteIndex];

  return (
    <div className="min-h-screen w-full bg-[#2E4527] text-[#F2ECDD] overflow-x-hidden relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,600&family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap');
        @keyframes flicker { 0%,100% { opacity: .92; } 50% { opacity: .68; } }
        .font-quote { font-family: 'Cormorant Garamond', serif; }
        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* ambient glow — brighter leaf green + brass instead of the old muted olive */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-[#A9D998]/15 blur-[130px]" />
        <div className="absolute top-1/3 right-0 h-72 w-72 rounded-full bg-[#E8C88C]/15 blur-[110px]" />
      </div>

      <main className="font-body relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20 space-y-40">
        {/* HERO */}
        <section
          className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#46593F] bg-[#8FBF7F]/[0.07] px-4 py-1.5 text-xs tracking-wide text-[#C3D6B8] mb-9">
              <Feather size={13} className="text-[#D8B274]" />
              A new line, every visit
            </div>

            <div className="min-h-[9.5rem] md:min-h-[11rem] mb-9">
              <p
                className={`font-quote italic text-4xl md:text-5xl leading-[1.15] text-transparent bg-clip-text bg-gradient-to-br from-[#F5EFDE] via-[#ECD9A0] to-[#D8B274] transition-all duration-500 ${
                  quoteVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
              >
                "{activeQuote.text}"
              </p>
              <p
                className={`font-body mt-4 text-sm tracking-[0.15em] uppercase text-[#C3D6B8]/80 transition-all duration-500 delay-100 ${
                  quoteVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                — {activeQuote.author}
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex flex-wrap justify-center gap-4">
                {/* <button className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D8B274] to-[#BE9354] px-6 py-3 font-medium text-sm text-[#16211A] shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-[1.03] active:scale-95">
                  Explore Library
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button className="rounded-full border border-[#46593F] px-6 py-3 font-medium text-sm text-[#F2ECDD] transition-colors duration-300 hover:bg-[#1C2620]">
                  AI Recommendations
                </button> */}
              </div>
            </div>
          </div>

          {/* RIGHT: the shelf — two spines per row now, bigger and better spaced */}
          <div
            className={`relative transition-all duration-1000 delay-200 ease-out ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-[#8FBF7F]/10 to-[#D8B274]/5 blur-2xl" />
            <div className="relative rounded-[1.75rem] border border-[#34412E] bg-gradient-to-b from-[#1D271F] to-[#131A14] p-8 md:p-10 space-y-12">
              {[shelfRowA, shelfRowB].map((row, ri) => (
                <div key={ri}>
                  {/* gap-x widened so the first cover in the row isn't crowding the edge */}
                  <div className="grid grid-cols-2 gap-8 md:gap-10">
                    {row.map((book, i) => (
                      <div
                        key={book.title}
                        className="group relative h-28 md:h-32 rounded-md overflow-hidden bg-gradient-to-br from-[#33422F] to-[#182319] border border-[#46593F]/60 shadow-[0_16px_30px_-8px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-2"
                        style={{ animation: `flicker ${4 + i}s ease-in-out infinite` }}
                      >
                        <img src={book.cover} alt={book.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        <p className="absolute bottom-0 left-0 right-0 p-2.5 font-body text-[11px] text-[#F2ECDD]/95 leading-tight">{book.title}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 h-3 rounded-full bg-gradient-to-r from-[#4A3E28] via-[#241D12] to-[#4A3E28] shadow-md shadow-black/40" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STARTING STRIP */}
        <section
          className={`transition-all duration-1000 delay-200 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 items-center divide-y md:divide-y-0 md:divide-x divide-[#384A32] rounded-[1.75rem] border border-[#384A32] bg-[#1D271F]/60 backdrop-blur-sm w-full px-8 md:px-12 py-8 md:py-10">
            <div className="flex items-center justify-center pb-6 md:pb-0 md:pr-8">
              <p className="text-center text-lg md:text-2xl font-quote italic text-[#DCD2BC] leading-snug">
                Every shelf tells a story before you've turned a page.
              </p>
            </div>
            <div className="flex items-center justify-center pt-6 md:pt-0 md:pl-8">
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <Icon size={22} className="text-[#D8B274]" />
                    <div className="text-left leading-tight">
                      <p className="text-xl font-semibold">{value}</p>
                      <p className="text-xs text-[#8FA688]">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TRENDING / RECENTLY ADDED / FOR YOU — grouped with extra-large gaps
            between each of the three, on top of the page's normal rhythm */}
        <div className="space-y-48">
          <section
            className={`transition-all duration-1000 delay-300 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <SectionEyebrow icon={Sparkles}>What everyone's reading</SectionEyebrow>
            <div className="flex items-end justify-between mb-12">
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">Trending Now</h2>
              <span className="font-body text-xs text-[#D8B274]/80 cursor-pointer hover:underline mb-2">View all</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-10 gap-y-14">
              {trending.map((b) => (
                <BookCard key={b.title} b={b} />
              ))}
            </div>
          </section>

          <section
            className={`transition-all duration-1000 delay-400 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <SectionEyebrow icon={Library}>Fresh on the shelf</SectionEyebrow>
            <div className="flex items-end justify-between mb-12">
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">Recently Added</h2>
              <span className="font-body text-xs text-[#D8B274]/80 cursor-pointer hover:underline mb-2">View all</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-10 gap-y-14">
              {recentlyAdded.map((b) => (
                <BookCard key={b.title} b={b} />
              ))}
            </div>
          </section>

          <section
            className={`transition-all duration-1000 delay-500 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <SectionEyebrow icon={BookOpen}>Tuned to your shelf</SectionEyebrow>
            <div className="flex items-end justify-between mb-12">
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">For You</h2>
              <span className="font-body text-xs text-[#8FA688]">AI picks, tuned to your shelf</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-10 gap-y-14">
              {forYou.map((b) => (
                <BookCard key={b.title} b={b} size="small" />
              ))}
            </div>
          </section>
        </div>

        {/* READING PROGRESS + DAILY GOAL + DAILY STREAK */}
        <section
          className={`transition-all duration-1000 delay-700 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Continue reading */}
            <div className="rounded-[1.75rem] border border-[#2E3A28] bg-[#1A231C]/60 p-7 flex items-center gap-6 shadow-[0_10px_26px_-12px_rgba(0,0,0,0.5)]">
              <div className="relative h-20 w-20 shrink-0">
                <svg className="h-20 w-20 -rotate-90" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="34" fill="none" stroke="#2E3A28" strokeWidth="8" />
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    fill="none"
                    stroke="url(#grad)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 34}
                    strokeDashoffset={2 * Math.PI * 34 * (1 - 0.68)}
                    className="transition-all duration-1000 ease-out"
                  />
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#ECD9A0" />
                      <stop offset="100%" stopColor="#D8B274" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="absolute inset-0 flex items-center justify-center font-body text-sm font-semibold">68%</span>
              </div>
              <div className="flex-1">
                <p className="font-body font-semibold text-[#F2ECDD]">Atomic Habits</p>
                <p className="font-body text-xs text-[#8FA688]">James Clear</p>
              </div>
            </div>

            {/* Daily streak */}
            <div className="rounded-[1.75rem] border border-[#4A3626] bg-gradient-to-br from-[#241C16] to-[#1A231C]/60 p-7 shadow-[0_10px_26px_-12px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#CC7A52]/15 border border-[#CC7A52]/40">
                  <Flame size={20} className="text-[#E08F5E]" />
                </div>
                <div>
                  <p className="font-body font-semibold text-[#F2ECDD] leading-tight">12 Day Streak</p>
                  <p className="font-body text-xs text-[#8FA688]">Read today to keep it alive</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-1.5">
                {streakDays.map((active, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5">
                    <div
                      className={`h-7 w-7 rounded-full flex items-center justify-center text-[10px] font-semibold transition-colors ${
                        active
                          ? "bg-gradient-to-br from-[#E08F5E] to-[#CC7A52] text-[#1A140F] shadow-md shadow-black/30"
                          : "bg-[#2E3A28] text-[#8FA688] border border-[#46593F]/50"
                      }`}
                    >
                      {active && <Flame size={12} />}
                    </div>
                    <span className="text-[10px] text-[#8FA688]">{streakDayLabels[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily goal */}
            <div className="rounded-[1.75rem] border border-[#2E3A28] bg-[#1A231C]/60 p-7 shadow-[0_10px_26px_-12px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#8FBF7F]/15 border border-[#8FBF7F]/40">
                  <Target size={20} className="text-[#9FCB8F]" />
                </div>
                <div>
                  <p className="font-body font-semibold text-[#F2ECDD] leading-tight">Daily Goal</p>
                  <p className="font-body text-xs text-[#8FA688]">18 of 30 pages today</p>
                </div>
              </div>
              <div className="h-2.5 rounded-full bg-[#2E3A28] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#8FBF7F] to-[#6FA85F] transition-all duration-1000 ease-out"
                  style={{ width: "60%" }}
                />
              </div>
              <p className="mt-3 font-body text-[11px] text-[#8FA688]">12 pages to go — you've got this.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}