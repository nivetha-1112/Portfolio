import React, { useEffect } from 'react'
import { X, ExternalLink, CheckCircle2, Layers } from 'lucide-react'
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

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-3 sm:p-6 flex items-start sm:items-center justify-center animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[85vh] my-auto bg-[#111827] text-white rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        spellCheck="false"
      >
        {/* Pinned Top Header */}
        <div className="flex-shrink-0 px-5 sm:px-7 py-4 bg-[#0E1524] border-b border-white/10 flex items-start justify-between gap-4">
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

          {/* Close Button Pinned to Header */}
          <button
            onClick={onClose}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1A2333] border border-white/15 text-gray-300 hover:text-[#0B0F17] hover:bg-[var(--accent-color)] hover:border-[var(--accent-color)] transition-all flex items-center justify-center cursor-pointer flex-shrink-0 shadow-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="flex-1 min-h-0 overflow-y-auto px-5 sm:px-7 py-5 space-y-5">
          {/* Project Image Banner */}
          {project.image && (
            <div className="w-full max-h-[220px] sm:max-h-[260px] rounded-xl overflow-hidden border border-white/10 bg-[#0B0F17] shadow-lg flex-shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top block"
              />
            </div>
          )}

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
        <div className="flex-shrink-0 px-5 sm:px-7 py-3.5 bg-[#0E1524] border-t border-white/10 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && project.liveUrl !== '#contact' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs font-bold bg-[var(--accent-color)] text-[#0B0F17] hover:brightness-110 transition-all shadow-md"
              >
                <span>Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs font-semibold bg-[#162032] text-gray-200 hover:text-white border border-white/10 hover:border-[var(--accent-color)] transition-all"
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
