// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { Mail, Lock, User, Eye, EyeOff, BookOpen } from 'lucide-react';

// // const quote = { text: "Once you learn to read, you will be forever free.", author: "Frederick Douglass" };

// // function ReadingBook() {
// //   return (
// //     <div className="relative w-36 h-24 mx-auto" style={{ perspective: '1000px' }}>
// //       <div className="absolute inset-0 flex rounded-md overflow-hidden shadow-[0_10px_24px_-8px_rgba(0,0,0,0.4)]">
// //         <div className="w-1/2 bg-[#FFFBF3] border-r border-[#1E2A42]/10 p-2.5 space-y-1.5">
// //           {[0, 1, 2, 3].map((i) => (
// //             <div key={i} className="h-1 rounded bg-[#1E2A42]/10" style={{ width: `${74 - i * 12}%` }} />
// //           ))}
// //         </div>
// //         <div className="w-1/2 bg-[#FFFBF3] p-2.5 space-y-1.5">
// //           {[0, 1, 2, 3].map((i) => (
// //             <div key={i} className="h-1 rounded bg-[#1E2A42]/10" style={{ width: `${62 - i * 9}%` }} />
// //           ))}
// //         </div>
// //       </div>
// //       <div className="absolute left-1/2 top-0 bottom-0 w-3 -translate-x-1/2 bg-gradient-to-r from-transparent via-black/15 to-transparent" />
// //       {[0, 1, 2].map((i) => (
// //         <div
// //           key={i}
// //           className="book-page"
// //           style={{ animation: `page-flip 3.6s ease-in-out ${i * 1.2}s infinite`, zIndex: 3 - i }}
// //         />
// //       ))}
// //     </div>
// //   );
// // }

// // const RegisterPage = () => {
// //   const navigate = useNavigate();
// //   const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [mounted, setMounted] = useState(false);

// //   React.useEffect(() => { setMounted(true); }, []);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     navigate('/dashboard');
// //   };

// //   const [sparkles] = useState(() =>
// //     Array.from({ length: 12 }, (_, i) => ({
// //       id: i, left: Math.random() * 100, top: Math.random() * 100,
// //       size: 2 + Math.random() * 3, duration: 6 + Math.random() * 8, delay: Math.random() * 6,
// //     }))
// //   );

// //   const fields = [
// //     { key: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe', icon: User },
// //     { key: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com', icon: Mail },
// //   ];

// //   return (
// //     <div className="min-h-screen w-full bg-[#F6EFE3] flex items-center justify-center px-4 py-12">
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Newsreader:ital,wght@1,500;1,600&family=Work+Sans:wght@400;500;600&display=swap');
// //         .font-display { font-family: 'Fraunces', serif; }
// //         .font-quote { font-family: 'Newsreader', serif; }
// //         .font-body { font-family: 'Work Sans', sans-serif; }

// //         @keyframes twinkle {
// //           0%, 100% { opacity: 0; transform: translateY(0) scale(0.6); }
// //           50% { opacity: 1; transform: translateY(-12px) scale(1); }
// //         }
// //         .sparkle {
// //           position: absolute; border-radius: 9999px;
// //           background: radial-gradient(circle, #C9A567 0%, rgba(201,165,103,0) 70%);
// //           animation: twinkle ease-in-out infinite;
// //         }

// //         @keyframes glow-pulse {
// //           0%, 100% { opacity: 0.3; transform: scale(1); }
// //           50% { opacity: 0.55; transform: scale(1.1); }
// //         }
// //         .glow-pulse { animation: glow-pulse 3.2s ease-in-out infinite; }

// //         .book-page {
// //           position: absolute; top: 0; right: 0; width: 50%; height: 100%;
// //           background: #FFFBF3; border-left: 1px solid rgba(30,42,66,0.12);
// //           transform-origin: left center; backface-visibility: hidden;
// //           border-radius: 0 6px 6px 0;
// //         }
// //         @keyframes page-flip {
// //           0% { transform: rotateY(0deg); }
// //           50% { transform: rotateY(-172deg); }
// //           100% { transform: rotateY(0deg); }
// //         }

