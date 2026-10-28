import React, { useState, useEffect } from 'react'
import {
  Home,
  User,
  Cpu,
  Briefcase,
  FolderGit2,
  GraduationCap,
  Mail,
  Sun,
  Moon,
  Palette,
  Check
} from 'lucide-react'

// Curated vibrant color themes (Cyber Cyan default, Emerald, Indigo, Sky Blue, Rose - NEVER Sathesh's #ffb400)
export const COLOR_PALETTES = [
  {
    id: 'cyber-cyan',
    name: 'Cyber Cyan',
    accent: '#00F5D4',
    rgb: '0, 245, 212',
    gradient: 'linear-gradient(135deg, #00F5D4 0%, #06D6A0 100%)',
    soft: 'rgba(0, 245, 212, 0.12)',
    glow: 'rgba(0, 245, 212, 0.35)',
    border: 'rgba(0, 245, 212, 0.45)',
    btnText: '#0B0F17'
  },
  {
    id: 'tiffany-teal',
    name: 'Tiffany Teal',
    accent: '#81D8D0',
    rgb: '129, 216, 208',
    gradient: 'linear-gradient(135deg, #81D8D0 0%, #57beb4 100%)',
    soft: 'rgba(129, 216, 208, 0.14)',
    glow: 'rgba(129, 216, 208, 0.35)',
    border: 'rgba(129, 216, 208, 0.45)',
    btnText: '#0B0F17'
  },
  {
    id: 'emerald-mint',
    name: 'Emerald Mint',
    accent: '#10B981',
    rgb: '16, 185, 129',
    gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    soft: 'rgba(16, 185, 129, 0.14)',
    glow: 'rgba(16, 185, 129, 0.35)',
    border: 'rgba(16, 185, 129, 0.45)',
    btnText: '#0B0F17'
  },
  {
    id: 'electric-indigo',
    name: 'Electric Indigo',
    accent: '#8B5CF6',
    rgb: '139, 92, 246',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
    soft: 'rgba(139, 92, 246, 0.14)',
    glow: 'rgba(139, 92, 246, 0.35)',
    border: 'rgba(139, 92, 246, 0.45)',
    btnText: '#FFFFFF'
  },
  {
    id: 'sky-blue',
    name: 'Sky Blue',
    accent: '#0EA5E9',
    rgb: '14, 165, 233',
    gradient: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
    soft: 'rgba(14, 165, 233, 0.14)',
    glow: 'rgba(14, 165, 233, 0.35)',
    border: 'rgba(14, 165, 233, 0.45)',
    btnText: '#0B0F17'
  },
  {
    id: 'rose-coral',
    name: 'Rose Coral',
    accent: '#F43F5E',
    rgb: '244, 63, 94',
    gradient: 'linear-gradient(135deg, #F43F5E 0%, #E11D48 100%)',
    soft: 'rgba(244, 63, 94, 0.14)',
    glow: 'rgba(244, 63, 94, 0.35)',
    border: 'rgba(244, 63, 94, 0.45)',
    btnText: '#FFFFFF'
  }
]

