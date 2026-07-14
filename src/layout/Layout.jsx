import Header from "./header/Header";
import Footer from "./footer/Footer";
import Portfolio from "../components/Portfolio";
import { ContactModalProvider } from "../context/ContactModalContext";
import AmbientBackground from "../components/ui/AmbientBackground";
import ScrollProgress from "../components/ui/ScrollProgress";

const AppLayout = () => {
  return (
    <ContactModalProvider>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <ScrollProgress />
      <AmbientBackground />
      <Header />
      <main id="main-content">
        <Portfolio />
      </main>
      <Footer />
    </ContactModalProvider>
  );
};

export default AppLayout;