// //         .field-underline {
// //           position: absolute; bottom: -1px; left: 50%; height: 2px; width: 0%;
// //           background: #D8472F; transition: all 0.3s ease; transform: translateX(-50%);
// //         }
// //         .field-wrap:focus-within .field-underline { width: 100%; }

// //         .seal-btn { position: relative; overflow: hidden; }
// //         @keyframes shimmer-sweep {
// //           0% { transform: translateX(-120%) skewX(-15deg); }
// //           100% { transform: translateX(220%) skewX(-15deg); }
// //         }
// //         .seal-btn::after {
// //           content: ""; position: absolute; top: 0; left: 0; width: 40%; height: 100%;
// //           background: linear-gradient(120deg, transparent, rgba(255,255,255,0.5), transparent);
// //           transform: translateX(-120%) skewX(-15deg);
// //         }
// //         .seal-btn:hover::after { animation: shimmer-sweep 0.9s ease forwards; }
// //       `}</style>

// //       <div
// //         className={`w-full max-w-4xl grid md:grid-cols-2 rounded-[1.75rem] overflow-hidden border border-[#E2D5BC] shadow-[0_20px_50px_-25px_rgba(30,42,66,0.4)] transition-all duration-700 ${
// //           mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
// //         }`}
// //       >
// //         {/* LEFT — storybook panel */}
// //         <div className="hidden md:flex relative flex-col justify-between bg-[#1E2A42] text-[#F6EFE3] p-10 overflow-hidden order-2">
// //           <div className="pointer-events-none absolute inset-0">
// //             {sparkles.map((s) => (
// //               <span
// //                 key={s.id}
// //                 className="sparkle"
// //                 style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, animationDuration: `${s.duration}s`, animationDelay: `${s.delay}s` }}
// //               />
// //             ))}
// //           </div>

// //           <div className="relative flex items-center gap-2 justify-end">
// //             <span className="font-display font-semibold tracking-wide">PageTurner</span>
// //             <BookOpen size={20} className="text-[#C9A567]" />
// //           </div>

// //           <div className="relative flex flex-col items-center text-center py-6">
// //             <div className="relative mb-7">
// //               <div className="absolute inset-0 rounded-full bg-[#D8472F]/20 blur-2xl glow-pulse" />
// //               <div className="relative"><ReadingBook /></div>
// //             </div>
// //             <p className="font-quote italic text-2xl leading-snug text-[#F6EFE3]/90">"{quote.text}"</p>
// //             <p className="font-body text-xs tracking-[0.15em] uppercase text-[#C9A567]/80 mt-3">— {quote.author}</p>
// //           </div>

// //           <p className="relative font-body text-xs text-[#B9C9AE] text-right">A new chapter starts today.</p>
// //         </div>

// //         {/* RIGHT — form */}
// //         <div className="bg-[#FFFBF3] p-8 md:p-10 flex flex-col justify-center order-1">
// //           <div className="mb-7">
// //             <div className="flex items-center gap-2 mb-2 md:hidden">
// //               <BookOpen size={16} className="text-[#D8472F]" />
// //               <span className="font-display font-semibold text-[#1E2A42]">PageTurner</span>
// //             </div>
// //             <h2 className="font-display text-2xl font-bold text-[#1E2A42]">Create your account</h2>
// //             <p className="text-[#8A7F6B] text-sm mt-1">Start your reading journey today</p>
// //           </div>

// //           <form onSubmit={handleSubmit} className="space-y-5">
// //             {fields.map(({ key, label, type, placeholder, icon: Icon }) => (
// //               <div className="field-wrap relative" key={key}>
// //                 <label className="block text-xs font-medium text-[#5B6478] mb-1.5">{label}</label>
// //                 <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-[#F6EFE3] rounded-lg border border-[#E2D5BC]">
// //                   <Icon size={15} className="text-[#8A7F6B] shrink-0" />
// //                   <input
// //                     type={type}
// //                     placeholder={placeholder}
// //                     value={formData[key]}
// //                     onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
// //                     required
// //                     className="flex-1 min-w-0 bg-transparent text-sm text-[#1E2A42] placeholder:text-[#8A7F6B] focus:outline-none"
// //                   />
// //                 </div>
// //                 <span className="field-underline" />
// //               </div>
// //             ))}

