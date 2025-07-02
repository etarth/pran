'use client';
import React, { useState } from 'react';
import { X } from 'lucide-react';

type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

interface FormData {
  name: string;
  surname: string;
  email: string;
  phone: string;
}

const ContactModal: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const [selectedOption, setSelectedOption] = useState<'investor' | 'position' | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (field: keyof FormData, value: string) => {
    console.log(`Input changed - ${field}:`, value); // Debug log
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear any previous error status when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submission started'); // Debug log
    console.log('Selected option:', selectedOption); // Debug log
    console.log('Form data:', formData); // Debug log
    
    if (!selectedOption) {
      console.log('Error: No option selected'); // Debug log
      setErrorMessage('Please select an option');
      setSubmitStatus('error');
      return;
    }

    // Validate form data
    if (!formData.name || !formData.surname || !formData.email || !formData.phone) {
      console.log('Error: Missing required fields'); // Debug log
      setErrorMessage('Please fill in all fields');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const submitData = {
      type: selectedOption,
      ...formData
    };

    console.log('Sending data to API:', submitData); // Debug log

    try {
      console.log('Making fetch request to /api/contact'); // Debug log
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      console.log('Response status:', response.status); // Debug log
      console.log('Response ok:', response.ok); // Debug log

      const responseData = await response.json();
      console.log('Response data:', responseData); // Debug log

      if (!response.ok) {
        throw new Error(responseData.error || 'Failed to submit form');
      }

      // Success
      console.log('Form submitted successfully!'); // Debug log
      setSubmitStatus('success');
      
      // Auto-close modal after 2 seconds
      setTimeout(() => {
        resetForm();
        setIsOpen(false);
      }, 2000);

    } catch (error) {
      console.error('Error submitting form:', error); // Debug log
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit form');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    console.log('Resetting form'); // Debug log
    setFormData({ name: '', surname: '', email: '', phone: '' });
    setSelectedOption(null);
    setSubmitStatus('idle');
    setErrorMessage('');
    setIsSubmitting(false);
  };

  const handleClose = () => {
    console.log('Modal close requested'); // Debug log
    if (!isSubmitting) {
      resetForm();
      setIsOpen(false);
    }
  };

  // Debug log for modal state
  console.log('Modal isOpen:', isOpen);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
      <div className="flex flex-col bg-white rounded-lg w-full max-w-md mx-4 gap-3 shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-start p-6 pb-2">
          <h2 className="text-xl font-semibold text-black">
            Be a part of our journey.
          </h2>
          <button
            onClick={handleClose}
            disabled={isSubmitting}
            className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-1 transition-colors disabled:cursor-not-allowed"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Body */}
        <div className="px-6 pb-6">
          {submitStatus === 'success' ? (
            // Success Message
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-black mb-2">Thank you!</h3>
              <p className="text-gray-600">Your submission has been received. We&apos;ll get back to you soon.</p>
            </div>
          ) : (
            // Form
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Error Message Display */}
              {submitStatus === 'error' && errorMessage && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {errorMessage}
                </div>
              )}

              {/* Question */}
              <div>
                <p className="text-gray-600 mb-4 text-md">What brings you here?</p>
                
                {/* Option Buttons */}
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      console.log('Investor button clicked'); // Debug log
                      setSelectedOption('investor');
                    }}
                    disabled={isSubmitting}
                    className={`flex-1 h-12 rounded-lg font-medium transition-colors disabled:cursor-not-allowed ${
                      selectedOption === 'investor' 
                        ? 'bg-black text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-150'
                    }`}
                  >
                    Become an investor
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => {
                      console.log('Position button clicked'); // Debug log
                      setSelectedOption('position');
                    }}
                    disabled={isSubmitting}
                    className={`flex-1 h-12 rounded-lg font-medium transition-colors disabled:cursor-not-allowed ${
                      selectedOption === 'position' 
                        ? 'bg-black text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-150'
                    }`}
                  >
                    Apply for a position
                  </button>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-600 font-medium mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                      handleInputChange('name', e.target.value)
                    }
                    disabled={isSubmitting}
                    className="w-full h-12 px-3 bg-gray-100 border-0 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="surname" className="block text-gray-600 font-medium mb-1">
                    Surname
                  </label>
                  <input
                    id="surname"
                    type="text"
                    value={formData.surname}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                      handleInputChange('surname', e.target.value)
                    }
                    disabled={isSubmitting}
                    className="w-full h-12 px-3 bg-gray-100 border-0 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-600 font-medium mb-1">
                    Gmail
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                      handleInputChange('email', e.target.value)
                    }
                    disabled={isSubmitting}
                    className="w-full h-12 px-3 bg-gray-100 border-0 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-600 font-medium mb-1">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                      handleInputChange('phone', e.target.value)
                    }
                    disabled={isSubmitting}
                    className="w-full h-12 px-3 bg-gray-100 border-0 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!selectedOption || !formData.name || !formData.email || isSubmitting}
                className="w-full bg-black text-white font-medium h-12 rounded-lg mt-6 hover:bg-[#05ac8a] disabled:text-black disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                onClick={() => console.log('Submit button clicked')} // Debug log
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;