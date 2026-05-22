import React from 'react';
import { PageType } from '../types';
import { Users2, Award, Scale, Briefcase, Compass, Search, LineChart, Shield, Landmark, Flame, TrendingUp } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface EmployersProps {
  onNavigate: (page: PageType) => void;
}

export default function Employers({ onNavigate }: EmployersProps) {
  return (
    <div id="employers-page-container" className="bg-[#0A0A0A]">
      
      {/* Hero Section */}
      <section id="employers-hero" className="relative min-h-[60vh] flex items-center pt-36 pb-28 md:pt-44 md:pb-36 bg-dots-gold border-b border-gold/15 overflow-hidden">
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
                Employer Partnership
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6.5xl font-serif text-white italic leading-tight tracking-tight mb-6">
                Recruit Smarter. <span className="not-italic text-gold block sm:inline">Grow Faster.</span>
              </h1>
              <p className="text-lg md:text-xl text-off-white/80 font-sans mb-8 leading-relaxed max-w-2xl font-light">
                Tailored recruitment solutions for businesses of all sizes across the North West. We help you build resilient teams with elite talent.
              </p>
              <button
                id="emp-hero-cta"
                onClick={() => onNavigate('contact')}
                className="px-10 py-4 bg-[#C9A84C] hover:bg-[#A8852A] hover:-translate-y-1 text-[#0A0A0A] font-bold uppercase tracking-widest text-xs transition-all duration-350 shadow-lg shadow-gold/25 inline-flex items-center gap-2"
              >
                <span>Request a Consultation</span>
                <TrendingUp className="w-3.5 h-3.5" />
              </button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Gold Star Section */}
      <section id="employers-why-choose" className="py-20 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <ScrollReveal delayMs={100}>
              <h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight mb-4">
                Why Choose Gold Star Personnel?
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto" />
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delayMs={150}>
              <div className="bg-[#1A1A1A] p-8 md:p-10 rounded-lg border border-gold/15 hover:border-gold/30 hover:-translate-y-1.5 transition-all duration-300 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gold opacity-30 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gold/10 rounded-lg text-gold group-hover:bg-gold group-hover:text-pure-black transition-all">
                    <Award className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="text-xl font-serif text-white font-medium">Industry Specialists</h3>
                </div>
                <p className="text-off-white/80 leading-relaxed font-sans text-sm md:text-base">
                  Our team comprises industry specialists with a deep understanding of your sector, ensuring we identify candidates with the right skills and cultural fit for your organisation.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={250}>
              <div className="bg-[#1A1A1A] p-8 md:p-10 rounded-lg border border-gold/15 hover:border-gold/30 hover:-translate-y-1.5 transition-all duration-300 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gold opacity-30 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gold/10 rounded-lg text-gold group-hover:bg-gold group-hover:text-pure-black transition-all">
                    <Scale className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="text-xl font-serif text-white font-medium">Scalable Solutions</h3>
                </div>
                <p className="text-off-white/80 leading-relaxed font-sans text-sm md:text-base">
                  Whether you are a small or a large business, our recruitment solutions are scalable to meet your unique hiring demands.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Services for Employers */}
      <section id="employers-services" className="py-20 bg-[#1A1A1A]/30 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <ScrollReveal delayMs={100}>
              <span className="text-xs uppercase tracking-[0.2em] font-sans text-gold font-bold block mb-3">Professional Services</span>
              <h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight">
                Our Services for Employers
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Talent Acquisition */}
            <ScrollReveal delayMs={150}>
              <div className="bg-[#1A1A1A] p-8 rounded-lg border-t-[3px] border-gold/30 hover:border-gold transition-all duration-300 group shadow-md hover:-translate-y-1">
                <div className="text-gold w-10 h-10 mb-6 stroke-[1.5] group-hover:scale-110 transition-transform">
                  <Users2 className="w-full h-full" />
                </div>
                <h3 className="text-xl font-serif text-white mb-3">Talent Acquisition</h3>
                <p className="text-off-white/70 text-sm leading-relaxed font-sans">
                  Leverage our extensive network and resources to identify, attract, and hire top talent for your organisation.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 2: Executive Search */}
            <ScrollReveal delayMs={250}>
              <div className="bg-[#1A1A1A] p-8 rounded-lg border-t-[3px] border-gold/30 hover:border-gold transition-all duration-300 group shadow-md hover:-translate-y-1">
                <div className="text-gold w-10 h-10 mb-6 stroke-[1.5] group-hover:scale-110 transition-transform">
                  <Search className="w-full h-full" />
                </div>
                <h3 className="text-xl font-serif text-white mb-3">Executive Search</h3>
                <p className="text-off-white/70 text-sm leading-relaxed font-sans">
                  For key leadership positions, our executive search service ensures you find executives who align with your company's vision and values.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 3: Recruitment Strategies */}
            <ScrollReveal delayMs={350}>
              <div className="bg-[#1A1A1A] p-8 rounded-lg border-t-[3px] border-gold/30 hover:border-gold transition-all duration-300 group shadow-md hover:-translate-y-1">
                <div className="text-gold w-10 h-10 mb-6 stroke-[1.5] group-hover:scale-110 transition-transform">
                  <Compass className="w-full h-full" />
                </div>
                <h3 className="text-xl font-serif text-white mb-3">Recruitment Strategies</h3>
                <p className="text-off-white/70 text-sm leading-relaxed font-sans">
                  We work closely with you to develop tailored recruitment strategies that address your specific hiring challenges and goals.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 4: Employer Branding */}
            <ScrollReveal delayMs={450}>
              <div className="bg-[#1A1A1A] p-8 rounded-lg border-t-[3px] border-gold/30 hover:border-gold transition-all duration-300 group shadow-md hover:-translate-y-1">
                <div className="text-gold w-10 h-10 mb-6 stroke-[1.5] group-hover:scale-110 transition-transform">
                  <Landmark className="w-full h-full" />
                </div>
                <h3 className="text-xl font-serif text-white mb-3">Employer Branding</h3>
                <p className="text-off-white/70 text-sm leading-relaxed font-sans">
                  Enhance your employer brand to attract and retain top talent with our strategic employer branding services.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section id="employers-benefits" className="py-20 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <ScrollReveal delayMs={100}>
              <h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight">
                Partnership Benefits
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1: Time & Cost Savings */}
            <ScrollReveal delayMs={150}>
              <div className="text-center group p-4">
                <div className="w-16 h-16 bg-gold/10 group-hover:bg-[#C9A84C]/25 text-[#C9A84C] rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 border border-[#C9A84C]/20 group-hover:scale-105">
                  <Briefcase className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="text-lg font-serif text-white font-semibold mb-3">Time & Cost Savings</h3>
                <p className="text-off-white/70 text-sm leading-relaxed font-sans max-w-xs mx-auto">
                  Our efficient process saves you time and reduces the overall cost of recruitment.
                </p>
              </div>
            </ScrollReveal>

            {/* Benefit 2: Quality Candidates */}
            <ScrollReveal delayMs={250}>
              <div className="text-center group p-4">
                <div className="w-16 h-16 bg-gold/10 group-hover:bg-[#C9A84C]/25 text-[#C9A84C] rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 border border-[#C9A84C]/20 group-hover:scale-105">
                  <Shield className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="text-lg font-serif text-white font-semibold mb-3">Quality Candidates</h3>
                <p className="text-off-white/70 text-sm leading-relaxed font-sans max-w-xs mx-auto">
                  We focus on delivering candidates who not only have the right skills but also align with your company culture.
                </p>
              </div>
            </ScrollReveal>

            {/* Benefit 3: Industry Insights */}
            <ScrollReveal delayMs={350}>
              <div className="text-center group p-4">
                <div className="w-16 h-16 bg-gold/10 group-hover:bg-[#C9A84C]/25 text-[#C9A84C] rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 border border-[#C9A84C]/20 group-hover:scale-105">
                  <LineChart className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="text-lg font-serif text-white font-semibold mb-3">Industry Insights</h3>
                <p className="text-off-white/70 text-sm leading-relaxed font-sans max-w-xs mx-auto">
                  Stay informed about market trends, salary benchmarks, and talent availability with our industry insights.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Consultation Banner */}
      <section id="employers-cta-banner" className="py-16 bg-[#C9A84C] text-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal delayMs={100}>
            <h2 className="text-3xl md:text-4xl font-serif text-pure-black font-semibold mb-4">
              Ready to Elevate Your Workforce?
            </h2>
            <p className="text-md md:text-lg text-pure-black/80 max-w-3xl mx-auto font-sans mb-8">
              Schedule a consultation with our expert team to discuss your hiring needs. We'll work collaboratively to develop a customised recruitment strategy that aligns with your business goals.
            </p>
            <button
              id="emp-bottom-cta"
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-[#0A0A0A] hover:bg-[#1A1A1A] hover:-translate-y-[2px] active:translate-y-0 text-white font-semibold text-xs uppercase tracking-widest rounded transition-all duration-300 shadow-md shadow-black/25 flex items-center gap-2 mx-auto"
            >
              <span>Contact Us Today</span>
              <Flame className="w-3.5 h-3.5 text-gold" />
            </button>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
