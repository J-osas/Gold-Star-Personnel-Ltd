import React from 'react';
import { PageType } from '../types';
import { Award, HeartHandshake, Key, BookOpen, Presentation, FileText, UserCheck, Compass } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface EmployeesProps {
  onNavigate: (page: PageType) => void;
}

export default function Employees({ onNavigate }: EmployeesProps) {
  return (
    <div id="employees-page-container" className="bg-[#0A0A0A]">
      
      {/* Hero Section */}
      <section id="employees-hero" className="relative min-h-[60vh] flex items-center pt-36 pb-28 md:pt-44 md:pb-36 bg-dots-gold border-b border-gold/15">
        <div className="absolute inset-0 bg-[#0A0A0A]/45 pointer-events-none" />
        
        {/* Geometric Background Circles from Editorial Aesthetic */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 border border-gold/5 rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 border border-gold/5 rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center sm:text-left">
          <div className="max-w-3xl">
            <ScrollReveal delayMs={100}>
              {/* Editorial Accent Line */}
              <div className="w-16 h-[1px] bg-gold mb-6 hidden sm:block" />
              
              <span className="text-xs uppercase tracking-[0.25em] font-sans text-gold font-bold block mb-4">
                Career Opportunities
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6.5xl font-serif text-white italic leading-tight tracking-tight mb-6">
                Your Next Career <span className="not-italic text-gold block sm:inline">Move Starts Here.</span>
              </h1>
              <p className="text-lg md:text-xl text-off-white/80 font-sans mb-8 leading-relaxed max-w-2xl font-light">
                We match your skills and ambitions with the right opportunities across the North West. Accelerate your career search with dedicated advocates.
              </p>
              <button
                id="emp-hero-cta"
                onClick={() => onNavigate('contact')}
                className="px-10 py-4 bg-[#C9A84C] hover:bg-[#A8852A] hover:-translate-y-1 text-[#0A0A0A] font-bold uppercase tracking-widest text-xs transition-all duration-350 shadow-lg shadow-[#C9A84C]/25 inline-flex items-center gap-2"
              >
                <span>Join Our Talent Pool</span>
                <UserCheck className="w-3.5 h-3.5" />
              </button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Gold Star Candidate Section */}
      <section id="employees-why-choose" className="py-20 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <ScrollReveal delayMs={100}>
              <h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight mb-4">
                Why Choose Gold Star Personnel?
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto" />
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Industry Expertise */}
            <ScrollReveal delayMs={150}>
              <div className="bg-[#1A1A1A] p-8 rounded-lg border border-gold/15 hover:border-gold/30 hover:-translate-y-1.5 transition-all duration-300 shadow-lg h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gold opacity-35 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gold/10 rounded-lg text-gold group-hover:bg-gold group-hover:text-pure-black transition-all">
                    <Award className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="text-lg font-serif text-white font-medium">Industry Expertise</h3>
                </div>
                <p className="text-off-white/70 leading-relaxed font-sans text-sm">
                  Our team consists of experts with in-depth knowledge of various industries, ensuring we match you with the right opportunities.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 2: Personalized Approach */}
            <ScrollReveal delayMs={250}>
              <div className="bg-[#1A1A1A] p-8 rounded-lg border border-gold/15 hover:border-gold/30 hover:-translate-y-1.5 transition-all duration-300 shadow-lg h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gold opacity-35 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gold/10 rounded-lg text-gold group-hover:bg-gold group-hover:text-pure-black transition-all">
                    <HeartHandshake className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="text-lg font-serif text-white font-medium">Personalised Approach</h3>
                </div>
                <p className="text-off-white/70 leading-relaxed font-sans text-sm">
                  We believe in understanding your unique skills, preferences, and career goals to provide personalised guidance throughout your job search.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 3: Strong Partnerships */}
            <ScrollReveal delayMs={350}>
              <div className="bg-[#1A1A1A] p-8 rounded-lg border border-gold/15 hover:border-gold/30 hover:-translate-y-1.5 transition-all duration-300 shadow-lg h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gold opacity-35 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gold/10 rounded-lg text-gold group-hover:bg-gold group-hover:text-pure-black transition-all">
                    <Key className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="text-lg font-serif text-white font-medium">Strong Partnerships</h3>
                </div>
                <p className="text-off-white/70 leading-relaxed font-sans text-sm">
                  We have established strong partnerships with leading companies, giving you access to exclusive job openings that may not be available elsewhere.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Services for Candidates */}
      <section id="employees-services" className="py-20 bg-[#1A1A1A]/30 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <ScrollReveal delayMs={100}>
              <span className="text-xs uppercase tracking-[0.2em] font-sans text-gold font-bold block mb-3">Your Development</span>
              <h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight">
                How We Support You
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: CV Review */}
            <ScrollReveal delayMs={150}>
              <div className="bg-[#1A1A1A] p-8 rounded-lg border-t-[3px] border-gold/30 hover:border-gold transition-all duration-300 group shadow-md hover:-translate-y-1">
                <div className="text-gold w-10 h-10 mb-6 stroke-[1.5] group-hover:scale-110 transition-transform">
                  <FileText className="w-full h-full" />
                </div>
                <h3 className="text-xl font-serif text-white mb-3">CV Review & Optimisation</h3>
                <p className="text-off-white/70 text-sm leading-relaxed font-sans">
                  Let our experts review and optimise your CV to make it stand out to employers.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 2: Interview Prep */}
            <ScrollReveal delayMs={250}>
              <div className="bg-[#1A1A1A] p-8 rounded-lg border-t-[3px] border-gold/30 hover:border-gold transition-all duration-300 group shadow-md hover:-translate-y-1">
                <div className="text-gold w-10 h-10 mb-6 stroke-[1.5] group-hover:scale-110 transition-transform">
                  <Presentation className="w-full h-full" />
                </div>
                <h3 className="text-xl font-serif text-white mb-3">Interview Preparation</h3>
                <p className="text-off-white/70 text-sm leading-relaxed font-sans">
                  Ace your interviews with our preparation sessions, including mock interviews and valuable tips.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 3: Skill Development */}
            <ScrollReveal delayMs={350}>
              <div className="bg-[#1A1A1A] p-8 rounded-lg border-t-[3px] border-gold/30 hover:border-gold transition-all duration-300 group shadow-md hover:-translate-y-1">
                <div className="text-gold w-10 h-10 mb-6 stroke-[1.5] group-hover:scale-110 transition-transform">
                  <BookOpen className="w-full h-full" />
                </div>
                <h3 className="text-xl font-serif text-white mb-3">Skill Development</h3>
                <p className="text-off-white/70 text-sm leading-relaxed font-sans">
                  Stay ahead in your field with our skill development resources and training programs.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Join Our Talent Pool section */}
      <section id="employees-pool-banner" className="py-20 border-b border-gold/10 relative overflow-hidden bg-dots-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal delayMs={100}>
            <div className="inline-flex p-3 bg-gold/10 border border-gold/25 rounded-full text-gold mb-6">
              <Compass className="w-8 h-8 animate-spin-slow" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 italic">
              Join Our Talent <span className="text-gold not-italic font-bold">Pool</span>
            </h2>
            <p className="text-md md:text-lg text-off-white/80 max-w-2xl mx-auto font-sans mb-8 leading-relaxed font-light">
              Register with Gold Star Personnel to become part of our exclusive talent pool. You'll be the first to know about new job opportunities and receive updates tailored to your career interests.
            </p>
            <button
              id="emp-pool-cta-btn"
              onClick={() => onNavigate('contact')}
              className="px-10 py-4 bg-[#C9A84C] hover:bg-[#A8852A] hover:-translate-y-1 text-[#0A0A0A] font-bold uppercase tracking-widest text-xs transition-all duration-350 shadow-lg shadow-[#C9A84C]/25 inline-flex items-center gap-2"
            >
              <span>Get In Touch</span>
              <UserCheck className="w-3.5 h-3.5" />
            </button>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
