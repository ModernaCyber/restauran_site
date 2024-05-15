import React, { ReactNode } from "react";
import Navbar from "../navigation/Navbar";
import Footer from "../footer/Footer";
interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="dark:bg-black ">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
