'use client';

import { useState } from 'react';
import { Section, SectionHeader } from '../components';

const designationOptions = [
  'HR',
  'People & Culture',
  'Admin',
  'Founder',
  'Business Head',
  'Other',
];

const companySizeOptions = [
  '1–50',
  '51–100',
  '101–500',
  '501–1000',
  '1000+',
];

const interestOptions = [
  'Employee Engagement',
  'Corporate Events',
  'Team Building',
  'Sports & Fitness',
  'Wellness',
  'Mental Wellness',
  'Corporate Offsite',
  'Corporate Trips',
  'Annual Employee Experience Calendar',
  'Other',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    companySize: '',
    interests: [],
    requirement: '',
    callTime: '',
    honeypot: '', // spam protection
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[\d\s-()]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.companySize) newErrors.companySize = 'Please select company size';

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleInterestToggle = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate submission (will be replaced with Web3Forms/Formspree in Phase 4)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        designation: '',
        companySize: '',
        interests: [],
        requirement: '',
        callTime: '',
        honeypot: '',
      });
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Common input classes
  const inputBase =
    'w-full px-4 py-3 rounded-xl border bg-white text-ev-navy text-sm transition-all duration-200 focus:ring-2 focus:ring-ev-accent/20 focus:border-ev-accent outline-none';
  const inputNormal = `${inputBase} border-ev-gray-200`;
  const inputError = `${inputBase} border-red-400 bg-red-50/50`;

  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="relative pt-36 pb-16 ev-gradient-hero overflow-hidden" id="contact-hero">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-ev-accent/10 rounded-full blur-[120px]" />

        <div className="ev-container relative z-10 text-center">
          <div className="ev-badge bg-white/10 text-white/80 border border-white/10 mb-6 mx-auto">
            <span className="w-2 h-2 rounded-full bg-ev-accent animate-pulse" />
            Get in Touch
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Request a{' '}
            <span className="bg-gradient-to-r from-ev-accent to-ev-gold bg-clip-text text-transparent">
              Call
            </span>
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
            Tell us about your requirements and our team will get back to you shortly.
          </p>
        </div>
      </section>

      {/* ═══════ FORM + CONTACT INFO ═══════ */}
      <Section id="contact-form">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form — 2 columns */}
          <div className="lg:col-span-2">
            {isSubmitted ? (
              /* ─── Success State ─── */
              <div className="ev-card p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Thank You!
                </h2>
                <p className="text-ev-gray-500 text-lg mb-6">
                  We have received your request. Our team will contact you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-ev-navy hover:bg-ev-navy-light text-white text-sm font-semibold rounded-full transition-all duration-200"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              /* ─── Form ─── */
              <form onSubmit={handleSubmit} className="ev-card p-8 md:p-10" id="enquiry-form">
                <h2
                  className="text-xl font-bold mb-6"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Tell us about your requirement
                </h2>

                {/* Honeypot — hidden from users */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ev-gray-600 mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={errors.name ? inputError : inputNormal}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ev-gray-600 mb-1.5">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={errors.email ? inputError : inputNormal}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-ev-gray-600 mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={errors.phone ? inputError : inputNormal}
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-ev-gray-600 mb-1.5">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className={errors.company ? inputError : inputNormal}
                    />
                    {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company}</p>}
                  </div>

                  {/* Designation */}
                  <div>
                    <label htmlFor="designation" className="block text-sm font-medium text-ev-gray-600 mb-1.5">
                      Designation
                    </label>
                    <select
                      id="designation"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      className={inputNormal}
                    >
                      <option value="">Select your role</option>
                      {designationOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Company Size */}
                  <div>
                    <label htmlFor="companySize" className="block text-sm font-medium text-ev-gray-600 mb-1.5">
                      Company Size <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      className={errors.companySize ? inputError : inputNormal}
                    >
                      <option value="">Select company size</option>
                      {companySizeOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    {errors.companySize && <p className="text-xs text-red-500 mt-1">{errors.companySize}</p>}
                  </div>
                </div>

                {/* Interests — Multi-select */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-ev-gray-600 mb-3">
                    What are you interested in?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {interestOptions.map((interest) => {
                      const isSelected = formData.interests.includes(interest);
                      return (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => handleInterestToggle(interest)}
                          className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                            isSelected
                              ? 'bg-ev-accent text-white border-ev-accent shadow-sm'
                              : 'bg-white text-ev-gray-500 border-ev-gray-200 hover:border-ev-accent/50 hover:text-ev-accent'
                          }`}
                        >
                          {isSelected && (
                            <span className="mr-1">✓</span>
                          )}
                          {interest}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Requirement */}
                <div className="mt-6">
                  <label htmlFor="requirement" className="block text-sm font-medium text-ev-gray-600 mb-1.5">
                    Tell us about your requirement
                  </label>
                  <textarea
                    id="requirement"
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    placeholder="Describe your requirement, timeline, number of employees, etc."
                    rows={4}
                    className={inputNormal}
                  />
                </div>

                {/* Preferred Call Time */}
                <div className="mt-5">
                  <label htmlFor="callTime" className="block text-sm font-medium text-ev-gray-600 mb-1.5">
                    Preferred Call Time
                  </label>
                  <input
                    type="text"
                    id="callTime"
                    name="callTime"
                    value={formData.callTime}
                    onChange={handleChange}
                    placeholder="e.g., Weekdays 10 AM – 12 PM"
                    className={inputNormal}
                  />
                </div>

                {/* Submit */}
                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-ev-accent hover:bg-ev-accent-hover text-white text-base font-semibold rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                    id="submit-enquiry"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        Request a Call
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Contact details card */}
              <div className="ev-card p-7">
                <h3
                  className="text-lg font-bold mb-5"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Contact Information
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-ev-accent/10 flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ev-accent">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ev-gray-600">Email</p>
                      <a href="mailto:hello@experioverse.com" className="text-sm text-ev-accent hover:underline">
                        hello@experioverse.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-ev-blue/10 flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ev-blue">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ev-gray-600">Phone</p>
                      <a href="tel:+919876543210" className="text-sm text-ev-blue hover:underline">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-ev-gold/10 flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ev-gold">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ev-gray-600">Location</p>
                      <p className="text-sm text-ev-gray-400">India</p>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div className="mt-6 pt-5 border-t border-ev-gray-100">
                  <p className="text-sm font-medium text-ev-gray-600 mb-3">Follow Us</p>
                  <div className="flex items-center gap-3">
                    {['LinkedIn', 'Instagram', 'Twitter'].map((social) => (
                      <a
                        key={social}
                        href="#"
                        aria-label={social}
                        className="w-9 h-9 rounded-lg bg-ev-gray-50 flex items-center justify-center text-ev-gray-400 hover:bg-ev-accent/10 hover:text-ev-accent transition-all duration-200"
                      >
                        {social[0]}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick info card */}
              <div className="ev-card p-7 bg-gradient-to-br from-ev-navy to-ev-navy-light text-white">
                <h3
                  className="text-base font-bold mb-3 text-white"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  What happens next?
                </h3>
                <ol className="space-y-3">
                  {[
                    'Our team reviews your requirement',
                    'We schedule a call at your preferred time',
                    'We discuss your needs and share ideas',
                    'We send you a customised proposal',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                      <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-ev-accent shrink-0">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
