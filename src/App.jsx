import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ResumeModal from './components/ResumeModal'
import Toast from './components/Toast'

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' })

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type })
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }))
    }, 3500)
  }

  const closeToast = () => {
    setToast((prev) => ({ ...prev, show: false }))
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F17] text-[#F3F4F6] antialiased selection:bg-[#81D8D0] selection:text-[#0B0F17]">
      {/* Sticky Top Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact
          onShowToast={showToast}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Preview & Printable Modal */}
      {isResumeOpen && (
        <ResumeModal
          onClose={() => setIsResumeOpen(false)}
          onShowToast={showToast}
        />
      )}

      {/* Toast Notification Container */}
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={closeToast}
        />
      )}
    </div>
  )
}
