import { Layout } from "antd";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Portfolio from "../components/Portfolio";
import { ContactModalProvider } from "../context/ContactModalContext";

const { Content, Header: AntHeader, Footer: AntFooter } = Layout;

const AppLayout = () => {
  return (
    <ContactModalProvider>
    <Layout className="min-h-screen bg-[#0a0f1e]">
      {/* Header */}
      <AntHeader className="bg-[#0a0f1e] !p-0 sticky top-0 z-50 h-20">
        <Header />
      </AntHeader>

      {/* Content */}
      <Content className="pt-4 sm:pt-8 bg-[#0a0f1e]">
        <Portfolio />
      </Content>

      {/* Footer */}
      <AntFooter className="bg-[#0a0f1e]">
        <Footer />
      </AntFooter>
    </Layout>
    </ContactModalProvider>
  );
};

export default AppLayout;
