import React from 'react'
import { ArrowUp, Mail, Phone, MapPin, Sparkles } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills & Stack', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'My Portfolio', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Get In Touch', href: '#contact' }
  ]

  return (
    <footer className="tunis-footer">
      {/* Top glowing cyan line */}
      <div className="tunis-footer-glow" />

      <div className="tunis-container">
        {/* Main 3-Column Footer Grid */}
        <div className="tunis-footer-grid">
          {/* Column 1: Brand & Profile Info */}
          <div className="tunis-footer-col space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[var(--accent-color)] flex items-center justify-center font-black text-[#0B0F17] text-lg shadow-[0_0_15px_rgba(0,245,212,0.35)] flex-shrink-0">
                SN
              </div>
              <div>
                <span className="font-extrabold text-xl text-white block tracking-tight leading-tight">
                  {personalInfo.name}
                </span>
                <span className="text-xs font-semibold text-[var(--accent-color)] tracking-wide">
                  MERN Stack Developer
                </span>
              </div>
            </div>

            <p className="text-[var(--text-secondary)] text-sm max-w-sm leading-relaxed">
              Passionate MERN Stack Developer crafting production-grade web applications, responsive frontend experiences, and reliable RESTful backend systems.
            </p>

            {/* Status & Location badges */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Opportunities</span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                <MapPin className="w-3.5 h-3.5 text-[var(--accent-color)] flex-shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="tunis-footer-col">
            <h4 className="tunis-footer-title">
              Quick Navigation
            </h4>
            <div className="tunis-footer-links-grid">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="tunis-footer-link group"
                >
                  <span className="text-xs text-[var(--accent-color)] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact & Direct Connect */}
          <div className="tunis-footer-col">
            <h4 className="tunis-footer-title">
              Connect With Me
            </h4>

            {/* Clickable contact chips */}
            <div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="tunis-footer-contact-item"
                title="Send Email"
              >
                <Mail className="w-4 h-4 text-[var(--accent-color)] flex-shrink-0" />
                <span className="truncate">{personalInfo.email}</span>
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="tunis-footer-contact-item"
                title="Call Phone"
              >
                <Phone className="w-4 h-4 text-[var(--accent-color)] flex-shrink-0" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>

            {/* Social Icons with glowing hover effect */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="social-icon-btn"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="social-icon-btn"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Direct Email"
                className="social-icon-btn"
                title="Email Me Directly"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="tunis-footer-bottom">
          <p className="text-xs text-[var(--text-muted)] tracking-wide">
            © {new Date().getFullYear()} <span className="text-white font-bold">{personalInfo.name}</span>. All rights reserved. • Built with React & Node.js
          </p>

          <button
            onClick={scrollToTop}
            className="tunis-back-to-top group"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-[var(--accent-color)] transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  )
}