// //             <div className="field-wrap relative">
// //               <label className="block text-xs font-medium text-[#5B6478] mb-1.5">Password</label>
// //               <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-[#F6EFE3] rounded-lg border border-[#E2D5BC]">
// //                 <Lock size={15} className="text-[#8A7F6B] shrink-0" />
// //                 <input
// //                   type={showPassword ? 'text' : 'password'}
// //                   placeholder="Create a password"
// //                   value={formData.password}
// //                   onChange={(e) => setFormData({ ...formData, password: e.target.value })}
// //                   required
// //                   className="flex-1 min-w-0 bg-transparent text-sm text-[#1E2A42] placeholder:text-[#8A7F6B] focus:outline-none"
// //                 />
// //                 <button type="button" onClick={() => setShowPassword((v) => !v)} className="text-[#8A7F6B] hover:text-[#1E2A42] transition shrink-0">
// //                   {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
// //                 </button>
// //               </div>
// //               <span className="field-underline" />
// //             </div>

// //             <div className="field-wrap relative">
// //               <label className="block text-xs font-medium text-[#5B6478] mb-1.5">Confirm Password</label>
// //               <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-[#F6EFE3] rounded-lg border border-[#E2D5BC]">
// //                 <Lock size={15} className="text-[#8A7F6B] shrink-0" />
// //                 <input
// //                   type="password"
// //                   placeholder="Confirm your password"
// //                   value={formData.confirmPassword}
// //                   onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
// //                   required
// //                   className="flex-1 min-w-0 bg-transparent text-sm text-[#1E2A42] placeholder:text-[#8A7F6B] focus:outline-none"
// //                 />
// //               </div>
// //               <span className="field-underline" />
// //             </div>

// //             <button
// //               type="submit"
// //               className="seal-btn w-full py-3 bg-[#D8472F] text-[#FFFBF3] rounded-full text-sm font-semibold shadow-[0_10px_20px_-10px_rgba(216,71,47,0.55)] hover:bg-[#B23522] transition"
// //             >
// //               Create Account
// //             </button>

// //             <p className="text-center text-sm text-[#8A7F6B]">
// //               Already have an account?{' '}
// //               <Link to="/login" className="text-[#D8472F] font-semibold hover:underline">
// //                 Login
// //               </Link>
// //             </p>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RegisterPage;
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Mail, Lock, User, Eye, EyeOff, BookOpen, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';

// const quote = { text: "Once you learn to read, you will be forever free.", author: "Frederick Douglass" };

// function ReadingBook() {
//   return (
//     <div className="relative w-36 h-24 mx-auto" style={{ perspective: '1000px' }}>
//       <div className="absolute inset-0 flex rounded-md overflow-hidden shadow-[0_10px_24px_-8px_rgba(0,0,0,0.4)]">
//         <div className="w-1/2 bg-[#FFFBF3] border-r border-[#1E2A42]/10 p-2.5 space-y-1.5">
//           {[0, 1, 2, 3].map((i) => (
//             <div key={i} className="h-1 rounded bg-[#1E2A42]/10" style={{ width: `${74 - i * 12}%` }} />
//           ))}
//         </div>
//         <div className="w-1/2 bg-[#FFFBF3] p-2.5 space-y-1.5">
//           {[0, 1, 2, 3].map((i) => (
//             <div key={i} className="h-1 rounded bg-[#1E2A42]/10" style={{ width: `${62 - i * 9}%` }} />
//           ))}
//         </div>
//       </div>
//       <div className="absolute left-1/2 top-0 bottom-0 w-3 -translate-x-1/2 bg-gradient-to-r from-transparent via-black/15 to-transparent" />
//       {[0, 1, 2].map((i) => (
//         <div key={i} className="book-page" style={{ animation: `page-flip 3.6s ease-in-out ${i * 1.2}s infinite`, zIndex: 3 - i }} />
//       ))}
//     </div>
//   );
// }

// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// function getPasswordStrength(pw) {
//   let score = 0;
//   if (pw.length >= 8) score++;
//   if (/[A-Z]/.test(pw)) score++;
//   if (/[0-9]/.test(pw)) score++;
//   if (/[^A-Za-z0-9]/.test(pw)) score++;
//   return score; // 0-4
// }

// const strengthMeta = [
//   { label: '', color: '#E2D5BC' },
//   { label: 'Weak', color: '#D8472F' },
//   { label: 'Fair', color: '#D8472F' },
//   { label: 'Good', color: '#A9812F' },
//   { label: 'Strong', color: '#4B7A4E' },
// ];

// const RegisterPage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
//   const [shake, setShake] = useState(false);

//   React.useEffect(() => { setMounted(true); }, []);

//   const strength = getPasswordStrength(formData.password);

//   function validate(data) {
//     const e = {};
//     if (!data.name.trim()) e.name = 'Name is required';
//     if (!data.email) e.email = 'Email is required';
//     else if (!emailRegex.test(data.email)) e.email = 'Enter a valid email address';
//     if (!data.password) e.password = 'Password is required';
//     else if (data.password.length < 6) e.password = 'Must be at least 6 characters';
//     if (!data.confirmPassword) e.confirmPassword = 'Please confirm your password';
//     else if (data.password !== data.confirmPassword) e.confirmPassword = 'Passwords do not match';
//     return e;
//   }

//   function handleChange(key, value) {
//     const next = { ...formData, [key]: value };
//     setFormData(next);
//     if (touched[key]) setErrors(validate(next));
//   }

//   function handleBlur(key) {
//     setTouched((t) => ({ ...t, [key]: true }));
//     setErrors(validate(formData));
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate(formData);
//     setErrors(validationErrors);
//     setTouched({ name: true, email: true, password: true, confirmPassword: true });

//     if (Object.keys(validationErrors).length > 0) {
//       setShake(true);
//       setTimeout(() => setShake(false), 500);
//       return;
//     }

//     setSubmitting(true);
//     setTimeout(() => navigate('/dashboard'), 900);
//   };

//   const [sparkles] = useState(() =>
//     Array.from({ length: 12 }, (_, i) => ({
//       id: i, left: Math.random() * 100, top: Math.random() * 100,
//       size: 2 + Math.random() * 3, duration: 6 + Math.random() * 8, delay: Math.random() * 6,
//     }))
//   );

//   const fields = [
//     { key: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe', icon: User },
//     { key: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com', icon: Mail },
//   ];

//   return (
//     <div className="min-h-screen w-full bg-[#F6EFE3] flex items-center justify-center px-4 py-12">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Newsreader:ital,wght@1,500;1,600&family=Work+Sans:wght@400;500;600&display=swap');
//         .font-display { font-family: 'Fraunces', serif; }
//         .font-quote { font-family: 'Newsreader', serif; }
//         .font-body { font-family: 'Work Sans', sans-serif; }

//         @keyframes twinkle { 0%, 100% { opacity: 0; transform: translateY(0) scale(0.6); } 50% { opacity: 1; transform: translateY(-12px) scale(1); } }
//         .sparkle { position: absolute; border-radius: 9999px; background: radial-gradient(circle, #C9A567 0%, rgba(201,165,103,0) 70%); animation: twinkle ease-in-out infinite; }

//         @keyframes glow-pulse { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.55; transform: scale(1.1); } }
//         .glow-pulse { animation: glow-pulse 3.2s ease-in-out infinite; }

//         .book-page { position: absolute; top: 0; right: 0; width: 50%; height: 100%; background: #FFFBF3; border-left: 1px solid rgba(30,42,66,0.12); transform-origin: left center; backface-visibility: hidden; border-radius: 0 6px 6px 0; }
//         @keyframes page-flip { 0% { transform: rotateY(0deg); } 50% { transform: rotateY(-172deg); } 100% { transform: rotateY(0deg); } }

