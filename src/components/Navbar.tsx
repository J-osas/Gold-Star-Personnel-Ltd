import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll handler for transparent to solid dark navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: Array<{ id: PageType; label: string }> = [
    { id: 'home', label: 'Home' },
    { id: 'employers', label: 'Employers' },
    { id: 'employees', label: 'Employees' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleLinkClick = (pageId: PageType) => {
    onNavigate(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav
        id="app-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-[#C9A84C]/25 py-3 shadow-lg' : 'bg-[#0A0A0A]/80 border-[#C9A84C]/10 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            
            {/* Left: Brand Logo text */}
            <div 
              id="nav-logo" 
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-1 cursor-pointer select-none group focus:outline-none"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') handleLinkClick('home'); }}
            >
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-gold uppercase transition group-hover:text-white">
                Gold <span className="text-white group-hover:text-gold transition">★</span> Star
              </span>
              <span className="font-sans text-[10px] uppercase font-bold tracking-[0.25em] text-white opacity-60 group-hover:opacity-100 transition pl-1 hidden sm:inline">
                Personnel
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div id="desktop-nav" className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`relative font-sans text-xs uppercase tracking-widest font-semibold transition px-1 py-1 ${
                      isActive ? 'text-gold' : 'text-off-white/80 hover:text-gold'
                    }`}
                  >
                    <span>{item.label}</span>
                    {/* Sliding underline element */}
                    <span 
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-gold transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 hover:w-full'
                      }`} 
                    />
                  </button>
                );
              })}

              <div className="w-px h-4 bg-gold/25" />

              {/* Phone Contacts */}
              <a 
                id="navbar-phone-btn" 
                href="tel:07482732291"
                className="flex items-center gap-2 px-4 py-2 border border-gold/20 hover:border-gold hover:bg-gold/5 text-gold rounded font-medium text-xs uppercase tracking-widest transition duration-300"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>07482 732291</span>
              </a>
            </div>

            {/* Mobile Actions: Hamburger Toggle */}
            <div id="mobile-nav-toggle" className="lg:hidden flex items-center gap-4">
              <a 
                href="tel:07482732291"
                className="p-2 border border-gold/15 text-gold hover:border-gold hover:bg-gold/5 rounded"
                title="Call Us"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-off-white hover:text-gold transition focus:outline-none"
                aria-label="Open Navigation Screen"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Full-screen Overlay Navigation */}
      <div
        id="mobile-overlay-menu"
        className={`fixed inset-0 bg-[#0A0A0A]/98 z-40 lg:hidden transform transition-all duration-500 ease-in-out flex flex-col justify-center items-center px-4 ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-full invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center space-y-8 w-full max-w-sm text-center">
          
          <div className="flex flex-col space-y-4 w-full">
            {navItems.map((item, idx) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  style={{ transitionDelay: isOpen ? `${idx * 100}ms` : '0ms' }}
                  className={`w-full py-3 font-serif text-2xl md:text-3xl transition-all font-medium ${
                    isActive ? 'text-gold' : 'text-off-white hover:text-gold'
                  } ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                >
                  <span className="flex items-center justify-center gap-2">
                    {item.label}
                    {isActive && <ArrowUpRight className="w-4 h-4 text-gold shrink-0" />}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="w-16 h-0.5 bg-gold/25 my-6" />

          {/* Mobile Overlay Direct Call */}
          <div className={`space-y-4 w-full flex flex-col items-center ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-500 delay-400`}>
            <p className="text-xs uppercase tracking-widest text-off-white/50 font-sans">Available 8am–8pm Daily</p>
            <a 
              href="tel:07482" 
              className="text-xl font-serif text-white hover:text-gold font-semibold flex items-center gap-2.5 bg-gold/10 px-6 py-3 rounded-md border border-gold/20"
            >
              <Phone className="w-5 h-5 text-gold shrink-0" />
              <span>07482 732291</span>
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
