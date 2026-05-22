import React, { useState } from 'react';
import { PageType } from '../types';
import { Facebook, MapPin, Phone, Mail, Clock, ShieldCheck, X } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handleLinkClick = (pageId: PageType) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="bg-[#0A0A0A] border-t border-gold/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Row: Logo & Social link */}
        <div id="footer-top-row" className="flex flex-col sm:flex-row items-center justify-between pb-10 border-b border-[#1A1A1A] gap-6 text-center sm:text-left">
          
          <div 
            onClick={() => handleLinkClick('home')} 
            className="cursor-pointer group flex flex-col sm:flex-row items-center gap-2"
          >
            <span className="font-serif text-2xl font-bold tracking-tight text-gold uppercase transition group-hover:text-white">
              Gold ★ Star Personnel
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-off-white/40 block sm:inline">
              | Recruitment Partners
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-widest text-off-white/50 font-sans">Connect with us:</span>
            {/* Direct Link to Facebook Profile */}
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-[#1A1A1A] hover:bg-gold hover:text-pure-black border border-gold/10 hover:border-gold rounded-full text-gold transition-all duration-300 transform hover:-translate-y-1 shadow-md"
              aria-label="Facebook Profile Page"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Middle Row: 3 columns */}
        <div id="footer-middle-row" className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12 text-sm">
          
          {/* Column 1: Quick Links */}
          <div id="footer-col-links" className="space-y-4">
            <h4 className="text-gold font-bold uppercase tracking-widest text-xs font-sans pb-1 border-b border-gold/10">
              Quick Links
            </h4>
            <ul className="space-y-2.5 font-sans">
              <li>
                <button 
                  onClick={() => handleLinkClick('home')} 
                  className="text-off-white hover:text-gold transition duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('employers')} 
                  className="text-off-white hover:text-gold transition duration-200"
                >
                  Employers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('employees')} 
                  className="text-off-white hover:text-gold transition duration-200"
                >
                  Employees
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('contact')} 
                  className="text-off-white hover:text-gold transition duration-200"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Contact Info */}
          <div id="footer-col-contact" className="space-y-4">
            <h4 className="text-gold font-bold uppercase tracking-widest text-xs font-sans pb-1 border-b border-gold/10">
              Office Location
            </h4>
            <ul className="space-y-3.5 text-off-white/80 font-sans">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="hover:text-gold transition">21 Claremont Rd, Morecambe LA4 4HL</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:07482732291" className="hover:text-gold transition">07482 732291</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:gspersonnel.ltd@gmail.com" className="hover:text-gold transition">gspersonnel.ltd@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours Info */}
          <div id="footer-col-hours" className="space-y-4">
            <h4 className="text-gold font-bold uppercase tracking-widest text-xs font-sans pb-1 border-b border-gold/10">
              Operational Hours
            </h4>
            <ul className="space-y-3 text-off-white/80 font-sans">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white">Office Hours:</span>
                  <p className="text-xs text-off-white/60 mt-0.5">10am–4pm Daily</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-gold">On Call Support:</span>
                  <p className="text-xs text-off-white/60 mt-0.5">8am–8pm Daily</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar Container */}
        <div id="footer-bottom-bar" className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-[#1A1A1A] gap-4 text-xs text-off-white/40 font-sans text-center sm:text-left">
          <p>© 2026 Gold Star Personnel Ltd. All Rights Reserved.</p>
          <div>
            <button 
              onClick={() => setShowPrivacy(true)}
              className="hover:text-gold transition underline focus:outline-none underline-offset-4"
            >
              Privacy Policy
            </button>
          </div>
        </div>

      </div>

      {/* Luxury Privacy Policy Modal Popup */}
      {showPrivacy && (
        <div 
          id="privacy-popup-overlay"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowPrivacy(false)}
        >
          <div 
            id="privacy-modal"
            className="bg-[#1A1A1A] border border-gold/30 rounded-lg p-6 md:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto space-y-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowPrivacy(false)}
              className="absolute top-4 right-4 p-2 text-off-white/70 hover:text-gold transition rounded focus:outline-none"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 pb-3 border-b border-gold/15">
              <ShieldCheck className="text-gold w-6 h-6 stroke-[1.5]" />
              <h3 className="text-xl font-serif text-white font-medium">Privacy Policy Statement</h3>
            </div>

            <div className="space-y-4 text-sm text-off-white/80 font-sans leading-relaxed">
              <p className="text-xs text-gold uppercase tracking-wider font-mono">Last updated: May 2026</p>
              <p>
                At <strong>Gold Star Personnel Ltd</strong>, based at 21 Claremont Road, Morecambe, England, we take our privacy responsibilities seriously. We are committed to protecting the privacy of our clients (employers) and candidates (job seekers).
              </p>
              <h5 className="font-serif text-white font-medium">1. Information Collection</h5>
              <p>
                We collect personal information such as name, contact information, CV attachments, telephone details, and industry preferences specifically to enable candidate sourcing and staffing matchmaking solutions.
              </p>
              <h5 className="font-serif text-white font-medium">2. Data Security & Storage</h5>
              <p>
                We do not sell or lease candidate details to third parties. Information shared on our contact forms is handled under strict security oversight to guarantee credentials and data remains private.
              </p>
              <h5 className="font-serif text-white font-medium">3. Contact Inquiries</h5>
              <p>
                By requesting information or registering on our talent pools, you consent to our designated recruitment consultants (Joanna or Anita) contacting you relative to recruitment assignments.
              </p>
            </div>

            <div className="pt-4 border-t border-gold/10 text-right">
              <button
                onClick={() => setShowPrivacy(false)}
                className="px-5 py-2 bg-[#C9A84C] hover:bg-[#A8852A] text-[#0A0A0A] font-medium text-xs uppercase tracking-widest rounded transition-all duration-200"
              >
                Close Privacy Statement
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
