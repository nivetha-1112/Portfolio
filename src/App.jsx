import React, { useState } from 'react'
import './App.css'
import TunisNav from './components/TunisNav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ResumeModal from './components/ResumeModal'
import ProjectModal from './components/ProjectModal'
import Toast from './components/Toast'

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
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
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased relative selection:bg-[var(--accent-color)] selection:text-[#0B0F17] overflow-x-hidden w-full max-w-full">
      {/* Tunis Floating Desktop Right Navigation & Mobile Dock + Theme & Color Switcher */}
      <TunisNav />

      {/* Main Sections in Tunis Format */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* About Section */}
        <About onOpenResume={() => setIsResumeOpen(true)} />

        {/* Skills Section */}
        <Skills />

        {/* Services Section */}
        <Services />

        {/* Projects / Portfolio Section */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Experience & Education Section */}
        <Experience />

        {/* Contact Section */}
        <Contact
          onShowToast={showToast}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      {isResumeOpen && (
        <ResumeModal
          onClose={() => setIsResumeOpen(false)}
          onShowToast={showToast}
        />
      )}

      {/* Interactive Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
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
