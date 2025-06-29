'use client';
import React from 'react';

type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const ContactModal: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Join the Pran Team</h2>
        <p className="mb-4">Please contact us at <a href="mailto:team@pran.io" className="text-accent">team@pran.io</a></p>
        <button
          onClick={() => setIsOpen(false)}
          className="mt-4 bg-accent text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
