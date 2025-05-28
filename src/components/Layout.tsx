import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SearchModal from './SearchModal';

const Layout = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onSearchClick={toggleSearch} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
};

export default Layout;