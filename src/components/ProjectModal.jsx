import React, { useEffect } from 'react'
import { X, ExternalLink, CheckCircle2, CircleDot, Briefcase, Code2, Globe } from 'lucide-react'

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

  const isHttpLink = project.liveUrl && project.liveUrl.startsWith('http')

  const handleLinkClick = (e) => {
    if (!isHttpLink && project.liveUrl === '#contact') {
      e.preventDefault()
      onClose()
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
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
        {/* Modal Header: Clean, with Title and Project Link */}
        <div className="tunis-modal-header">
          <div className="min-w-0 pr-4">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
              {project.shortTitle || project.title}
            </h3>

            {/* Direct Project Link */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target={isHttpLink ? '_blank' : '_self'}
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--accent-color)] hover:underline mt-2 group cursor-pointer max-w-full"
                title={isHttpLink ? `Visit ${project.liveUrl}` : "Inquire / Contact"}
              >
                <Globe className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">
                  {isHttpLink ? project.liveUrl.replace(/^https?:\/\//, '') : 'Live Platform (Contact / Demo)'}
                </span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#1A2333] border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center cursor-pointer flex-shrink-0 shadow-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body: Generously Spaced & Properly Aligned */}
        <div className="tunis-modal-body space-y-7">
          {/* Screenshot Presentation Banner */}
          {project.image && (
            <div className="w-full rounded-2xl overflow-hidden bg-white/95 border border-white/10 p-2 shadow-xl">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target={isHttpLink ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="block relative cursor-pointer group"
                  title="Click to open project link"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto max-h-[300px] sm:max-h-[360px] object-cover object-top rounded-xl group-hover:opacity-95 transition-opacity"
                  />
                  <div className="absolute top-3 right-3 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-white text-xs font-bold flex items-center gap-2 border border-white/15 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <span>Open Live Link</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                  </div>
                </a>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto max-h-[300px] sm:max-h-[360px] object-cover object-top rounded-xl"
                />
              )}
            </div>
          )}

          {/* Section: Project Architecture & Impact (Generous Spacing) */}
          <div className="space-y-3 pt-1">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-4 bg-[var(--accent-color)] rounded-full" />
              <h4 className="text-xs font-black uppercase tracking-widest text-white">
                PROJECT ARCHITECTURE & IMPACT
              </h4>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed pl-4 border-l-2 border-white/10">
              {project.fullDescription || project.shortDescription}
            </p>
          </div>

          {/* Bento Box: Engineering Roles & Technology Stack (Generous Padding & Gaps) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-7 rounded-2xl bg-[#0B0F17] border border-white/10 shadow-lg">
            {/* Left: Engineering Roles */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-1 border-b border-white/5">
                <Briefcase className="w-4 h-4 text-[var(--accent-color)]" />
                <h5 className="text-xs font-extrabold uppercase tracking-wider text-gray-400">
                  ENGINEERING ROLES
                </h5>
              </div>
              <div className="space-y-3">
                {(project.roles || [
                  'Frontend Development',
                  'Backend API Integration',
                  'Database Architecture',
                  'RESTful CRUD Operations'
                ]).map((role, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-gray-200 leading-snug">
                    <CircleDot className="w-4 h-4 text-[var(--accent-color)] flex-shrink-0 mt-0.5" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Technology Stack */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-1 border-b border-white/5">
                <Code2 className="w-4 h-4 text-[var(--accent-color)]" />
                <h5 className="text-xs font-extrabold uppercase tracking-wider text-gray-400">
                  TECHNOLOGY STACK
                </h5>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-[#162032] text-gray-200 border border-white/10 flex items-center gap-2 shadow-xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Section: Key Deliverables & Modules (Spacious & Clean) */}
          {project.features && project.features.length > 0 && (
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0B0F17] border border-white/10 space-y-4 shadow-lg">
              <div className="flex items-center gap-2.5 pb-1 border-b border-white/5">
                <span className="w-1.5 h-4 bg-[var(--accent-color)] rounded-full" />
                <h4 className="text-xs font-black uppercase tracking-widest text-white">
                  KEY DELIVERABLES & MODULES
                </h4>
              </div>
              <div className="space-y-3.5 pl-2">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 text-sm text-gray-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-color)] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Compact Bottom Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-5 pb-2 border-t border-white/10 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-400">Domain:</span>
              <span className="px-3 py-1 rounded-full bg-[#162032] text-[var(--accent-color)] border border-white/10 font-bold">
                {project.category}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="font-semibold">Project at:</span>
              <span className="text-white font-bold">{project.company || 'Ocean Softwares'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
