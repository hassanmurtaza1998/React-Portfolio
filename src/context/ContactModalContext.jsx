import { createContext, useContext, useState } from "react";
import ContactModal from "../components/ui/ContactModal";

const ContactModalContext = createContext(null);

export const ContactModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openContactModal = () => setIsOpen(true);
  const closeContactModal = () => setIsOpen(false);

  return (
    <ContactModalContext.Provider value={{ openContactModal, closeContactModal }}>
      {children}
      <ContactModal isOpen={isOpen} onClose={closeContactModal} />
    </ContactModalContext.Provider>
  );
};

export const useContactModal = () => {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return context;
};
