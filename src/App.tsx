/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage.tsx';
import GalleryPage from './pages/GalleryPage.tsx';

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-natural-bg text-clay font-sans p-6 md:p-10 flex flex-col gap-8">
      {/* Header */}
      <header className="border-b border-linen pb-5 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="font-serif text-3xl md:text-4xl font-normal text-clay">
            <Link to="/" className="hover:text-sage transition-colors">The Feline Archive</Link>
          </h1>
          <p className="text-stone font-serif italic text-sm mt-1">A curated database of feline companions</p>
        </div>
        
        <nav className="flex items-center gap-6">
          <Link 
            to="/" 
            className={`text-xs md:text-sm font-semibold uppercase tracking-widest transition-all ${
              location.pathname === '/' ? 'text-sage border-b-2 border-sage pb-1' : 'text-stone hover:text-clay'
            }`}
          >
            Overview
          </Link>
          <Link 
            to="/gallery" 
            className={`text-xs md:text-sm font-semibold uppercase tracking-widest transition-all ${
              location.pathname === '/gallery' ? 'text-sage border-b-2 border-sage pb-1' : 'text-stone hover:text-clay'
            }`}
          >
            Archive
          </Link>
          <div className="text-stone text-[10px] md:text-xs font-medium border-l border-linen pl-6 hidden md:block">
            Logged in as Admin
          </div>
        </nav>
      </header>

      <main className="flex-1 flex flex-col">
        {children}
      </main>

      <footer className="mt-auto pt-10 border-t border-linen text-center text-[10px] text-stone uppercase tracking-widest font-semibold flex flex-col md:flex-row justify-between gap-4">
        <span>The Feline Archive v1.1.0</span>
        <div className="flex gap-4 justify-center">
          <Link to="/" className="hover:text-sage transition-colors">Safety Protocols</Link>
          <Link to="/gallery" className="hover:text-sage transition-colors">Privacy manifest</Link>
        </div>
        <span className="italic uppercase">Documenting the extraordinary nature of companions</span>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}



