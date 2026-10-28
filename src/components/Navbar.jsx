import React, { useState, useEffect } from 'react'
import { Menu, X, FileDown } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function Navbar({ onOpenResume }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'dark-glass-nav shadow-lg shadow-black/40 border-b border-[#81D8D0]/20 py-3'
          : 'bg-[#0B0F17]/80 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#81D8D0] to-[#57beb4] flex items-center justify-center font-bold text-[#0B0F17] text-lg shadow-sm group-hover:scale-105 transition-transform duration-200">
              SN
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-white group-hover:text-[#81D8D0] transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                MERN Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-white font-semibold bg-[#81D8D0]/15'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#81D8D0] rounded-full shadow-[0_0_8px_#81D8D0]"></span>
                  )}
                </a>
              )
            })}
          </nav>

          {/* Right Action: Download Resume Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/Nivetha_S_Resume.pdf"
              download="Nivetha_S_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-[#0B0F17] bg-[#81D8D0] hover:bg-[#57beb4] transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-[#81D8D0]/20 hover:-translate-y-0.5 cursor-pointer"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#0E1524] border-b border-[#81D8D0]/30 shadow-2xl p-5 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#81D8D0]/15 text-white font-semibold border-l-4 border-[#81D8D0]'
                      : 'text-gray-300 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              )
            })}
            <div className="pt-3 border-t border-gray-800">
              <a
                href="/Nivetha_S_Resume.pdf"
                download="Nivetha_S_Resume.pdf"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-[#0B0F17] bg-[#81D8D0] hover:bg-[#57beb4] transition-colors shadow-sm"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
