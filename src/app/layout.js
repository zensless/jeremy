// app/layout.js
"use client"; // Menandai komponen ini sebagai Client Component

import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Table from './../../components/table';
import Project from '../../components/project';
import Footer from '../../components/footer';
import Kontak from "../../components/kontak";
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('light'); // State untuk menyimpan tema

  // Fungsi untuk toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme); // Ubah theme pada elemen <html>
  };

  useEffect(() => {
    // Menyimpan tema ke localStorage jika ada perubahan
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme); // Simpan tema yang dipilih ke localStorage
  }, [theme]);

  return (
    <html lang="en" data-theme={theme}>
      <body>
        <Navbar toggleTheme={toggleTheme} theme={theme} /> {/* Pass toggle function and theme state */}
        <Hero className="h-screen" />
        <Table />
        <Project />
        <Kontak />
        <Footer />
      </body>
    </html>
  );
}
