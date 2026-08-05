import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, BookOpen } from 'lucide-react';

const quote = { text: "A reader lives a thousand lives before he dies.", author: "George R. R. Martin" };

function ReadingBook() {
  return (
    <div className="relative w-36 h-24 mx-auto" style={{ perspective: '1000px' }}>
      <div className="absolute inset-0 flex rounded-md overflow-hidden shadow-[0_10px_24px_-8px_rgba(0,0,0,0.4)]">
        <div className="w-1/2 bg-[#FFFBF3] border-r border-[#1E2A42]/10 p-2.5 space-y-1.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-1 rounded bg-[#1E2A42]/10" style={{ width: `${74 - i * 12}%` }} />
          ))}
        </div>
        <div className="w-1/2 bg-[#FFFBF3] p-2.5 space-y-1.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-1 rounded bg-[#1E2A42]/10" style={{ width: `${62 - i * 9}%` }} />
          ))}
        </div>
      </div>
      <div className="absolute left-1/2 top-0 bottom-0 w-3 -translate-x-1/2 bg-gradient-to-r from-transparent via-black/15 to-transparent" />
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="book-page"
          style={{ animation: `page-flip 3.6s ease-in-out ${i * 1.2}s infinite`, zIndex: 3 - i }}
        />
      ))}
    </div>
  );
}

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => { setMounted(true); }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const [sparkles] = useState(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i, left: Math.random() * 100, top: Math.random() * 100,
      size: 2 + Math.random() * 3, duration: 6 + Math.random() * 8, delay: Math.random() * 6,
    }))
  );

  return (
    <div className="min-h-screen w-full bg-[#F6EFE3] flex items-center justify-center px-4 py-12">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Newsreader:ital,wght@1,500;1,600&family=Work+Sans:wght@400;500;600&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-quote { font-family: 'Newsreader', serif; }
        .font-body { font-family: 'Work Sans', sans-serif; }

        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: translateY(0) scale(0.6); }
          50% { opacity: 1; transform: translateY(-12px) scale(1); }
        }
        .sparkle {
          position: absolute; border-radius: 9999px;
          background: radial-gradient(circle, #C9A567 0%, rgba(201,165,103,0) 70%);
          animation: twinkle ease-in-out infinite;
        }

        @keyframes glow-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(1.1); }
        }
        .glow-pulse { animation: glow-pulse 3.2s ease-in-out infinite; }

        .book-page {
          position: absolute; top: 0; right: 0; width: 50%; height: 100%;
          background: #FFFBF3; border-left: 1px solid rgba(30,42,66,0.12);
          transform-origin: left center; backface-visibility: hidden;
          border-radius: 0 6px 6px 0;
        }
        @keyframes page-flip {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(-172deg); }
          100% { transform: rotateY(0deg); }
        }

        .field-underline {
          position: absolute; bottom: -1px; left: 50%; height: 2px; width: 0%;
          background: #D8472F; transition: all 0.3s ease; transform: translateX(-50%);
        }
        .field-wrap:focus-within .field-underline { width: 100%; }

        .seal-btn { position: relative; overflow: hidden; }
        @keyframes shimmer-sweep {
          0% { transform: translateX(-120%) skewX(-15deg); }
          100% { transform: translateX(220%) skewX(-15deg); }
        }
        .seal-btn::after {
          content: ""; position: absolute; top: 0; left: 0; width: 40%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.5), transparent);
          transform: translateX(-120%) skewX(-15deg);
        }
        .seal-btn:hover::after { animation: shimmer-sweep 0.9s ease forwards; }
      `}</style>

      <div
        className={`w-full max-w-4xl grid md:grid-cols-2 rounded-[1.75rem] overflow-hidden border border-[#E2D5BC] shadow-[0_20px_50px_-25px_rgba(30,42,66,0.4)] transition-all duration-700 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* LEFT — storybook panel */}
        <div className="hidden md:flex relative flex-col justify-between bg-[#1E2A42] text-[#F6EFE3] p-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            {sparkles.map((s) => (
              <span
                key={s.id}
                className="sparkle"
                style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, animationDuration: `${s.duration}s`, animationDelay: `${s.delay}s` }}
              />
            ))}
          </div>

          <div className="relative flex items-center gap-2">
            <BookOpen size={20} className="text-[#C9A567]" />
            <span className="font-display font-semibold tracking-wide">PageTurner</span>
          </div>

          <div className="relative flex flex-col items-center text-center py-6">
            <div className="relative mb-7">
              <div className="absolute inset-0 rounded-full bg-[#C9A567]/25 blur-2xl glow-pulse" />
              <div className="relative"><ReadingBook /></div>
            </div>
            <p className="font-quote italic text-2xl leading-snug text-[#F6EFE3]/90">"{quote.text}"</p>
            <p className="font-body text-xs tracking-[0.15em] uppercase text-[#C9A567]/80 mt-3">— {quote.author}</p>
          </div>

          <p className="relative font-body text-xs text-[#B9C9AE]">Your shelf missed you.</p>
        </div>

        {/* RIGHT — form */}
        <div className="bg-[#FFFBF3] p-8 md:p-10 flex flex-col justify-center">
          <div className="mb-7">
            <div className="flex items-center gap-2 mb-2 md:hidden">
              <BookOpen size={16} className="text-[#D8472F]" />
              <span className="font-display font-semibold text-[#1E2A42]">PageTurner</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-[#1E2A42]">Welcome back</h2>
            <p className="text-[#8A7F6B] text-sm mt-1">Login to continue reading</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="field-wrap relative">
              <label className="block text-xs font-medium text-[#5B6478] mb-1.5">Email Address</label>
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-[#F6EFE3] rounded-lg border border-[#E2D5BC]">
                <Mail size={15} className="text-[#8A7F6B] shrink-0" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="flex-1 min-w-0 bg-transparent text-sm text-[#1E2A42] placeholder:text-[#8A7F6B] focus:outline-none"
                />
              </div>
              <span className="field-underline" />
            </div>

            <div className="field-wrap relative">
              <label className="block text-xs font-medium text-[#5B6478] mb-1.5">Password</label>
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-[#F6EFE3] rounded-lg border border-[#E2D5BC]">
                <Lock size={15} className="text-[#8A7F6B] shrink-0" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
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

            <button
              type="submit"
              className="seal-btn w-full py-3 bg-[#D8472F] text-[#FFFBF3] rounded-full text-sm font-semibold shadow-[0_10px_20px_-10px_rgba(216,71,47,0.55)] hover:bg-[#B23522] transition"
            >
              Login
            </button>

            <p className="text-center text-sm text-[#8A7F6B]">
              Don't have an account?{' '}
              <Link to="/register" className="text-[#D8472F] font-semibold hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;