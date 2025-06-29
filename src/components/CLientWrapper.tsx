"use client";
import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";
import { ModalProvider, useModal } from "@/contexts/ModalContext";

interface ClientWrapperProps {
  children: ReactNode;
}

const ClientWrapperContent: React.FC<ClientWrapperProps> = ({ children }) => {
  const { contactModalOpen, setContactModalOpen } = useModal();

  return (
    <>
      <div className="absolute top-0 w-screen">
        <Navigation setContactModalOpen={setContactModalOpen} />
      </div>
      <ContactModal isOpen={contactModalOpen} setIsOpen={setContactModalOpen} />

      <main>{children}</main>

      <Footer />
    </>
  );
};

const ClientWrapper: React.FC<ClientWrapperProps> = ({ children }) => {
  return (
    <ModalProvider>
      <ClientWrapperContent>{children}</ClientWrapperContent>
    </ModalProvider>
  );
};

export default ClientWrapper;
