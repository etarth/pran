'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  contactModalOpen: boolean;
  setContactModalOpen: (open: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ contactModalOpen, setContactModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};