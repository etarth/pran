'use client';
import React, { useState } from 'react';
import { X } from 'lucide-react';

type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const ContactModal: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const [selectedOption, setSelectedOption] = useState<'investor' | 'position' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Handle form submission here
    console.log('Form submitted:', {
      type: selectedOption,
      ...formData
    });
    
    // Reset form and close modal
    setFormData({ name: '', surname: '', email: '', phone: '' });
    setSelectedOption(null);
    setIsOpen(false);
  };

  const resetForm = () => {
    setFormData({ name: '', surname: '', email: '', phone: '' });
    setSelectedOption(null);
  };

  const handleClose = () => {
    resetForm();
    setIsOpen(false);
  };

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
            className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-1 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Body */}
        <div className="px-6 pb-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Question */}
            <div>
              <p className="text-gray-600 mb-4 text-md">What brings you here?</p>
              
              {/* Option Buttons */}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedOption('investor')}
                  className={`flex-1 h-12 rounded-lg font-medium transition-colors ${
                    selectedOption === 'investor' 
                      ? 'bg-black text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-150'
                  }`}
                >
                  Become an investor
                </button>
                
                <button
                  type="button"
                  onClick={() => setSelectedOption('position')}
                  className={`flex-1 h-12 rounded-lg font-medium transition-colors ${
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
                  className="w-full h-12 px-3 bg-gray-100 border-0 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
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
                  className="w-full h-12 px-3 bg-gray-100 border-0 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
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
                  className="w-full h-12 px-3 bg-gray-100 border-0 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
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
                  className="w-full h-12 px-3 bg-gray-100 border-0 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!selectedOption || !formData.name || !formData.email}
              className="w-full bg-black text-white font-medium h-12 rounded-lg mt-6 disabled:text-black disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;