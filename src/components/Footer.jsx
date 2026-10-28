import React from 'react'
import { ArrowUp, Mail, Heart } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-[#080B11] text-white pt-16 pb-12 border-t border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#81D8D0] to-[#57beb4] flex items-center justify-center font-bold text-[#0B0F17] text-lg">
                SN
              </div>
              <div>
                <span className="font-extrabold text-lg text-white block">
                  {personalInfo.name}
                </span>
                <span className="text-xs text-[#81D8D0] font-semibold">
                  MERN Stack & Full Stack Developer
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Engineering intuitive user interfaces and reliable server systems. Specializing in enterprise admin suites, RESTful APIs, and scalable web solutions.
            </p>
            <p className="text-xs text-gray-500">
              Chennai, Tamil Nadu, India • Open for Opportunities
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-[#81D8D0] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest">
              Connect Directly
            </h4>
            <p className="text-sm text-gray-400">
              Have a project or opportunity? Reach out via:
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-[#81D8D0] text-gray-300 hover:text-[#1F2937] flex items-center justify-center transition-all duration-200"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-[#81D8D0] text-gray-300 hover:text-[#1F2937] flex items-center justify-center transition-all duration-200"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-[#81D8D0] text-gray-300 hover:text-[#1F2937] flex items-center justify-center transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} S. Nivetha. Crafted with React, Vite & Tailwind CSS.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-[#81D8D0] hover:text-[#1F2937] text-gray-300 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
