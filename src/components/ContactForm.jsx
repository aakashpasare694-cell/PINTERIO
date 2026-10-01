import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2, Send } from 'lucide-react';

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential',
    location: '',
    budget: '$50k - $100k',
    timeline: 'Within 3 Months',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your full name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.location.trim()) newErrors.location = 'Please specify your project location';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1 && !validateStep1()) return;
    if (currentStep === 2 && !validateStep2()) return;
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.message.trim()) {
      setErrors({ message: 'Please share a brief description of your project' });
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-white p-8 sm:p-12 md:p-16 rounded-xs border border-stone-200/80 shadow-lg">
      
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12 space-y-6"
        >
          <div className="w-16 h-16 rounded-full bg-stone-100 text-[#8C7A6B] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#121212] font-light">
            Inquiry Received.
          </h3>
          <p className="text-stone-600 font-light max-w-md mx-auto text-base">
            Thank you, <span className="font-medium text-[#121212]">{formData.name}</span>. Our senior design team will review your project requirements and connect within 24 business hours.
          </p>
          <div className="pt-4">
            <button
              onClick={() => {
                setSubmitted(false);
                setCurrentStep(1);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  projectType: 'Residential',
                  location: '',
                  budget: '$50k - $100k',
                  timeline: 'Within 3 Months',
                  message: '',
                });
              }}
              data-cursor="clickable"
              className="px-6 py-2.5 rounded-full border border-stone-300 hover:border-stone-800 text-xs font-mono uppercase tracking-widest text-[#121212] transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          
          {/* Progress Indicator Header */}
          <div className="flex items-center justify-between pb-8 mb-8 border-b border-stone-200">
            <div>
              <span className="text-xs font-mono text-[#8C7A6B] uppercase tracking-widest block">
                COMMISSION FORM — STEP 0{currentStep} OF 03
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-light text-[#121212] mt-1">
                {currentStep === 1 && 'Personal Information'}
                {currentStep === 2 && 'Project Parameters'}
                {currentStep === 3 && 'Project Narrative'}
              </h3>
            </div>
            
            {/* Step Pills */}
            <div className="flex gap-2">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-8 h-1 rounded-full transition-all duration-300 ${
                    step === currentStep
                      ? 'bg-[#121212] w-12'
                      : step < currentStep
                      ? 'bg-[#8C7A6B]'
                      : 'bg-stone-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Form Step Content with Framer Motion AnimatePresence */}
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-stone-600 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ananya Singhania"
                    className="w-full px-4 py-3.5 bg-stone-50 border border-stone-200 focus:border-[#121212] focus:bg-white outline-none text-sm transition-all"
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-stone-600 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. ananya@domain.com"
                      className="w-full px-4 py-3.5 bg-stone-50 border border-stone-200 focus:border-[#121212] focus:bg-white outline-none text-sm transition-all"
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-stone-600 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98200 11223"
                      className="w-full px-4 py-3.5 bg-stone-50 border border-stone-200 focus:border-[#121212] focus:bg-white outline-none text-sm transition-all"
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-stone-600 mb-2">
                    Project Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['Residential', 'Commercial', 'Hospitality', 'Renovation'].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData((prev) => ({ ...prev, projectType: type }))}
                        className={`py-3 px-3 text-xs font-medium rounded-xs border transition-all ${
                          formData.projectType === type
                            ? 'bg-[#121212] text-white border-[#121212]'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-400'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-stone-600 mb-2">
                      Project Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Worli, Mumbai"
                      className="w-full px-4 py-3.5 bg-stone-50 border border-stone-200 focus:border-[#121212] focus:bg-white outline-none text-sm transition-all"
                    />
                    {errors.location && <p className="text-xs text-red-500 mt-1">{errors.location}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-stone-600 mb-2">
                      Approximate Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-stone-50 border border-stone-200 focus:border-[#121212] focus:bg-white outline-none text-sm transition-all"
                    >
                      <option value="$25k - $50k">₹25L – ₹50L ($30k – $60k)</option>
                      <option value="$50k - $100k">₹50L – ₹1 Cr ($60k – $120k)</option>
                      <option value="$100k - $250k">₹1 Cr – ₹2.5 Cr ($120k – $300k)</option>
                      <option value="$250k+">₹2.5 Cr+ ($300k+)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-stone-600 mb-2">
                    Project Timeline
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Immediate', 'Within 3 Months', '6+ Months'].map((time) => (
                      <button
                        type="button"
                        key={time}
                        onClick={() => setFormData((prev) => ({ ...prev, timeline: time }))}
                        className={`py-2.5 px-2 text-xs font-medium rounded-xs border text-center transition-all ${
                          formData.timeline === time
                            ? 'bg-[#121212] text-white border-[#121212]'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-400'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-stone-600 mb-2">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share details about spatial area, architectural aspirations, materials preferred, or lifestyle needs..."
                    className="w-full px-4 py-3.5 bg-stone-50 border border-stone-200 focus:border-[#121212] focus:bg-white outline-none text-sm transition-all resize-none"
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form Action Buttons */}
          <div className="flex items-center justify-between pt-8 mt-8 border-t border-stone-200">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrev}
                data-cursor="clickable"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-300 text-xs font-mono uppercase tracking-widest text-stone-700 hover:text-[#121212] hover:border-stone-800 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            {currentStep < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                data-cursor="clickable"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#121212] text-white hover:bg-[#8C7A6B] text-xs font-semibold tracking-[0.2em] uppercase transition-colors"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                data-cursor="clickable"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#121212] text-white hover:bg-[#8C7A6B] text-xs font-semibold tracking-[0.25em] uppercase transition-all shadow-md"
              >
                <span>Send Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            )}
          </div>

        </form>
      )}

    </div>
  );
}
