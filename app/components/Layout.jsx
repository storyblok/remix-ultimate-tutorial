import Navigation from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="text-center">
    <Navigation />
    {children}
    <Footer />
  </div>
);

export default Layout;
