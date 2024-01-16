import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = ({ children }) => (
  <div>
    <Navigation />
    {children}
    <Footer />
  </div>
);

export default Layout;
