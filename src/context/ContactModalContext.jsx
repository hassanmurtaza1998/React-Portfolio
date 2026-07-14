import { useMemo, useState } from "react";
import ContactModal from "../components/ui/ContactModal";
import { ContactModalContext } from "./modalContextBase";

export const ContactModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const value = useMemo(() => ({
    openContactModal: () => setIsOpen(true),
    closeContactModal: () => setIsOpen(false),
  }), []);

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <ContactModal isOpen={isOpen} onClose={value.closeContactModal} />
    </ContactModalContext.Provider>
  );
};
