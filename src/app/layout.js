//app\layout.js
import { Content, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Table from './../../components/table'
import Project from '../../components/project'
import Footer from '../../components/footer'
import Kontak from "../../components/kontak"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto px-4">
          <Navbar />
          <Hero />
          <Table />
          <Project />
          <Kontak />
          <Footer />
          <div className="pb-8">{children}</div>
        </div>
      </body>
    </html>
  )
}
