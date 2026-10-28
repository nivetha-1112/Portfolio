import React, { useState } from 'react'
import {
  FileCode,
  Layers,
  Code2,
  Database,
  Palette,
  Boxes,
  Cpu,
  Server,
  Network,
  TableProperties,
  GitBranch,
  Send,
  Zap,
  Sparkles
} from 'lucide-react'
import { skillsData } from '../data/portfolioData'

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const iconMap = {
    FileCode,
    Layers,
    Code2,
    Database,
    Palette,
    Boxes,
    Cpu,
    Server,
    Network,
    TableProperties,
    GitBranch,
    Send,
    Zap
  }

  const categories = ['All', ...skillsData.map((c) => c.category)]

  const filteredSkills =
    selectedCategory === 'All'
      ? skillsData.flatMap((c) => c.skills.map((s) => ({ ...s, category: c.category })))
      : skillsData
          .find((c) => c.category === selectedCategory)
          ?.skills.map((s) => ({ ...s, category: selectedCategory })) || []

  return (
    <section id="skills" className="tunis-section relative">
      {/* Tunis Section Title */}
      <div className="tunis-section-title-wrap">
        <h2 className="tunis-watermark">STACK</h2>
        <h3 className="tunis-title-foreground">
          MY <span>SKILLS</span>
        </h3>
      </div>

      <div className="tunis-container">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[var(--accent-color)] text-[#0B0F17] shadow-lg shadow-[var(--accent-glow)]'
                  : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:border-[var(--accent-color)] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredSkills.map((skill, idx) => {
            const IconComp = iconMap[skill.icon] || Code2
            return (
              <div
                key={idx}
                className="tunis-card p-5 flex flex-col justify-between group hover:border-[var(--border-highlight)] hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-color)] group-hover:bg-[var(--accent-soft)] transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[var(--bg-tertiary)] text-[var(--text-muted)] border border-[var(--border-color)]">
                      {skill.category}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors mb-2">
                    {skill.name}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border-color)] mt-3">
                  {skill.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-[var(--bg-tertiary)] text-[var(--text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
