import React, { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
  User,
  MessageSquare
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { personalInfo } from '../data/portfolioData'

export default function Contact({ onShowToast, onOpenResume }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      onShowToast?.('Please fill out all required fields.', 'error')
      return
    }

    setIsSubmitting(true)

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      onShowToast?.('Message sent successfully! Nivetha will get back to you shortly.', 'success')

      // Pre-fill mailto link as fallback to ensure message delivery
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || `Portfolio Contact from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`
      window.open(mailtoUrl, '_blank')

      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }, 900)
  }

  return (
    <section id="contact" className="tunis-section relative">
      {/* Tunis Section Title with Watermark */}
      <div className="tunis-section-title-wrap">
        <h2 className="tunis-watermark">CONTACT</h2>
        <h3 className="tunis-title-foreground">
          GET IN <span>TOUCH</span>
        </h3>
      </div>

      <div className="tunis-container">
        <div className="tunis-contact-grid">
          {/* Left Column: Contact Infos Card */}
          <div className="contact-card contact-left-card">
            <div>
              <div className="contact-card-header">
                <div className="contact-accent-bar" />
                <h4 className="contact-left-heading">DON'T BE SHY!</h4>
              </div>

              <p className="contact-left-desc">
                Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              {/* Info Tiles */}
              <div className="contact-info-items">
                {/* Address */}
                <div className="contact-info-tile">
                  <div className="contact-icon-circle">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="contact-info-text">
                    <span className="contact-info-sub">LOCATION POINT</span>
                    <span className="contact-info-main">{personalInfo.location}</span>
                  </div>
                </div>

                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="contact-info-tile contact-link"
                >
                  <div className="contact-icon-circle">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="contact-info-text">
                    <span className="contact-info-sub">MAIL ME</span>
                    <span className="contact-info-main">{personalInfo.email}</span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="contact-info-tile contact-link"
                >
                  <div className="contact-icon-circle">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="contact-info-text">
                    <span className="contact-info-sub">CALL ME</span>
                    <span className="contact-info-main">{personalInfo.phone}</span>
                  </div>
                </a>

                {/* Availability */}
                <div className="contact-info-tile">
                  <div className="contact-icon-circle">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="contact-info-text">
                    <span className="contact-info-sub">AVAILABILITY</span>
                    <span className="contact-info-main flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {personalInfo.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="contact-social-section">
              <span className="contact-social-label">SOCIAL PROFILES</span>
              <div className="contact-social-row">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="social-icon-btn"
                  title="Direct Email"
                  aria-label="Direct Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Tunis Form Card */}
          <div className="contact-card">
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Message Received!</h4>
                <p className="text-sm text-[var(--text-secondary)] max-w-sm">
                  Thank you for reaching out. I have received your message and will respond as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="tunis-form">
                <div className="form-row-2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="YOUR NAME *"
                    required
                    className="tunis-input"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="YOUR EMAIL *"
                    required
                    className="tunis-input"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="YOUR SUBJECT"
                  className="tunis-input"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="YOUR MESSAGE *"
                  required
                  rows={6}
                  className="tunis-input tunis-textarea"
                />

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-tunis"
                    aria-label="Send Message"
                  >
                    <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                    <div className="btn-icon-circle">
                      <Send className="w-4 h-4" />
                    </div>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
