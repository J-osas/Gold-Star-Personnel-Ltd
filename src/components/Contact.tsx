import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { ContactFormInputs } from '../types';
import { ScrollReveal } from './ScrollReveal';

export default function Contact() {
  const [formInputs, setFormInputs] = useState<ContactFormInputs>({
    firstName: '',
    lastName: '',
    telephone: '',
    email: '',
    subject: 'Work Inquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate real database or email delivery service callback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFormInputs({
      firstName: '',
      lastName: '',
      telephone: '',
      email: '',
      subject: 'Work Inquiry',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <div id="contact-page-container" className="pt-24 pb-16 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div id="contact-header" className="text-center mb-16 max-w-3xl mx-auto">
          <ScrollReveal delayMs={100}>
            {/* Editorial Accent Line */}
            <div className="w-16 h-[1px] bg-gold mb-6 mx-auto" />
            
            <span className="text-xs uppercase tracking-[0.2em] font-sans text-gold font-bold block mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6.5xl font-serif text-white italic tracking-tight mb-6">
              Let's <span className="not-italic text-gold">Talk</span>
            </h1>
            <p className="text-lg text-off-white/80 font-sans font-light">
              Whether you're an employer looking to expand your team or a job seeker exploring your next career move, we would love to hear from you.
            </p>
          </ScrollReveal>
        </div>

        {/* Two-Column Grid */}
        <div id="contact-content-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-[#1A1A1A] p-6 md:p-10 rounded-lg border border-gold/10 relative overflow-hidden shadow-xl shadow-gold-glow">
            <ScrollReveal delayMs={200}>
              {isSubmitted ? (
                <div id="contact-form-success" className="flex flex-col items-center justify-center text-center py-12">
                  <CheckCircle2 id="suc-icon" className="w-16 h-16 text-gold mb-6 stroke-[1.5]" />
                  <h3 className="text-2xl font-serif text-white mb-3">Thank You, {formInputs.firstName}!</h3>
                  <p className="text-off-white/70 max-w-md mb-8">
                    Your inquiry regarding <strong className="text-gold">"{formInputs.subject}"</strong> has been successfully transmitted. Our dedicated consulting team will contact you shortly.
                  </p>
                  <p className="text-xs text-gold/60 font-mono mb-8">
                    REF-ID: GSP-{Math.floor(100000 + Math.random() * 900000)}
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-10 py-4 bg-[#C9A84C] hover:bg-[#A8852A] hover:-translate-y-1 text-[#0A0A0A] font-bold uppercase tracking-widest text-xs transition-all duration-350 shadow-lg shadow-[#C9A84C]/25"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form id="contact-inquiry-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-xs uppercase tracking-wider font-sans text-off-white mb-2">
                        First Name <span className="text-gold">*</span>
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        required
                        value={formInputs.firstName}
                        onChange={handleInputChange}
                        className="w-full bg-[#0A0A0A] border border-gold/20 focus:border-gold rounded-md px-4 py-3 text-white font-sans text-sm focus:outline-none focus:ring-3 focus:ring-gold/30 transition duration-300 placeholder-off-white/30"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-xs uppercase tracking-wider font-sans text-off-white mb-2">
                        Last Name <span className="text-gold">*</span>
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        required
                        value={formInputs.lastName}
                        onChange={handleInputChange}
                        className="w-full bg-[#0A0A0A] border border-gold/20 focus:border-gold rounded-md px-4 py-3 text-white font-sans text-sm focus:outline-none focus:ring-3 focus:ring-gold/30 transition duration-300 placeholder-off-white/30"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="telephone" className="block text-xs uppercase tracking-wider font-sans text-off-white mb-2">
                        Telephone Number <span className="text-gold">*</span>
                      </label>
                      <input
                        id="telephone"
                        type="tel"
                        name="telephone"
                        required
                        value={formInputs.telephone}
                        onChange={handleInputChange}
                        className="w-full bg-[#0A0A0A] border border-gold/20 focus:border-gold rounded-md px-4 py-3 text-white font-sans text-sm focus:outline-none focus:ring-3 focus:ring-gold/30 transition duration-300 placeholder-off-white/30"
                        placeholder="07482 732291"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-wider font-sans text-off-white mb-2">
                        Email Address <span className="text-gold">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formInputs.email}
                        onChange={handleInputChange}
                        className="w-full bg-[#0A0A0A] border border-gold/20 focus:border-gold rounded-md px-4 py-3 text-white font-sans text-sm focus:outline-none focus:ring-3 focus:ring-gold/30 transition duration-300 placeholder-off-white/30"
                        placeholder="example@gmail.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs uppercase tracking-wider font-sans text-off-white mb-2">
                      Subject <span className="text-gold">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formInputs.subject}
                      onChange={handleInputChange}
                      className="w-full bg-[#0A0A0A] border border-gold/20 focus:border-gold rounded-md px-4 py-3 text-white font-sans text-sm focus:outline-none focus:ring-3 focus:ring-gold/30 transition duration-300"
                    >
                      <option value="Work Inquiry">Work Inquiry (I am an Employer)</option>
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Register as Candidate">Register as Candidate (I am seeking job)</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-wider font-sans text-off-white mb-2">
                      Message <span className="text-gold">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formInputs.message}
                      onChange={handleInputChange}
                      className="w-full bg-[#0A0A0A] border border-gold/20 focus:border-gold rounded-md px-4 py-3 text-white font-sans text-sm focus:outline-none focus:ring-3 focus:ring-gold/30 transition duration-300 placeholder-off-white/30 resize-none"
                      placeholder="Please describe your requirements in detail..."
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#C9A84C] hover:bg-[#A8852A] hover:-translate-y-1 text-[#0A0A0A] font-bold uppercase tracking-widest text-xs transition-all duration-350 disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-[#C9A84C]/25"
                  >
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                    {!isSubmitting && <Send className="w-3.5 h-3.5" />}
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>

          {/* Right Column: Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <ScrollReveal delayMs={350} className="h-full flex flex-col justify-between space-y-8">
              
              {/* Card 1: Address */}
              <div id="contact-card-address" className="bg-[#1A1A1A] p-8 rounded-lg border-l-4 border-gold border hover:border-gold/30 transition duration-300 flex items-start gap-4">
                <MapPin className="text-gold w-6 h-6 shrink-0 mt-1 stroke-[1.5]" />
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-sans text-gold font-bold mb-2">Office Location</h4>
                  <p className="text-lg font-serif text-white hover:text-gold transition duration-350">
                    21 Claremont Road
                  </p>
                  <p className="text-sm text-off-white/70 font-sans">
                    Morecambe, England, LA4 4HL
                  </p>
                </div>
              </div>

              {/* Card 2: Hours */}
              <div id="contact-card-hours" className="bg-[#1A1A1A] p-8 rounded-lg border-l-4 border-gold border hover:border-gold/30 transition duration-300 flex items-start gap-4">
                <Clock className="text-gold w-6 h-6 shrink-0 mt-1 stroke-[1.5]" />
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-sans text-gold font-bold mb-2">Office Hours</h4>
                  <div className="space-y-1 font-sans text-sm text-off-white/70">
                    <div className="flex justify-between gap-4">
                      <span>Mon–Fri:</span>
                      <strong className="text-white">10am – 4pm</strong>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>On Call Support:</span>
                      <strong className="text-gold">8am – 8pm daily</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Contact Details */}
              <div id="contact-card-direct" className="bg-[#1A1A1A] p-8 rounded-lg border-l-4 border-gold border hover:border-gold/30 transition duration-300 flex items-start gap-4 h-full">
                <Phone className="text-gold w-6 h-6 shrink-0 mt-1 stroke-[1.5]" />
                <div className="w-full">
                  <h4 className="text-xs uppercase tracking-widest font-sans text-gold font-bold mb-2">Direct Contacts</h4>
                  <div className="space-y-3 font-sans text-sm text-off-white/70">
                    <div>
                      <p className="text-xs text-gold font-medium uppercase font-sans">Consulting & Recruitment</p>
                      <div className="flex flex-col sm:flex-row sm:justify-between pt-1 gap-1">
                        <span>Joanna:</span>
                        <a href="tel:07482732291" className="text-white hover:text-gold transition font-medium">
                          07482 732291
                        </a>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between pt-1 gap-1">
                        <span>Anita:</span>
                        <a href="tel:07482732292" className="text-white hover:text-gold transition font-medium">
                          07482 732292
                        </a>
                      </div>
                    </div>
                    
                    <div className="border-t border-gold/10 pt-3 mt-3 flex items-start gap-2.5">
                      <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <div className="text-xs break-all">
                        <p className="text-gold font-medium uppercase font-sans">Email Inquiries</p>
                        <a href="mailto:gspersonnel.ltd@gmail.com" className="text-white hover:text-gold font-medium transition text-sm">
                          gspersonnel.ltd@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </ScrollReveal>
          </div>

        </div>

        {/* Embedded Google Map */}
        <ScrollReveal delayMs={100} className="w-full">
          <div id="contact-map-frame" className="relative w-full h-[400px] rounded-lg overflow-hidden border border-gold/35 group shadow-lg shadow-gold-glow">
            <iframe
              id="gmaps-location-iframe"
              title="Gold Star Personnel Ltd Location Map"
              src="https://maps.google.com/maps?q=21%20Claremont%20Road,%20Morecambe,%20LA4%204HL&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full border-0 grayscale invert opacity-80"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Soft Overlay Ring to tie it into visual branding */}
            <div className="absolute inset-0 border border-gold/40 pointer-events-none group-hover:border-gold transition-colors duration-500 rounded-lg" />
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
