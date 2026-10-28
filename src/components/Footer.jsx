import React from 'react'
import { ArrowUp, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Stack', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-[var(--bg-primary)] text-[var(--text-primary)] pt-16 pb-12 border-t border-[var(--border-color)] relative z-10">
      <div className="tunis-container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[var(--border-color)]">
          {/* Column 1: Brand & Bio (Span 5 on large screens) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[var(--accent-color)] flex items-center justify-center font-black text-[#0B0F17] text-xl shadow-lg">
                SN
              </div>
              <div>
                <span className="font-extrabold text-xl text-white block tracking-tight">
                  {personalInfo.name}
                </span>
                <span className="text-xs font-semibold text-[var(--accent-color)] tracking-wide">
                  MERN Stack Developer
                </span>
              </div>
            </div>

            <p className="text-[var(--text-secondary)] text-sm max-w-sm leading-relaxed">
              Building responsive, API-driven web applications, admin dashboards, and scalable database architectures using React, Node.js, Express, MongoDB, and MySQL.
            </p>

            <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] pt-1">
              <MapPin className="w-3.5 h-3.5 text-[var(--accent-color)]" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (Span 4 on large screens) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest border-b border-[var(--border-color)] pb-2">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors flex items-center gap-1.5 group"
                >
                  <span className="text-xs text-[var(--accent-color)] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact & Socials (Span 3 on large screens) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest border-b border-[var(--border-color)] pb-2">
              Connect With Me
            </h4>

            <div className="space-y-2 text-xs text-[var(--text-secondary)]">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 hover:text-[var(--accent-color)] transition-colors"
              >
                <Mail className="w-4 h-4 text-[var(--accent-color)] flex-shrink-0" />
                <span className="truncate">{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-[var(--accent-color)] transition-colors"
              >
                <Phone className="w-4 h-4 text-[var(--accent-color)] flex-shrink-0" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="social-icon-btn"
                title="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="social-icon-btn"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Direct Email"
                className="social-icon-btn"
                title="Email Me"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} <span className="text-[var(--text-primary)] font-semibold">{personalInfo.name}</span>. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all cursor-pointer shadow-sm group"
            aria-label="Scroll back to top"
          >
            <span className="font-semibold text-xs tracking-wide">Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
