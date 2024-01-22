import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="text-center">
    <Navigation />
    {children}
    <Footer />
  </div>
);

export default Layout;
