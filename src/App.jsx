// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import './App.css';

// // Import Components one by one (NOT using destructuring)
// import Navbar from './Components/Common/Navbar';
// import Footer from './Components/Common/Footer';

// // Import Pages
// import HomePage from './Components/Pages/HomePage';
// import LoginPage from './Components/Pages/LoginPage';
// import RegisterPage from './Components/Pages/RegisterPage';
// import DashboardPage from './Components/Pages/DashboardPage';
// import LibraryPage from './Components/Pages/LibraryPage';
// import MarketplacePage from './Components/Pages/MarketplacePage';
// import ExchangePage from './Components/Pages/ExchangePage';
// import CommunityPage from './Components/Pages/CommunityPage';
// import ProfilePage from './Components/Pages/ProfilePage';

// function App() {
//   return (
//     <div className="min-h-screen flex flex-col bg-[#F8F9FA]">
//       <Navbar />
      
//       <main className="flex-grow container mx-auto px-4 py-8">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route path="/dashboard" element={<DashboardPage />} />
//           <Route path="/library" element={<LibraryPage />} />
//           <Route path="/marketplace" element={<MarketplacePage />} />
//           <Route path="/exchange" element={<ExchangePage />} />
//           <Route path="/community" element={<CommunityPage />} />
//           <Route path="/profile" element={<ProfilePage />} />
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </main>
      
//       <Footer />
//     </div>
//   );
// }

// export default App;

//Working point
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Common/Navbar';
// import Footer from './Components/Common/Footer';
// import HomePage from './Components/Pages/HomePage';

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//         </Routes>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Common/Navbar';
import Footer from './Components/Common/Footer';

import HomePage from './Components/Pages/HomePage';
import LoginPage from './Components/Pages/LoginPage';
import RegisterPage from './Components/Pages/RegisterPage';
import DashboardPage from './Components/Pages/DashboardPage';
import LibraryPage from './Components/Pages/LibraryPage';
import MarketplacePage from './Components/Pages/MarketplacePage';
import ExchangePage from './Components/Pages/ExchangePage';
import CommunityPage from './Components/Pages/CommunityPage';
import ProfilePage from './Components/Pages/ProfilePage';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>  {/* ← Routes only, NO BrowserRouter */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/exchange" element={<ExchangePage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;