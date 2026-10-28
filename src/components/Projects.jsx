import React, { useState } from 'react'
import {
  ExternalLink,
  ArrowRight,
  Zap,
  Layers,
  Sparkles
} from 'lucide-react'
import { projectsData } from '../data/portfolioData'

export default function Projects({ onSelectProject }) {
  const [selectedFilter, setSelectedFilter] = useState('All')

  const filterTabs = ['All', 'Admin Panels', 'Full Stack']

  const filteredProjects =
    selectedFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedFilter)

  return (
    <section id="projects" className="tunis-section relative">
      {/* Tunis Section Title with Watermark */}
      <div className="tunis-section-title-wrap">
        <h2 className="tunis-watermark">WORKS</h2>
        <h3 className="tunis-title-foreground">
          MY <span>PORTFOLIO</span>
        </h3>
      </div>

      <div className="tunis-container">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedFilter === tab
                  ? 'bg-[var(--accent-color)] text-[#0B0F17] shadow-lg shadow-[var(--accent-glow)]'
                  : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:border-[var(--accent-color)] hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid: Tunis Symmetrical 2x2 Layout */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="project-card-item group"
            >
              <div>
                {/* Top Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-[var(--accent-color)] border border-[var(--accent-color)]/30 bg-[var(--accent-color)]/10">
                    {project.company || 'OCEAN SOFTWARES'}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{project.badge || 'Live System'}</span>
                  </div>
                </div>

                {/* Visual Preview Header Image Container */}
                <div className="project-card-img-wrapper relative overflow-hidden bg-white/95 rounded-xl border border-white/10 mb-4 p-1">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card-img w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 rounded-lg"
                    loading="lazy"
                  />
                </div>

                {/* Title & Description */}
                <h4 className="text-xl font-black text-white tracking-tight group-hover:text-[var(--accent-color)] transition-colors mb-2">
                  {project.shortTitle || project.title}
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Subtag Pill with Lightning Bolt */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#162032] border border-white/10 text-xs font-bold text-gray-200 mb-4">
                  <Zap className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                  <span>{project.subTag || project.shortTitle}</span>
                </div>
              </div>

              <div>
                {/* Tech Tags with Bullets */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#0e1524] text-gray-300 border border-white/5 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom Row */}
                <div className="flex items-center justify-between pt-3.5 border-t border-white/10">
                  <span className="text-xs font-black uppercase tracking-wider text-[var(--accent-color)] group-hover:brightness-110 transition-all">
                    View Details & Panels
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#162032] border border-white/10 text-gray-300 flex items-center justify-center group-hover:bg-[var(--accent-color)] group-hover:text-[#0B0F17] group-hover:border-[var(--accent-color)] group-hover:translate-x-0.5 transition-all shadow-sm">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
