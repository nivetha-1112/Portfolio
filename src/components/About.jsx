import React, { useState } from 'react'
import {
  Download,
  ShieldCheck,
  Server,
  Layout,
  Database,
  Terminal as TerminalIcon,
  Copy,
  Check,
  User,
  MapPin,
  Mail,
  Phone,
  Globe,
  Award
} from 'lucide-react'
import { personalInfo, aboutData } from '../data/portfolioData'

export default function About({ onOpenResume }) {
  const [activeTab, setActiveTab] = useState('profile.js')
  const [copied, setCopied] = useState(false)

  const iconMap = {
    ShieldCheck,
    Server,
    Layout,
    Database
  }

  const personalDetails = [
    { label: 'First Name', value: personalInfo.firstName, icon: User },
    { label: 'Last Name', value: personalInfo.lastName, icon: User },
    { label: 'Age', value: personalInfo.age || '21 Years', icon: Award },
    { label: 'Nationality', value: personalInfo.nationality || 'Indian', icon: Globe },
    { label: 'Freelance', value: personalInfo.freelance || 'Available', icon: ShieldCheck, highlight: true },
    { label: 'Address', value: personalInfo.location, icon: MapPin },
    { label: 'Phone', value: personalInfo.phone, icon: Phone },
    { label: 'Email', value: personalInfo.email, icon: Mail },
    { label: 'Languages', value: personalInfo.languages || 'English, Tamil', icon: Globe }
  ]

  const handleCopyCode = () => {
    const code = aboutData.terminalFiles[activeTab]
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="about" className="tunis-section relative">
      {/* Tunis Section Title with huge faint watermark */}
      <div className="tunis-section-title-wrap">
        <h2 className="tunis-watermark">RESUME</h2>
        <h3 className="tunis-title-foreground">
          ABOUT <span>ME</span>
        </h3>
      </div>

      <div className="tunis-container">
        {/* Top Grid: Personal Infos on Left & Stat Boxes on Right */}
        <div className="about-tunis-grid">
          {/* Left Column: Personal Info Card */}
          <div className="about-personal-card">
            <div>
              <div className="about-card-header">
                <div className="about-title-row">
                  <div className="about-accent-bar" />
                  <h4 className="about-subheading">Personal Infos</h4>
                </div>
                <span className="about-role-pill">MERN Developer</span>
              </div>

              {/* Info Tiles Grid */}
              <div className="about-info-grid">
                {personalDetails.map((item, idx) => {
                  const ItemIcon = item.icon
                  return (
                    <div key={idx} className="about-info-tile">
                      <ItemIcon className="w-4 h-4 about-tile-icon" />
                      <div className="about-tile-content">
                        <span className="about-tile-label">{item.label}</span>
                        <span className={`about-tile-val ${item.highlight ? 'highlight-val' : ''}`}>
                          {item.value}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Card Footer: Download CV Button */}
            <div className="about-card-footer">
              <button
                onClick={onOpenResume}
                className="btn-tunis"
                aria-label="Download CV"
              >
                <span>DOWNLOAD CV</span>
                <div className="btn-icon-circle">
                  <Download className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Tunis Stat Boxes */}
          <div className="about-stats-grid">
            {aboutData.stats.map((stat, idx) => (
              <div key={idx} className="about-stat-box">
                <div className="about-stat-number">
                  {stat.number}
                  <span style={{ fontSize: '1.4rem' }}>{stat.suffix}</span>
                </div>
                <div className="about-stat-text">
                  <strong>{stat.label1}</strong>
                  <span>{stat.label2}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Grid: Engineering Highlights & Interactive Code Terminal */}
        <div className="about-bottom-grid">
          {/* Left: Highlights List */}
          <div className="about-highlights-list">
            {aboutData.highlights.map((item, idx) => {
              const IconComp = iconMap[item.icon] || ShieldCheck
              return (
                <div key={idx} className="highlight-card">
                  <div className="highlight-icon-box">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="highlight-title">{item.title}</h5>
                    <p className="highlight-desc">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right: Interactive Code Terminal */}
          <div className="about-terminal-wrap">
            <div className="terminal-card">
              {/* Terminal Top Bar with MacOS window dots & tabs */}
              <div className="terminal-topbar">
                <div className="terminal-dots">
                  <span style={{ backgroundColor: '#EF4444' }} />
                  <span style={{ backgroundColor: '#F59E0B' }} />
                  <span style={{ backgroundColor: '#10B981' }} />
                </div>

                <div className="terminal-tabs">
                  {Object.keys(aboutData.terminalFiles).map((fileName) => (
                    <button
                      key={fileName}
                      onClick={() => setActiveTab(fileName)}
                      className={`terminal-tab-btn ${activeTab === fileName ? 'active' : ''}`}
                    >
                      <TerminalIcon className="w-3.5 h-3.5" />
                      <span>{fileName}</span>
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleCopyCode}
                  className="p-1 rounded text-gray-400 hover:text-white transition-colors"
                  title="Copy code"
                  aria-label="Copy code"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Terminal Code Content */}
              <div className="terminal-content">
                <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                  <code>{aboutData.terminalFiles[activeTab]}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
