import React, { useState } from 'react'
import {
  Mail,
  MapPin,
  Send,
  Copy,
  Check,
  MessageSquare,
  FileDown,
  Sparkles
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { personalInfo } from '../data/portfolioData'

export default function Contact({ onShowToast, onOpenResume }) {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('idle')

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    onShowToast?.('Email address copied to clipboard!', 'success')
    setTimeout(() => setCopied(false), 2500)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast?.('Please fill out all required fields.', 'error')
      return
    }

    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      onShowToast?.('Thank you! Your message has been sent to S. Nivetha.', 'success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    }, 1200)
  }

  return (
    <section id="contact" className="py-24 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gray-200 bg-[#162032] border border-[#81D8D0]/40 mb-3 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-[#81D8D0]" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Exceptional Together
          </h2>
          <p className="mt-3 text-base text-gray-400 max-w-2xl mx-auto">
            Whether you have a MERN stack role, an admin panel project, or want to discuss full-stack development, I'd love to connect!
          </p>
          <div className="w-16 h-1 bg-[#81D8D0] mx-auto mt-4 rounded-full shadow-[0_0_8px_#81D8D0]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Direct Contact Info & Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="bg-[#111827] rounded-3xl p-7 border border-gray-800 shadow-xl space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#81D8D0]" />
                  Direct Channels
                </h3>

                {/* Email with 1-click Copy */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-[#162032] border border-[#81D8D0]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0B0F17] flex items-center justify-center text-[#81D8D0] shadow-xs">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm font-bold text-white hover:text-[#81D8D0] transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-[#0B0F17] hover:bg-[#81D8D0] text-gray-300 hover:text-[#0B0F17] transition-all shadow-xs cursor-pointer"
                    title="Copy Email"
                    aria-label="Copy Email address"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#162032] border border-[#81D8D0]/20">
                  <div className="w-10 h-10 rounded-xl bg-[#0B0F17] flex items-center justify-center text-[#81D8D0] shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Location</p>
                    <p className="text-sm font-bold text-white">{personalInfo.location}</p>
                    <p className="text-xs text-gray-400">Open to Opportunities</p>
                  </div>
                </div>

                {/* Social Profiles */}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                    Connect on Professional Networks
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#162032] border border-gray-700 hover:border-[#81D8D0] text-gray-200 hover:text-[#81D8D0] transition-all shadow-xs font-semibold text-xs"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#162032] border border-gray-700 hover:border-[#81D8D0] text-gray-200 hover:text-[#81D8D0] transition-all shadow-xs font-semibold text-xs"
                    >
                      <LinkedinIcon className="w-4 h-4 text-[#81D8D0]" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Resume Download Prompt Card */}
            <div className="bg-[#111827] text-white rounded-3xl p-6 shadow-xl border border-gray-800 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-white">Need an offline copy?</p>
                <p className="text-xs text-gray-400">Download S. Nivetha's PDF resume.</p>
              </div>
              <a
                href="/Nivetha_S_Resume.pdf"
                download="Nivetha_S_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-[#0B0F17] bg-[#81D8D0] hover:bg-[#57beb4] transition-all shadow-sm shrink-0 cursor-pointer"
              >
                <FileDown className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#111827] rounded-3xl p-7 sm:p-10 border border-gray-800 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-extrabold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                Fill in the form below and I will get back to you promptly.
              </p>

              {status === 'success' ? (
                <div className="p-8 rounded-2xl bg-[#162032] border border-[#81D8D0] text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#81D8D0] text-[#0B0F17] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Delivered!</h4>
                  <p className="text-sm text-gray-300 max-w-md mx-auto">
                    Thank you for reaching out. I have received your message and will review it shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-3 text-xs font-bold text-[#81D8D0] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" spellCheck="false">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                        Your Name <span className="text-[#81D8D0]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        spellCheck="false"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#81D8D0] focus:border-transparent text-sm text-white bg-[#0B0F17] placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-[#81D8D0]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        spellCheck="false"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#81D8D0] focus:border-transparent text-sm text-white bg-[#0B0F17] placeholder-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      spellCheck="false"
                      placeholder="MERN Developer Opportunity / Project Inquiry"
                      className="w-full px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#81D8D0] focus:border-transparent text-sm text-white bg-[#0B0F17] placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                      Message <span className="text-[#81D8D0]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      spellCheck="false"
                      placeholder="Hello Nivetha, I would like to discuss..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#81D8D0] focus:border-transparent text-sm text-white bg-[#0B0F17] placeholder-gray-500 resize-y"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl text-sm font-bold text-[#0B0F17] bg-[#81D8D0] hover:bg-[#57beb4] transition-all duration-200 shadow-lg shadow-[#81D8D0]/20 hover:shadow-xl cursor-pointer disabled:opacity-60"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-[#0B0F17] border-t-transparent rounded-full animate-spin" />
                        Transmitting Message...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
