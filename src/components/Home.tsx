import React, { useState } from 'react';
import { PageType } from '../types';
import { GoldParticles } from './GoldParticles';
import { ScrollReveal } from './ScrollReveal';
import { Counter } from './Counter';
import { 
  Building2, 
  Utensils, 
  Sparkles, 
  HardHat, 
  FolderLock, 
  Star, 
  ArrowRight, 
  Award, 
  Heart, 
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  HelpCircle,
  MessageSquareQuote
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: PageType) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [activeFaqTab, setActiveFaqTab] = useState<'employer' | 'candidate'>('employer');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const employerFAQs = [
    {
      q: "What sectors does Gold Star Personnel cover?",
      a: "We specialize in Industrial & Warehouse, Hospitality, Housekeeping, and Labouring/Construction services across the North West. We offer both temporary and permanent staffing solutions tailored to your operational pace."
    },
    {
      q: "How quickly can you supply temporary staff?",
      a: "With our 24/7 dedicated support desk and our pre-vetted active talent database, we can dispatch qualified workers within hours of your request. This ensures your workforce remains seamless during unexpected peak demands."
    },
    {
      q: "Are your temporary workers fully compliant?",
      a: "Absolutely. Compliance is our highest priority. Every candidate undergoes rigorous face-to-face registration, right-to-work examinations, reference validation, and health & safety inductions before deployment."
    },
    {
      q: "How do you handle payroll and worker administration?",
      a: "We manage the complete end-to-end administration. This includes automated weekly payroll, PAYE HMRC tax collections, National Insurance contributions, holiday accruals, and comprehensive employer liability insurance coverage."
    }
  ];

  const candidateFAQs = [
    {
      q: "How do I register with Gold Star Personnel?",
      a: "Simply navigate to our Contact page and use the 'Join Our Talent Pool' form, or call us directly at 07482 732291. One of our specialists will schedule a quick consultation to understand your career goals."
    },
    {
      q: "What documents are required to register?",
      a: "You will need a valid passport or UK right-to-work share code, proof of your National Insurance number, current address verification, and passport-standard professional references."
    },
    {
      q: "Under what schedule will I be paid?",
      a: "We run a prompt weekly payroll on Fridays, directly to your bank account, for all hours worked in the previous week. You also receive complete digital payslips detailing your hourly rate and accrued holiday pay."
    },
    {
      q: "Do you offer paths from temporary to permanent employment?",
      a: "Yes, we take pride in bridging talented candidates to permanent roles. Many of our clients hire our temporary staff on a full-time contract after observing their performance and professionalism on assignment."
    }
  ];

  const activeFAQs = activeFaqTab === 'employer' ? employerFAQs : candidateFAQs;
  
  const sectors = [
    {
      title: "Industrial / Warehouse",
      subtitle: "⚙️ Factory & Logistics",
      icon: <Building2 className="w-8 h-8 stroke-[1.25]" />,
      desc: "Comprehensive staffing solutions for warehouse operators, packing lines, fork-lift driving, and industrial logistics."
    },
    {
      title: "Hospitality",
      subtitle: "🏨 Fine Food & Service",
      icon: <Utensils className="w-8 h-8 stroke-[1.25]" />,
      desc: "Top-tier chefs, wait staff, bar specialists, and event crew trained for first-class customer service."
    },
    {
      title: "Housekeeping",
      subtitle: "🧹 Pristine Maintenance",
      icon: <Sparkles className="w-8 h-8 stroke-[1.25]" />,
      desc: "Meticulous commercial cleaning, domestic maintenance, and hospitality turn-down teams committed to perfection."
    },
    {
      title: "Labourers",
      subtitle: "🏗️ Heavy Construction",
      icon: <HardHat className="w-8 h-8 stroke-[1.25]" />,
      desc: "Hard-working and fully certified personnel supporting construction, site-clearance, and trade-assisting roles."
    },
    {
      title: "Receptionist / Admin",
      subtitle: "🗂️ Front Desk & Clerical",
      icon: <FolderLock className="w-8 h-8 stroke-[1.25]" />,
      desc: "Highly professional admin staff, reception coordinators, and clerical support to keep your backoffice running."
    }
  ];

  return (
    <div id="home-page-container" className="bg-[#0A0A0A]">
      
      {/* Hero Section with balanced layout height on mobile/tablet */}
      <section id="hero" className="relative min-h-[600px] sm:min-h-[650px] md:min-h-[720px] lg:h-screen select-none overflow-hidden bg-[#0A0A0A] bg-dots-gold flex items-center justify-center border-b border-gold/15 pt-28 pb-16 lg:py-0">
        
        {/* Soft Background Radial Glow */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0A0A0A]/50 to-[#0A0A0A]" />
        
        {/* Geometric Background Circles from Editorial Aesthetic */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 border border-gold/5 rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 border border-gold/5 rounded-full pointer-events-none" />
        
        {/* Particle Canvas */}
        <GoldParticles />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          
          {/* Editorial Accent Line */}
          <div className="w-16 h-[1px] bg-gold mb-8 animate-pulse" />

          {/* Centered Headline with Editorial Serif Italic contrast */}
          <ScrollReveal delayMs={100} className="w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7.5xl font-serif text-white italic tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
              Your Success Starts <span className="shimmer-logo font-serif block sm:inline not-italic font-bold">Here</span>
            </h1>
          </ScrollReveal>

          {/* Subheadline */}
          <ScrollReveal delayMs={250} className="w-full">
            <p className="text-md sm:text-lg md:text-xl text-off-white/80 font-sans max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Connecting exceptional talent with outstanding businesses across the North West. We are not just recruiters — we are partners in your success.
            </p>
          </ScrollReveal>

          {/* CTA Buttons - styled with editorial design specs */}
          <ScrollReveal delayMs={350} className="w-full">
            <div id="hero-actions" className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => onNavigate('employers')}
                className="w-full sm:w-auto px-10 py-4 bg-[#C9A84C] text-[#0A0A0A] font-bold uppercase tracking-widest text-xs hover:bg-[#A8852A] transition-all transform hover:-translate-y-1 shadow-lg shadow-[#C9A84C]/25"
              >
                I'm an Employer
              </button>
              <button
                onClick={() => onNavigate('employees')}
                className="w-full sm:w-auto px-10 py-4 border border-[#C9A84C] text-[#C9A84C] font-bold uppercase tracking-widest text-xs hover:bg-[#C9A84C]/10 transition-all transform hover:-translate-y-1 bg-[#0A0A0A]/40"
              >
                I'm Looking for Work
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40 hover:opacity-80 transition cursor-pointer" onClick={() => document.getElementById('about-us-section')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-gold">Scroll</span>
          <div className="w-[1.5px] h-6 bg-gold relative overflow-hidden rounded">
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-white rounded animate-bounce" />
          </div>
        </div>

      </section>

      {/* About Us Section */}
      <section id="about-us-section" className="py-24 bg-[#1A1A1A] border-b border-gold/10 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-3xl pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Title Header with Bold Accent Bar */}
            <div className="lg:col-span-5 border-l-4 border-[#C9A84C] pl-6 py-2">
              <ScrollReveal delayMs={100}>
                <span className="text-xs uppercase tracking-[0.25em] font-sans text-gold font-bold block mb-3">Est. Nearly 20 Years</span>
                <h2 className="text-3.5xl md:text-4.5xl font-serif text-white font-semibold leading-tight tracking-tight">
                  About Gold Star Personnel
                </h2>
              </ScrollReveal>
            </div>

            {/* Right Rich Body Copy */}
            <div className="lg:col-span-7 space-y-6 text-off-white/80 font-sans text-base leading-relaxed">
              <ScrollReveal delayMs={200}>
                <p>
                  With nearly 20 years of collective experience in recruitment, we pride ourselves on being seasoned professionals in this field. Our expertise is reflected in our ability to deliver high-quality recruitment solutions tailored for both small and large businesses across the North West.
                </p>
                <p>
                  We have evolved into a versatile recruitment agency offering temporary and permanent staffing services, growing across Warehouse, Housekeeping, Hospitality, and Labouring recruitment — while maintaining our foundational presence in the Industrial sector.
                </p>
                <p className="border-t border-gold/10 pt-4 mt-4 font-semibold text-white italic">
                  "Our commitment to diversity is apparent in our ability to cater to a range of industries, showcasing adaptability and a comprehensive understanding of varied client needs. We are not just recruiters — we are partners in your success."
                </p>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Recruitment Sectors Section */}
      <section id="recruitment-sectors-section" className="py-24 border-b border-gold/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <ScrollReveal delayMs={100}>
              <span className="text-xs uppercase tracking-[0.2em] font-sans text-gold font-bold block mb-3">Versatility & Adaptability</span>
              <h2 className="text-3xl md:text-4.5xl font-serif text-white tracking-tight">
                Sectors We Recruit In
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {sectors.map((sec, idx) => (
              <div key={idx} className="h-full">
                <ScrollReveal delayMs={100 + idx * 100} className="h-full">
                  <div 
                    id={`sector-card-${idx}`}
                    className="bg-[#1A1A1A] p-6 h-full rounded-lg border border-gold/10 hover:border-gold/30 hover:-translate-y-1.5 transition-all duration-350 shadow-md relative overflow-hidden group flex flex-col justify-between"
                  >
                    {/* Subtle Top Border Highlight on hover */}
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Star dust container */}
                    <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-gold/5 blur-xl group-hover:bg-gold/10 transition-colors" />

                    <div>
                      <div className="text-gold w-12 h-12 mb-5 shrink-0 flex items-center justify-center p-2.5 bg-gold/5 rounded border border-gold/10 group-hover:bg-gold group-hover:text-[#0A0A0A] transition-all duration-350 shadow-sm shadow-gold/5">
                        {sec.icon}
                      </div>
                      <span className="text-xs font-mono font-medium text-gold/80 block mb-1">
                        {sec.subtitle}
                      </span>
                      <h3 className="text-lg font-serif text-white font-medium mb-3 group-hover:text-gold transition-colors">
                        {sec.title}
                      </h3>
                    </div>

                    <p className="text-xs text-off-white/70 font-sans mt-3 leading-relaxed relative z-10 border-t border-gold/5 pt-3">
                      {sec.desc}
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us - Stats/Trust Bar */}
      <section id="stats-bar" className="bg-[#1A1A1A] py-16 border-b border-gold/15 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gold opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center divide-y md:divide-y-0 md:divide-x divide-gold/15">
            
            {/* Stat 1 */}
            <ScrollReveal delayMs={100} className="pt-6 md:pt-0">
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5.5xl text-gold font-serif leading-none font-bold mb-3 block">
                  <Counter end={20} suffix="" />
                </span>
                <span className="text-xs uppercase tracking-widest font-sans text-off-white/80 font-medium">
                  Years of Collective Experience
                </span>
              </div>
            </ScrollReveal>

            {/* Stat 2 */}
            <ScrollReveal delayMs={200} className="pt-6 md:pt-0">
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5.5xl text-gold font-serif leading-none font-bold mb-3 block flex items-center justify-center gap-1">
                  <Counter end={5} suffix="" />
                  <span className="text-2xl md:text-3.5xl">★</span>
                </span>
                <span className="text-xs uppercase tracking-widest font-sans text-off-white/80 font-medium">
                  Client & Candidate Rating
                </span>
              </div>
            </ScrollReveal>

            {/* Stat 3 */}
            <ScrollReveal delayMs={300} className="pt-6 md:pt-0">
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5.5xl text-gold font-serif leading-none font-bold mb-3 block">
                  <Counter end={2} suffix="" />
                </span>
                <span className="text-xs uppercase tracking-widest font-sans text-off-white/80 font-medium">
                  Dedicated Consultants — Always Available
                </span>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <ScrollReveal delayMs={100}>
              <span className="text-xs uppercase tracking-[0.2em] font-sans text-gold font-bold block mb-3">Client & Candidate Reviews</span>
              <h2 className="text-3xl md:text-4.5xl font-serif text-white tracking-tight">
                What People Say
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* Review 1 */}
            <ScrollReveal delayMs={150}>
              <div className="bg-[#1A1A1A] p-8 md:p-10 rounded-lg border border-gold/10 hover:border-gold/30 transition duration-300 relative h-full flex flex-col justify-between">
                <div>
                  <div className="text-gold mb-6 opacity-35">
                    <MessageSquareQuote className="w-8 h-8" />
                  </div>
                  <p className="text-lg md:text-xl font-serif text-white leading-relaxed italic mb-8">
                    "Very lovely people to work with/for."
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gold/5 pt-4">
                  <div>
                    <p className="text-sm font-semibold text-white">Engr. Cal</p>
                    <p className="text-xs text-gold font-sans uppercase tracking-wider font-light">Candidate Review</p>
                  </div>
                  <div className="flex text-gold gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold stroke-none" />
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Review 2 */}
            <ScrollReveal delayMs={250}>
              <div className="bg-[#1A1A1A] p-8 md:p-10 rounded-lg border border-gold/10 hover:border-gold/30 transition duration-300 relative h-full flex flex-col justify-between">
                <div>
                  <div className="text-gold mb-6 opacity-35">
                    <MessageSquareQuote className="w-8 h-8" />
                  </div>
                  <p className="text-lg md:text-xl font-serif text-white leading-relaxed italic mb-8">
                    "Very professional and friendly staff"
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gold/5 pt-4">
                  <div>
                    <p className="text-sm font-semibold text-white">Ewelina Wilk</p>
                    <p className="text-xs text-gold font-sans uppercase tracking-wider font-light">Client Review</p>
                  </div>
                  <div className="flex text-gold gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold stroke-none" />
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Styled Google Reviews Trust Emblem */}
          <ScrollReveal delayMs={300} className="w-full flex justify-center">
            <div id="google-badge" className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#1A1A1A]/85 border border-gold/20 hover:border-gold/45 transition duration-300 rounded-lg px-6 py-4 shadow-md">
              <div className="flex items-center gap-2">
                {/* Custom Vector-look Google layout */}
                <span className="font-serif text-lg font-bold tracking-tight text-white">
                  <span className="text-blue-500">G</span>
                  <span className="text-red-500">o</span>
                  <span className="text-yellow-500">o</span>
                  <span className="text-blue-500">g</span>
                  <span className="text-green-500">l</span>
                  <span className="text-red-500">e</span>
                </span>
                <span className="text-xs text-off-white/50 uppercase tracking-widest font-mono">Reviews</span>
              </div>
              <div className="hidden sm:block w-px h-5 bg-gold/25" />
              <div className="flex items-center gap-2">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold stroke-none" />
                  ))}
                </div>
                <span className="text-xs text-white uppercase font-sans tracking-wide">
                  5.0 Rating based on verified reviews
                </span>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* FAQ Section */}
      <section id="home-faq" className="py-24 border-b border-gold/10 bg-[#0A0A0A] bg-dots-gold relative">
        <div className="absolute inset-0 bg-[#0A0A0A]/40 pointer-events-none" />
        
        {/* Subtle Decorative Geometric Circles */}
        <div className="absolute top-1/3 -left-20 w-72 h-72 border border-gold/5 rounded-full pointer-events-none" />
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 border border-gold/5 rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16">
            <ScrollReveal delayMs={100}>
              <div className="w-16 h-[1px] bg-gold mx-auto mb-6" />
              <span className="text-xs uppercase tracking-[0.25em] font-sans text-gold font-bold block mb-3">Answers & Support</span>
              <h2 className="text-3xl md:text-4.5xl font-serif text-white tracking-tight">
                Frequently Asked <span className="italic text-gold">Questions</span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Luxury Editorial Segmented Switcher */}
          <div className="flex justify-center mb-12">
            <ScrollReveal delayMs={155}>
              <div className="inline-flex p-1.5 bg-[#141414] border border-gold/15 rounded-full shadow-lg">
                <button
                  onClick={() => {
                    setActiveFaqTab('employer');
                    setExpandedFaq(null);
                  }}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                    activeFaqTab === 'employer'
                      ? 'bg-[#C9A84C] text-[#0A0A0A] shadow-md'
                      : 'text-off-white/60 hover:text-white'
                  }`}
                >
                  Employers
                </button>
                <button
                  onClick={() => {
                    setActiveFaqTab('candidate');
                    setExpandedFaq(null);
                  }}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                    activeFaqTab === 'candidate'
                      ? 'bg-[#C9A84C] text-[#0A0A0A] shadow-md'
                      : 'text-off-white/60 hover:text-white'
                  }`}
                >
                  Candidates
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Accordion List */}
          <div className="space-y-4 max-w-3xl mx-auto">
            {activeFAQs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div key={idx} className="w-full">
                  <ScrollReveal delayMs={50 * idx} className="w-full">
                    <div 
                      className={`border transition-all duration-300 rounded-lg overflow-hidden ${
                        isOpen 
                          ? 'border-gold/30 bg-[#141414] shadow-md shadow-gold/5' 
                          : 'border-gold/10 hover:border-gold/20 bg-[#111111]/95'
                      }`}
                    >
                      <button
                        onClick={() => setExpandedFaq(isOpen ? null : idx)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between text-white hover:text-gold transition-colors font-serif text-lg font-medium tracking-tight gap-4 cursor-pointer select-none"
                      >
                        <span className="flex items-center gap-3">
                          <HelpCircle className="w-4 h-4 text-gold/60 shrink-0 hidden sm:inline" />
                          <span>{faq.q}</span>
                        </span>
                        <ChevronDown 
                          className={`w-5 h-5 text-gold/60 transition-transform duration-300 shrink-0 ${
                            isOpen ? 'rotate-180 text-gold' : ''
                          }`} 
                        />
                      </button>
                      
                      <div 
                        className={`transition-all duration-350 ease-in-out overflow-hidden ${
                          isOpen 
                            ? 'max-h-96 opacity-100 border-t border-gold/5 bg-[#161616]/70' 
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-6 py-5 text-sm sm:text-md text-off-white/85 font-sans leading-relaxed font-light">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA Banner Section */}
      <section id="cta-banner" className="py-20 bg-[#C9A84C] text-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[5px] bg-[#A8852A]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal delayMs={100}>
            <h2 className="text-3xl md:text-4.5xl font-serif text-pure-black font-semibold mb-4 leading-tight">
              Ready to find your perfect match?
            </h2>
            <p className="text-md md:text-lg text-pure-black/90 max-w-2xl mx-auto mb-8 font-sans">
              Whether you're hiring or job seeking, we're here to help. Get touch-point access to England's premier candidates.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-[#0A0A0A] hover:bg-[#1A1A1A] hover:-translate-y-[2px] active:translate-y-0 text-white font-semibold text-xs uppercase tracking-widest rounded transition-all duration-300 shadow-md shadow-black/30 inline-flex items-center gap-2"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold" />
            </button>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
