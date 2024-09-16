import React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    
    <div  data-theme="luxury" className="flex flex-col min-h-screen">
      {/* Header component */}
      <Header />
      
      {/* Main content area */}
      <main className="flex-grow bg-gray-100 p-4">
        {children}
      </main>

      {/* Footer component */}
      <Footer />
    </div>
   
  );
};

export default Layout;
