import React from 'react'
import {
  MapPin,
  ArrowRight,
  Mail,
  Sparkles,
  CheckCircle2,
  Code2,
  Terminal,
  Layers,
  Database
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { personalInfo } from '../data/portfolioData'
import profileImg from '../assets/profile.jpeg'

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#080B11]"
    >
      {/* Radiant ambient lighting for modern luxury tech feel */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-[#81D8D0]/20 via-[#57beb4]/15 to-transparent blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#81D8D0]/10 blur-[100px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute bottom-10 left-5 w-80 h-80 bg-[#57beb4]/10 blur-[100px] pointer-events-none -z-10 rounded-full" />

      {/* Subtle modern grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: High-Impact Typography & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pills */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#111928] border border-[#81D8D0]/40 text-[#81D8D0] shadow-[0_0_15px_rgba(129,216,208,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#81D8D0] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#81D8D0]"></span>
                </span>
                {personalInfo.status}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#111928] text-gray-300 border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-[#81D8D0]" />
                {personalInfo.location}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <p className="text-lg md:text-xl font-medium text-gray-300 tracking-wide">
                Hi, I'm{' '}
                <span className="font-bold text-white border-b-2 border-[#81D8D0] pb-0.5">
                  S. Nivetha
                </span>
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                MERN Stack Developer
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#81D8D0] to-[#57beb4] drop-shadow-[0_2px_20px_rgba(129,216,208,0.25)]">
                  & Full Stack Developer
                </span>
              </h1>
            </div>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              "{personalInfo.shortBio}"
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-bold text-[#080B11] bg-[#81D8D0] hover:bg-[#57beb4] transition-all duration-300 shadow-[0_0_25px_rgba(129,216,208,0.35)] hover:shadow-[0_0_35px_rgba(129,216,208,0.5)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-[#111928] hover:bg-[#162238] border border-white/15 hover:border-[#81D8D0]/60 transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#81D8D0]" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links & Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-gray-400">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl bg-[#111928] border border-white/10 hover:border-[#81D8D0] hover:text-[#81D8D0] hover:bg-[#162238] transition-all shadow-sm hover:scale-105"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl bg-[#111928] border border-white/10 hover:border-[#81D8D0] hover:text-[#81D8D0] hover:bg-[#162238] transition-all shadow-sm hover:scale-105"
                >
                  <LinkedinIcon className="w-5 h-5 text-[#81D8D0]" />
                </a>
              </div>
              <div className="h-5 w-px bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-4 text-xs font-semibold text-gray-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#81D8D0]" />
                  Clean UI
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#81D8D0]" />
                  Reusable Components
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#81D8D0]" />
                  Reliable Backend
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Section Card Image with profile.jpeg completely uncut & unobstructed */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Elegant Outer Glow Container - Decreased Size */}
            <div className="relative w-full max-w-[260px] sm:max-w-[290px] md:max-w-[310px]">
              {/* Vibrant ambient lighting halo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#81D8D0]/40 via-[#57beb4]/20 to-[#81D8D0]/40 rounded-[28px] blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>

              {/* Main Card Frame */}
              <div className="relative rounded-[26px] bg-gradient-to-b from-[#182338] to-[#0E1524] p-3 border border-[#81D8D0]/40 shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
                {/* Clean Photo Container - 100% uncut, NO overlays covering face/suit */}
                <div className="relative w-full overflow-hidden rounded-[20px] bg-[#080B11] border border-white/10 shadow-inner">
                  <img
                    src={profileImg}
                    alt="S. Nivetha — MERN Stack Developer"
                    className="w-full h-auto object-contain block transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>

                {/* Info Bar BELOW the photo (zero overlap on the image) */}
                <div className="mt-3 px-3 py-2.5 rounded-xl bg-[#080B11]/90 border border-white/10 flex items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-wide">
                      {personalInfo.name}
                    </h3>
                    <p className="text-[11px] font-semibold text-[#81D8D0]">
                      MERN Stack Developer
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#162238] border border-[#81D8D0]/30 text-[11px] font-bold text-[#81D8D0]">
                    <Sparkles className="w-3 h-3 text-[#81D8D0]" />
                    <span>1 Year Exp</span>
                  </div>
                </div>

                {/* Tech chips below the photo */}
                <div className="mt-2 flex items-center justify-center gap-1.5 flex-wrap">
                  {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-[#111928] text-gray-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