//         .field-underline { position: absolute; bottom: -1px; left: 50%; height: 2px; width: 0%; background: #D8472F; transition: all 0.3s ease; transform: translateX(-50%); }
//         .field-wrap:focus-within .field-underline { width: 100%; }

//         .field-fade { opacity: 0; transform: translateY(10px); animation: field-fade-in 0.5s ease forwards; }
//         @keyframes field-fade-in { to { opacity: 1; transform: translateY(0); } }

//         @keyframes shake-x { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-6px); } 40% { transform: translateX(6px); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
//         .shake { animation: shake-x 0.4s ease; }

//         .seal-btn { position: relative; overflow: hidden; }
//         @keyframes shimmer-sweep { 0% { transform: translateX(-120%) skewX(-15deg); } 100% { transform: translateX(220%) skewX(-15deg); } }
//         .seal-btn::after { content: ""; position: absolute; top: 0; left: 0; width: 40%; height: 100%; background: linear-gradient(120deg, transparent, rgba(255,255,255,0.5), transparent); transform: translateX(-120%) skewX(-15deg); }
//         .seal-btn:hover::after { animation: shimmer-sweep 0.9s ease forwards; }

//         @keyframes error-in { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }
//         .error-in { animation: error-in 0.25s ease forwards; }
//       `}</style>

//       <div className={`w-full max-w-4xl grid md:grid-cols-2 rounded-[1.75rem] overflow-hidden border border-[#E2D5BC] shadow-[0_20px_50px_-25px_rgba(30,42,66,0.4)] transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${shake ? 'shake' : ''}`}>
//         {/* LEFT — storybook panel */}
//         <div className="hidden md:flex relative flex-col justify-between bg-[#1E2A42] text-[#F6EFE3] p-10 overflow-hidden order-2">
//           <div className="pointer-events-none absolute inset-0">
//             {sparkles.map((s) => (
//               <span key={s.id} className="sparkle" style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, animationDuration: `${s.duration}s`, animationDelay: `${s.delay}s` }} />
//             ))}
//           </div>
//           <div className="relative flex items-center gap-2 justify-end">
//             <span className="font-display font-semibold tracking-wide">PageTurner</span>
//             <BookOpen size={20} className="text-[#C9A567]" />
//           </div>
//           <div className="relative flex flex-col items-center text-center py-6">
//             <div className="relative mb-7">
//               <div className="absolute inset-0 rounded-full bg-[#D8472F]/20 blur-2xl glow-pulse" />
//               <div className="relative"><ReadingBook /></div>
//             </div>
//             <p className="font-quote italic text-2xl leading-snug text-[#F6EFE3]/90">"{quote.text}"</p>
//             <p className="font-body text-xs tracking-[0.15em] uppercase text-[#C9A567]/80 mt-3">— {quote.author}</p>
//           </div>
//           <p className="relative font-body text-xs text-[#B9C9AE] text-right">A new chapter starts today.</p>
//         </div>

//         {/* RIGHT — form */}
//         <div className="bg-[#FFFBF3] p-8 md:p-10 flex flex-col justify-center order-1">
//           <div className="mb-7">
//             <div className="flex items-center gap-2 mb-2 md:hidden">
//               <BookOpen size={16} className="text-[#D8472F]" />
//               <span className="font-display font-semibold text-[#1E2A42]">PageTurner</span>
//             </div>
//             <h2 className="font-display text-2xl font-bold text-[#1E2A42]">Create your account</h2>
//             <p className="text-[#8A7F6B] text-sm mt-1">Start your reading journey today</p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-5" noValidate>
//             {fields.map(({ key, label, type, placeholder, icon: Icon }, i) => (
//               <div className="field-wrap relative field-fade" style={{ animationDelay: `${80 + i * 70}ms` }} key={key}>
//                 <label className="block text-xs font-medium text-[#5B6478] mb-1.5">{label}</label>
//                 <div className={`flex items-center gap-2.5 px-3.5 py-2.5 bg-[#F6EFE3] rounded-lg border transition-colors ${errors[key] && touched[key] ? 'border-[#D8472F]' : 'border-[#E2D5BC]'}`}>
//                   <Icon size={15} className="text-[#8A7F6B] shrink-0" />
//                   <input
//                     type={type}
//                     placeholder={placeholder}
//                     value={formData[key]}
//                     onChange={(e) => handleChange(key, e.target.value)}
//                     onBlur={() => handleBlur(key)}
//                     className="flex-1 min-w-0 bg-transparent text-sm text-[#1E2A42] placeholder:text-[#8A7F6B] focus:outline-none"
//                   />
//                 </div>
//                 <span className="field-underline" />
//                 {errors[key] && touched[key] && (
//                   <p className="error-in flex items-center gap-1 text-xs text-[#D8472F] mt-1.5">
//                     <AlertCircle size={12} /> {errors[key]}
//                   </p>
//                 )}
//               </div>
//             ))}

