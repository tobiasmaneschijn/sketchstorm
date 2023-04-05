import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-t from-[#fff7ec] to-white">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
