import React, { useEffect } from 'react'
import { X, ExternalLink, ArrowRight, CheckCircle2, CircleDot } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.classList.add('modal-open')
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('modal-open')
    }
  }, [onClose])

  if (!project) return null

  const isLive = project.liveUrl && project.liveUrl !== '#contact'

  const handleContactClick = () => {
    onClose()
    const contactEl = document.getElementById('contact')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div
      className="tunis-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="tunis-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        spellCheck="false"
      >
        {/* Modal Header matching Sathesh Immanuel format */}
        <div className="tunis-modal-header">
          <div className="min-w-0 pr-3">
            <span className="inline-block px-3 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-[var(--accent-color)] border border-[var(--accent-color)]/30 bg-[var(--accent-color)]/10">
              {project.company || 'OCEAN SOFTWARES'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1 leading-tight">
              {project.shortTitle || project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#1A2333] border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center cursor-pointer flex-shrink-0 shadow-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="tunis-modal-body">
          {/* Screenshot Image Banner */}
          {project.image && (
            <div className="w-full rounded-2xl overflow-hidden bg-white/95 border border-white/10 p-1.5 shadow-lg">
              {isLive ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group relative cursor-pointer"
                  title="Click to visit live website"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto max-h-[290px] object-cover object-top rounded-xl group-hover:opacity-95 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                    <span className="px-5 py-2.5 rounded-full bg-[var(--accent-color)] text-[#0B0F17] font-bold text-xs shadow-xl flex items-center gap-2">
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto max-h-[290px] object-cover object-top rounded-xl"
                />
              )}
            </div>
          )}

          {/* Section: Project Architecture & Impact */}
          <div className="mt-6 space-y-2">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              PROJECT ARCHITECTURE & IMPACT
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              {project.fullDescription || project.shortDescription}
            </p>
          </div>

          {/* Bento Box: Engineering Roles & Technology Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-2xl bg-[#0B0F17] border border-white/10 p-5 mt-6">
            {/* Left: Engineering Roles */}
            <div>
              <h5 className="text-xs font-extrabold uppercase tracking-wider text-gray-400 mb-3">
                ENGINEERING ROLES
              </h5>
              <div className="space-y-2">
                {(project.roles || project.features).map((role, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-200 leading-snug">
                    <CircleDot className="w-4 h-4 text-[var(--accent-color)] flex-shrink-0 mt-0.5" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Technology Stack */}
            <div>
              <h5 className="text-xs font-extrabold uppercase tracking-wider text-gray-400 mb-3">
                TECHNOLOGY STACK
              </h5>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-[#162032] text-gray-200 border border-white/5 flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Section: Deployed Panels & Live Demonstration */}
          <div className="mt-7 pt-5 border-t border-white/10">
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-3">
              DEPLOYED PANELS & LIVE DEMONSTRATION
            </h4>

            {isLive ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-black text-sm uppercase tracking-wider bg-[var(--accent-color)] text-[#0B0F17] hover:brightness-110 shadow-lg transition-all hover:scale-[1.01]"
              >
                <span>{project.shortTitle || project.title}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <button
                onClick={handleContactClick}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-black text-sm uppercase tracking-wider bg-[var(--accent-color)] text-[#0B0F17] hover:brightness-110 shadow-lg transition-all hover:scale-[1.01] cursor-pointer"
              >
                <span>{project.shortTitle || project.title} — Request Live Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
