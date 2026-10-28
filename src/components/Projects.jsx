import React, { useState } from 'react'
import {
  ExternalLink,
  ArrowRight,
  Sparkles,
  Layers,
  CheckCircle2
} from 'lucide-react'
import { GithubIcon } from './Icons'
import { projectsData } from '../data/portfolioData'

export default function Projects({ onSelectProject }) {
  const [selectedFilter, setSelectedFilter] = useState('All')

  const filterTabs = ['All', 'Admin Panels', 'Full Stack']

  const filteredProjects =
    selectedFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedFilter)

  // Gradient themes for project preview banners
  const getBannerGradient = (index) => {
    const gradients = [
      'from-emerald-950/80 via-slate-900 to-teal-950/90',
      'from-indigo-950/80 via-slate-900 to-blue-950/90',
      'from-cyan-950/80 via-slate-900 to-sky-950/90',
      'from-teal-950/80 via-slate-900 to-emerald-950/90'
    ]
    return gradients[index % gradients.length]
  }

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

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="project-card-item group"
            >
              <div>
                {/* Visual Preview Header Image */}
                <div className="project-card-img-wrapper relative overflow-hidden bg-[var(--bg-secondary)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card-img w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                    <span className="project-category-tag shadow-md">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-emerald-400 border border-emerald-500/30 flex items-center gap-1 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {project.badge}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <h4 className="project-card-title group-hover:text-[var(--accent-color)] transition-colors">
                  {project.title}
                </h4>
                <p className="project-card-desc">
                  {project.shortDescription}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom Row */}
                <div className="flex items-center justify-between pt-3 border-t border-[var(--border-color)]">
                  <span className="text-xs font-bold text-[var(--accent-color)] tracking-wide uppercase flex items-center gap-1">
                    VIEW DETAILS
                  </span>
                  <div className="project-arrow-btn">
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
