import React, { useEffect } from 'react'
import { X, ExternalLink, CheckCircle2, Globe, ArrowRight } from 'lucide-react'
import { GithubIcon } from './Icons'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = prevOverflow
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
    <div className="tunis-modal-backdrop animate-in fade-in duration-200" onClick={onClose}>
      <div
        className="tunis-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        spellCheck="false"
      >
        {/* Pinned Top Header */}
        <div className="tunis-modal-header">
          <div className="min-w-0 pr-2">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-[var(--accent-color)] text-[#0B0F17]">
                {project.category}
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {project.badge}
              </span>
            </div>
            <h3 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Quick Header Live Link */}
            {isLive && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[var(--accent-color)] text-[#0B0F17] hover:brightness-110 transition-all shadow-sm"
                title="Visit Live Website"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {/* Close Button Pinned to Header */}
            <button
              onClick={onClose}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1A2333] border border-white/15 text-gray-300 hover:text-[#0B0F17] hover:bg-[var(--accent-color)] hover:border-[var(--accent-color)] transition-all flex items-center justify-center cursor-pointer shadow-md"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Body */}
        <div className="tunis-modal-body space-y-5">
          {/* Clickable Project Image Banner -> Goes to Live Link */}
          {project.image && (
            isLive ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tunis-modal-img-wrap group relative block cursor-pointer"
                title={`Click to open live site: ${project.liveUrl}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="tunis-modal-img group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
                  <span className="px-5 py-2.5 rounded-full bg-[var(--accent-color)] text-[#0B0F17] font-bold text-xs shadow-xl flex items-center gap-2">
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </a>
            ) : (
              <div
                onClick={handleContactClick}
                className="tunis-modal-img-wrap group relative block cursor-pointer"
                title="Inquire / Request Demo"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="tunis-modal-img group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
                  <span className="px-5 py-2.5 rounded-full bg-[var(--accent-color)] text-[#0B0F17] font-bold text-xs shadow-xl flex items-center gap-2">
                    <span>Inquire for Live Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            )
          )}

          {/* Project Direct Link Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-[#0B0F17] border border-white/10 gap-3">
            <div className="flex items-center gap-2 text-xs min-w-0">
              <Globe className="w-4 h-4 text-[var(--accent-color)] flex-shrink-0" />
              <span className="text-gray-400 font-semibold flex-shrink-0">Project Link:</span>
              {isLive ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent-color)] font-mono hover:underline truncate font-medium"
                >
                  {project.liveUrl}
                </a>
              ) : (
                <span className="text-gray-400 font-mono text-[11px]">
                  Active Office Development (Inquire for demo)
                </span>
              )}
            </div>

            {isLive ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-[var(--accent-color)] text-[#0B0F17] hover:brightness-110 transition-all shadow-sm"
              >
                <span>Open Project Link</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <button
                onClick={handleContactClick}
                className="flex-shrink-0 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-[var(--accent-color)] text-[#0B0F17] hover:brightness-110 transition-all shadow-sm cursor-pointer"
              >
                <span>Request Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* System Overview */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-bold text-[var(--accent-color)] uppercase tracking-wider">
              System Overview & Architecture
            </h4>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Bento Box: Key Features + Tech Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-[#0B0F17] border border-white/10">
            <div>
              <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                Key Engineered Features
              </h5>
              <div className="space-y-2">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-color)] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                Technologies Used
              </h5>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#162032] text-[var(--accent-color)] border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pinned Modal Actions Footer */}
        <div className="tunis-modal-footer">
          <div className="flex flex-wrap items-center gap-3">
            {isLive ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[var(--accent-color)] text-[#0B0F17] hover:brightness-110 transition-all shadow-md hover:shadow-[0_0_15px_rgba(0,245,212,0.4)]"
              >
                <span>Visit Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <button
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[var(--accent-color)] text-[#0B0F17] hover:brightness-110 transition-all shadow-md cursor-pointer"
              >
                <span>Contact for Live Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold bg-[#162032] text-gray-200 hover:text-white border border-white/10 hover:border-[var(--accent-color)] transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full text-xs font-semibold text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