//             <div className="field-wrap relative field-fade" style={{ animationDelay: '220ms' }}>
//               <label className="block text-xs font-medium text-[#5B6478] mb-1.5">Password</label>
//               <div className={`flex items-center gap-2.5 px-3.5 py-2.5 bg-[#F6EFE3] rounded-lg border transition-colors ${errors.password && touched.password ? 'border-[#D8472F]' : 'border-[#E2D5BC]'}`}>
//                 <Lock size={15} className="text-[#8A7F6B] shrink-0" />
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   placeholder="Create a password"
//                   value={formData.password}
//                   onChange={(e) => handleChange('password', e.target.value)}
//                   onBlur={() => handleBlur('password')}
//                   className="flex-1 min-w-0 bg-transparent text-sm text-[#1E2A42] placeholder:text-[#8A7F6B] focus:outline-none"
//                 />
//                 <button type="button" onClick={() => setShowPassword((v) => !v)} className="text-[#8A7F6B] hover:text-[#1E2A42] transition shrink-0">
//                   {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
//                 </button>
//               </div>
//               <span className="field-underline" />

//               {formData.password && (
//                 <div className="mt-2">
//                   <div className="flex gap-1">
//                     {[0, 1, 2, 3].map((i) => (
//                       <div
//                         key={i}
//                         className="h-1 flex-1 rounded-full transition-colors duration-300"
//                         style={{ backgroundColor: i < strength ? strengthMeta[strength].color : '#E2D5BC' }}
//                       />
//                     ))}
//                   </div>
//                   {strengthMeta[strength].label && (
//                     <p className="text-[11px] mt-1" style={{ color: strengthMeta[strength].color }}>
//                       {strengthMeta[strength].label} password
//                     </p>
//                   )}
//                 </div>
//               )}
//               {errors.password && touched.password && (
//                 <p className="error-in flex items-center gap-1 text-xs text-[#D8472F] mt-1.5">
//                   <AlertCircle size={12} /> {errors.password}
//                 </p>
//               )}
//             </div>

//             <div className="field-wrap relative field-fade" style={{ animationDelay: '290ms' }}>
//               <label className="block text-xs font-medium text-[#5B6478] mb-1.5">Confirm Password</label>
//               <div className={`flex items-center gap-2.5 px-3.5 py-2.5 bg-[#F6EFE3] rounded-lg border transition-colors ${errors.confirmPassword && touched.confirmPassword ? 'border-[#D8472F]' : 'border-[#E2D5BC]'}`}>
//                 <Lock size={15} className="text-[#8A7F6B] shrink-0" />
//                 <input
//                   type="password"
//                   placeholder="Confirm your password"
//                   value={formData.confirmPassword}
//                   onChange={(e) => handleChange('confirmPassword', e.target.value)}
//                   onBlur={() => handleBlur('confirmPassword')}
//                   className="flex-1 min-w-0 bg-transparent text-sm text-[#1E2A42] placeholder:text-[#8A7F6B] focus:outline-none"
//                 />
//                 {formData.confirmPassword && formData.password === formData.confirmPassword && (
//                   <CheckCircle2 size={15} className="text-[#4B7A4E] shrink-0" />
//                 )}
//               </div>
//               <span className="field-underline" />
//               {errors.confirmPassword && touched.confirmPassword && (
//                 <p className="error-in flex items-center gap-1 text-xs text-[#D8472F] mt-1.5">
//                   <AlertCircle size={12} /> {errors.confirmPassword}
//                 </p>
//               )}
//             </div>

