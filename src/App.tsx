import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Employers from './components/Employers';
import Employees from './components/Employees';
import Contact from './components/Contact';
import { PageType } from './types';

export default function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const getPageFromPath = (path: string): PageType => {
    if (path === '/employers') return 'employers';
    if (path === '/employees') return 'employees';
    if (path === '/contact') return 'contact';
    return 'home';
  };

  const currentPage = getPageFromPath(location.pathname);

  const handleNavigate = (page: PageType) => {
    if (page === 'home') {
      navigate('/');
    } else {
      navigate(`/${page}`);
    }
  };

  useEffect(() => {
    // Elegant first-load screen simulation allowing the gold shimmer sweep animation to execute
    const loaderTimer = setTimeout(() => {
      setIsAppLoading(false);
    }, 1500);

    return () => clearTimeout(loaderTimer);
  }, []);

  // Sync scroll on location change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div id="full-app-viewport" className="relative min-h-screen bg-[#0A0A0A] text-[#F5F0E8] font-sans antialiased selection:bg-gold selection:text-pure-black">
      
      {/* 1. Page Load Overlay Loader */}
      {isAppLoading && (
        <div 
          id="initial-page-loader" 
          className="fixed inset-0 z-[100] bg-[#0A0A0A] flex flex-col items-center justify-center transition-all duration-750 ease-out"
        >
          <div className="text-center space-y-4 flex flex-col items-center select-none">
            {/* Spinning glowing emblem star */}
            <span className="text-5xl text-gold shimmer-logo block mb-1">★</span>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-white uppercase shimmer-logo">
              Gold Star Personnel
            </h1>
            <div className="w-12 h-px bg-gold/30 my-2" />
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-sans font-semibold">
              Partners in Your Success
            </p>
          </div>
        </div>
      )}

      {/* 2. Primary Page Shell Structure */}
      <div 
        id="app-content-shell" 
        className={`transition-opacity duration-1000 ${isAppLoading ? 'opacity-0' : 'opacity-100'}`}
      >
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
        
        {/* Dynamic Route View Port - Main Canvas */}
        <main id="main-content-canvas" className="min-h-[85vh]">
          <Routes>
            <Route path="/" element={<Home onNavigate={handleNavigate} />} />
            <Route path="/employers" element={<Employers onNavigate={handleNavigate} />} />
            <Route path="/employees" element={<Employees onNavigate={handleNavigate} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home onNavigate={handleNavigate} />} />
          </Routes>
        </main>

        <Footer onNavigate={handleNavigate} />
      </div>

    </div>
  );
}