export default function TunisNav() {
  const [activeSection, setActiveSection] = useState('hero')
  const [hoveredNav, setHoveredNav] = useState(null)
  const [theme, setTheme] = useState('dark')
  const [selectedPalette, setSelectedPalette] = useState(COLOR_PALETTES[0])
  const [isPaletteOpen, setIsPaletteOpen] = useState(false)

  const navItems = [
    { id: 'hero', label: 'HOME', icon: Home },
    { id: 'about', label: 'ABOUT', icon: User },
    { id: 'skills', label: 'STACK', icon: Cpu },
    { id: 'services', label: 'SERVICES', icon: Briefcase },
    { id: 'projects', label: 'PORTFOLIO', icon: FolderGit2 },
    { id: 'experience', label: 'EXPERIENCE', icon: GraduationCap },
    { id: 'contact', label: 'CONTACT', icon: Mail }
  ]

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['hero', 'about', 'skills', 'services', 'projects', 'experience', 'contact']
      const scrollPos = window.scrollY + 220

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Apply theme change
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  // Apply color palette change
  const applyPalette = (pal) => {
    setSelectedPalette(pal)
    setIsPaletteOpen(false)
    const root = document.documentElement
    root.style.setProperty('--accent-color', pal.accent)
    root.style.setProperty('--accent-color-rgb', pal.rgb)
    root.style.setProperty('--accent-gradient', pal.gradient)
    root.style.setProperty('--accent-soft', pal.soft)
    root.style.setProperty('--accent-glow', pal.glow)
    root.style.setProperty('--border-highlight', pal.border)
    root.style.setProperty('--btn-text-color', pal.btnText)
  }

  const scrollTo = (id) => {
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Top Controls: Dark/Light Mode + Color Palette Switcher */}
      <div className="tunis-top-controls">
        {/* Palette Switcher Button */}
        <div className="relative">
          <button
            onClick={() => setIsPaletteOpen((prev) => !prev)}
            className="tunis-control-btn"
            title="Choose Color Accent"
            aria-label="Choose Color Accent"
          >
            <Palette className="w-5 h-5" style={{ color: 'var(--accent-color)' }} />
          </button>

          {isPaletteOpen && (
            <div className="tunis-palette-dropdown">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-2 pb-1 border-b border-white/10">
                Choose Color
              </span>
              {COLOR_PALETTES.map((pal) => (
                <div
                  key={pal.id}
                  onClick={() => applyPalette(pal)}
                  className={`palette-swatch-item ${selectedPalette.id === pal.id ? 'active' : ''}`}
                >
                  <span
                    className="palette-swatch-color"
                    style={{ backgroundColor: pal.accent, color: pal.accent }}
                  />
                  <span>{pal.name}</span>
                  {selectedPalette.id === pal.id && (
                    <Check className="w-3.5 h-3.5 ml-auto text-emerald-400" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Theme Mode Toggle Button */}
        <button
          onClick={toggleTheme}
          className="tunis-control-btn"
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          aria-label="Toggle Theme Mode"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5" style={{ color: 'var(--accent-color)' }} />
          ) : (
            <Moon className="w-5 h-5" style={{ color: 'var(--accent-color)' }} />
          )}
        </button>
      </div>

      {/* Desktop Floating Right Icon Navigation */}
      <nav className="tunis-desktop-nav" aria-label="Desktop Tunis Navigation">
        <div className="flex flex-col gap-4 items-end">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            const isHovered = hoveredNav === item.id

            return (
              <div
                key={item.id}
                className="relative flex items-center"
                onMouseEnter={() => setHoveredNav(item.id)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                {/* Slide-out tooltip label on hover */}
                {isHovered && (
                  <div className="tunis-nav-tooltip animate-fadeIn">
                    <div className="tunis-nav-tooltip-inner">
                      {item.label}
                    </div>
                  </div>
                )}

                {/* Circular Icon Pill Button */}
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`tunis-nav-pill-btn ${isActive ? 'active' : ''}`}
                  aria-label={item.label}
                >
                  <Icon className="w-5 h-5" />
                </button>
              </div>
            )
          })}
        </div>
      </nav>

      {/* Mobile Floating Bottom Dock Navigation */}
      <nav className="tunis-mobile-nav" aria-label="Mobile Bottom Navigation">
        <div className="max-w-md mx-auto px-3">
          <div className="bg-[#121927]/90 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2.5 flex items-center justify-between shadow-2xl">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id

              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    isActive
                      ? 'bg-[var(--accent-color)] text-[#0B0F17] shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  aria-label={item.label}
                >
                  <Icon className="w-4 h-4" />
                </button>
              )
            })}
          </div>
        </div>
      </nav>
    </>
  )
}