//             <button
//               type="submit"
//               disabled={submitting}
//               className="seal-btn w-full py-3 bg-[#D8472F] text-[#FFFBF3] rounded-full text-sm font-semibold shadow-[0_10px_20px_-10px_rgba(216,71,47,0.55)] hover:bg-[#B23522] transition flex items-center justify-center gap-2 disabled:opacity-70"
//             >
//               {submitting ? <><Loader2 size={16} className="animate-spin" /> Creating account...</> : 'Create Account'}
//             </button>

//             <p className="text-center text-sm text-[#8A7F6B]">
//               Already have an account?{' '}
//               <Link to="/login" className="text-[#D8472F] font-semibold hover:underline">Login</Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, AtSign, Eye, EyeOff, BookOpen, Sparkles } from 'lucide-react';

const quote = { text: "There is no friend as loyal as a book.", author: "Ernest Hemingway" };

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', username: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => { setMounted(true); }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const fields = [
    { key: 'name', label: 'Full Name', type: 'text', placeholder: 'Enter your full name', icon: User },
    { key: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email', icon: Mail },
    { key: 'username', label: 'Username', type: 'text', placeholder: 'Choose a username', icon: AtSign },
  ];

  return (
    <div className="min-h-screen w-full bg-[#F6EFE3] flex items-center justify-center px-4 py-10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Newsreader:ital,wght@1,500;1,600&family=Work+Sans:wght@400;500;600&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-quote { font-family: 'Newsreader', serif; }
        .font-body { font-family: 'Work Sans', sans-serif; }

        .field-underline { position: absolute; bottom: -1px; left: 50%; height: 2px; width: 0%; background: #D8472F; transition: all 0.3s ease; transform: translateX(-50%); }
        .field-wrap:focus-within .field-underline { width: 100%; }

        .seal-btn { position: relative; overflow: hidden; }
        @keyframes shimmer-sweep { 0% { transform: translateX(-120%) skewX(-15deg); } 100% { transform: translateX(220%) skewX(-15deg); } }
        .seal-btn::after { content: ""; position: absolute; top: 0; left: 0; width: 40%; height: 100%; background: linear-gradient(120deg, transparent, rgba(255,255,255,0.5), transparent); transform: translateX(-120%) skewX(-15deg); }
        .seal-btn:hover::after { animation: shimmer-sweep 0.8s ease forwards; }

        .social-btn { transition: all 0.25s ease; }
        .social-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 16px -8px rgba(30,42,66,0.25); }
      `}</style>

      <div
        className={`w-full max-w-5xl grid md:grid-cols-2 rounded-[1.75rem] overflow-hidden border border-[#E2D5BC] shadow-[0_24px_60px_-30px_rgba(30,42,66,0.45)] transition-all duration-700 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* LEFT — form (matches reference: form on left, photo on right for register) */}
        <div className="bg-[#FFFBF3] p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
          <div className="flex items-center gap-2 mb-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D8472F]/10 border border-[#D8472F]/30">
              <User size={16} className="text-[#D8472F]" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-[#1E2A42]">Create Your Account</h2>
              <p className="text-[#8A7F6B] text-xs mt-0.5">Join PageTurner and discover a world of books.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {fields.map(({ key, label, type, placeholder, icon: Icon }) => (
              <div className="field-wrap relative" key={key}>
                <label className="block text-xs font-medium text-[#5B6478] mb-1.5">{label}</label>
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-[#F6EFE3] rounded-lg border border-[#E2D5BC]">
                  <Icon size={15} className="text-[#8A7F6B] shrink-0" />
                  <input
                    type={type}
                    placeholder={placeholder}
                    value={formData[key]}
                    onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                    required
                    className="flex-1 min-w-0 bg-transparent text-sm text-[#1E2A42] placeholder:text-[#8A7F6B] focus:outline-none"
                  />
                </div>
                <span className="field-underline" />
              </div>
            ))}

            <div className="field-wrap relative">
              <label className="block text-xs font-medium text-[#5B6478] mb-1.5">Password</label>
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-[#F6EFE3] rounded-lg border border-[#E2D5BC]">
                <Lock size={15} className="text-[#8A7F6B] shrink-0" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  className="flex-1 min-w-0 bg-transparent text-sm text-[#1E2A42] placeholder:text-[#8A7F6B] focus:outline-none"
                />
                <button type="button" onClick={() => setShowPassword((v) => !v)} className="text-[#8A7F6B] hover:text-[#1E2A42] transition shrink-0">
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
              <span className="field-underline" />
            </div>

            <div className="field-wrap relative">
              <label className="block text-xs font-medium text-[#5B6478] mb-1.5">Confirm Password</label>
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-[#F6EFE3] rounded-lg border border-[#E2D5BC]">
                <Lock size={15} className="text-[#8A7F6B] shrink-0" />
                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  required
                  className="flex-1 min-w-0 bg-transparent text-sm text-[#1E2A42] placeholder:text-[#8A7F6B] focus:outline-none"
                />
              </div>
              <span className="field-underline" />
            </div>

            <label className="flex items-start gap-2 text-xs text-[#5B6478] cursor-pointer select-none pt-1">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                required
                className="h-4 w-4 mt-0.5 rounded border-[#D9C7A3] accent-[#D8472F]"
              />
              I agree to the <span className="text-[#D8472F] font-medium">Terms of Service</span> and <span className="text-[#D8472F] font-medium">Privacy Policy</span>
            </label>

            <button
              type="submit"
              className="seal-btn w-full py-3 bg-[#1E2A42] text-[#FFFBF3] rounded-full text-sm font-semibold shadow-[0_10px_20px_-10px_rgba(30,42,66,0.5)] hover:bg-[#16223A] transition"
            >
              Register
            </button>

            <div className="flex items-center gap-3 py-1">
              <div className="flex-1 h-px bg-[#E2D5BC]" />
              <span className="text-xs text-[#8A7F6B]">or continue with</span>
              <div className="flex-1 h-px bg-[#E2D5BC]" />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'G', name: 'Google' },
                { label: 'f', name: 'Facebook' },
                { label: '', name: 'Apple' },
              ].map((s) => (
                <button
                  key={s.name}
                  type="button"
                  className="social-btn flex items-center justify-center py-2.5 rounded-lg border border-[#E2D5BC] bg-[#F6EFE3] text-[#1E2A42] font-display font-semibold text-lg"
                  aria-label={`Continue with ${s.name}`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <p className="text-center text-sm text-[#8A7F6B] pt-1">
              Already have an account?{' '}
              <Link to="/login" className="text-[#D8472F] font-semibold hover:underline">
                Login Now
              </Link>
            </p>
          </form>
        </div>

        {/* RIGHT — photo panel */}
        <div className="hidden md:flex relative min-h-[600px] flex-col justify-between p-8 overflow-hidden order-1 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1000&auto=format&fit=crop"
            alt="Books on a warm shelf"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A42]/85 via-[#1E2A42]/15 to-[#1E2A42]/35" />

          <div className="relative flex items-center gap-2 justify-end text-[#F6EFE3]">
            <span className="font-display font-semibold tracking-wide">PageTurner</span>
            <BookOpen size={20} className="text-[#E8C88C]" />
          </div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F6EFE3]/25 bg-[#1E2A42]/40 backdrop-blur-sm px-3.5 py-1.5 text-xs tracking-wide text-[#F6EFE3]/85 mb-4">
              <Sparkles size={12} className="text-[#E8C88C]" /> A new line, every visit
            </div>
            <p className="font-quote italic text-2xl leading-snug text-[#F6EFE3]">"{quote.text}"</p>
            <p className="font-body text-xs tracking-[0.15em] uppercase text-[#E8C88C] mt-3">— {quote.author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;