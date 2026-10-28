import React from 'react'
import {
  ArrowRight,
  Download,
  MapPin,
  Briefcase
} from 'lucide-react'
import { personalInfo } from '../data/portfolioData'
import profileImg from '../assets/profile.jpeg'

export default function Hero({ onOpenResume }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="tunis-section min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Signature Tunis Diagonal Background Shape (Desktop) */}
      <div className="tunis-diagonal-bg" />

      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[var(--accent-color)] opacity-10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[var(--accent-color)] opacity-5 blur-[120px] pointer-events-none rounded-full" />

      <div className="tunis-container">
        <div className="hero-tunis-grid">
          {/* Left Column: Profile Image without box background */}
          <div className="hero-image-wrapper">
            <div className="hero-image-card">
              <img
                src={profileImg}
                alt={personalInfo.name}
                className="hero-profile-img"
              />
            </div>
          </div>

          {/* Right Column: Tunis Typography & Action Elements */}
          <div className="hero-text-content">
            {/* Name Badge */}
            <div className="hero-name-badge">
              <span className="hero-dash">—</span>
              <span className="hero-name-text">HI THERE! I'M {personalInfo.name}</span>
            </div>

            {/* Role Title */}
            <h1 className="hero-role-title">
              MERN STACK <span style={{ color: 'var(--accent-color)' }}>DEVELOPER</span>
            </h1>

            {/* Bio Paragraph */}
            <p className="hero-bio-paragraph">
              {personalInfo.shortBio}
            </p>

            {/* Status & Highlights Tags Row */}
            <div className="hero-tags-row">
              <div className="hero-status-tag">
                <span className="hero-status-dot animate-pulse" />
                <span>{personalInfo.status}</span>
              </div>
              <div className="hero-stat-badge">
                <Briefcase className="w-3.5 h-3.5 text-[var(--accent-color)] flex-shrink-0" />
                <span>{personalInfo.experienceYears} Hands-on</span>
              </div>
              <div className="hero-stat-badge" title={personalInfo.location}>
                <MapPin className="w-3.5 h-3.5 text-[var(--accent-color)] flex-shrink-0" />
                <span>Chennai, India</span>
              </div>
            </div>

            {/* Action Buttons: Signature Tunis Button with sliding hover effect */}
            <div className="hero-actions-row">
              <button
                onClick={() => scrollTo('about')}
                className="btn-tunis"
                aria-label="More About Me"
              >
                <span>MORE ABOUT ME</span>
                <div className="btn-icon-circle">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>

              <a
                href="/Nivetha_S_Resume.pdf"
                download="Nivetha_S_Resume.pdf"
                className="btn-tunis"
                aria-label="Download Nivetha's CV"
              >
                <span>DOWNLOAD CV</span>
                <div className="btn-icon-circle">
                  <Download className="w-4 h-4" />
                </div>
              </a>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}
