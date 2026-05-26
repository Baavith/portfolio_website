import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg from './assets/profile.jpg';
import { 
  GraduationCap, 
  Briefcase, 
  Code, 
  FileText, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Menu, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Database,
  Layers,
  Settings,
  Terminal,
  Activity,
  Heart,
  Sparkles,
  Palette
} from 'lucide-react';

function GithubIcon({ size = 24, className = "" }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  );
}

function LinkedinIcon({ size = 24, className = "" }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

const SECTIONS = [
  { id: 'home', title: 'Home' },
  { id: 'education', title: 'Education' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'experience', title: 'Experience' },
  { id: 'certifications', title: 'Certifications' },
  { id: 'contact', title: 'Contact' }
];

const THEMES = {
  'sunset-dark': {
    name: 'Sunset Dark',
    bg: 'bg-[#060814] text-gray-100',
    textMain: 'text-white',
    textMuted: 'text-gray-400',
    headerBg: 'bg-[#060814]/70 border-white/10',
    navButtonActive: 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20',
    navButtonInactive: 'text-gray-300 hover:text-orange-400 hover:bg-white/5',
    card: 'bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-orange-500/30 shadow-2xl hover:shadow-orange-500/5',
    pill: 'bg-white/[0.04] border border-white/10 text-gray-200 hover:border-orange-500/30 hover:bg-white/[0.08]',
    techBadge: 'bg-orange-500/10 text-orange-400 border border-orange-500/20',
    timelineBullet: 'bg-orange-500 text-white border-white/10',
    accentText: 'bg-gradient-to-r from-orange-500 via-amber-400 to-orange-400 bg-clip-text text-transparent',
    accentBtn: 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:opacity-90 shadow-lg shadow-orange-500/20',
    accentBtnMuted: 'bg-white/5 text-orange-400 border border-orange-500/20 hover:bg-white/10',
    iconBg: 'bg-white/5 text-orange-400 border border-white/10 shadow-inner',
    footerBg: 'bg-[#030409]/90 border-white/10',
    blob1: 'bg-orange-500/10',
    blob2: 'bg-amber-500/10',
    badgeText: 'text-orange-400 bg-orange-500/10 border border-orange-500/20',
    divider: 'border-white/10',
    accentSvg: 'text-orange-400',
    timelineBorder: 'border-white/10',
    menuBtn: 'text-gray-300 hover:text-orange-400',
    mobileMenu: 'bg-[#060814]/95 border-white/10 backdrop-blur-lg',
    mobileMenuActive: 'bg-gradient-to-r from-orange-500 to-amber-500 text-white',
    mobileMenuInactive: 'text-gray-300 hover:bg-white/5 hover:text-orange-400',
    arrowBtn: 'bg-white/5 border border-white/10 text-orange-400 hover:bg-orange-500 hover:text-white',
    selectorDot: '#ff6b00',
    glowColor: 'rgba(249, 115, 22, 0.4)'
  },
  'cyber-neon': {
    name: 'Cyber Neon',
    bg: 'bg-[#03050c] text-slate-100',
    textMain: 'text-slate-100',
    textMuted: 'text-slate-400',
    headerBg: 'bg-[#03050c]/70 border-cyan-500/10',
    navButtonActive: 'bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white shadow-lg shadow-cyan-500/20',
    navButtonInactive: 'text-slate-300 hover:text-cyan-400 hover:bg-white/5',
    card: 'bg-white/[0.02] backdrop-blur-md border border-cyan-500/10 hover:border-cyan-500/30 shadow-2xl hover:shadow-cyan-500/5',
    pill: 'bg-white/[0.04] border border-cyan-500/10 text-slate-200 hover:border-cyan-500/30 hover:bg-white/[0.08]',
    techBadge: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
    timelineBullet: 'bg-cyan-500 text-black border-cyan-500/10',
    accentText: 'bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent',
    accentBtn: 'bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white hover:opacity-90 shadow-lg shadow-cyan-500/20',
    accentBtnMuted: 'bg-white/5 text-cyan-400 border border-cyan-500/20 hover:bg-white/10',
    iconBg: 'bg-white/5 text-cyan-400 border border-cyan-500/10 shadow-inner',
    footerBg: 'bg-[#010207]/90 border-cyan-500/10',
    blob1: 'bg-cyan-500/10',
    blob2: 'bg-fuchsia-500/10',
    badgeText: 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20',
    divider: 'border-cyan-500/10',
    accentSvg: 'text-cyan-400',
    timelineBorder: 'border-cyan-500/10',
    menuBtn: 'text-slate-300 hover:text-cyan-400',
    mobileMenu: 'bg-[#03050c]/95 border-cyan-500/10 backdrop-blur-lg',
    mobileMenuActive: 'bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white',
    mobileMenuInactive: 'text-slate-300 hover:bg-white/5 hover:text-cyan-400',
    arrowBtn: 'bg-white/5 border border-cyan-500/10 text-cyan-400 hover:bg-cyan-500 hover:text-white',
    selectorDot: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.4)'
  },
  'nordic-forest': {
    name: 'Nordic Forest',
    bg: 'bg-[#050a0a] text-slate-200',
    textMain: 'text-[#f1f5f9]',
    textMuted: 'text-slate-400',
    headerBg: 'bg-[#050a0a]/70 border-[#112422]',
    navButtonActive: 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-600/20',
    navButtonInactive: 'text-slate-300 hover:text-emerald-400 hover:bg-white/5',
    card: 'bg-white/[0.02] backdrop-blur-md border border-[#17312e] hover:border-emerald-600/35 shadow-2xl hover:shadow-emerald-600/5',
    pill: 'bg-white/[0.04] border border-[#17312e] text-slate-200 hover:border-emerald-600/35 hover:bg-white/[0.08]',
    techBadge: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    timelineBullet: 'bg-emerald-600 text-white border-[#17312e]',
    accentText: 'bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent',
    accentBtn: 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white hover:opacity-90 shadow-lg shadow-emerald-600/20',
    accentBtnMuted: 'bg-white/5 text-emerald-400 border border-emerald-600/20 hover:bg-white/10',
    iconBg: 'bg-white/5 text-emerald-400 border border-[#17312e] shadow-inner',
    footerBg: 'bg-[#020505]/90 border-[#112422]',
    blob1: 'bg-emerald-600/10',
    blob2: 'bg-sky-500/10',
    badgeText: 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20',
    divider: 'border-[#112422]',
    accentSvg: 'text-emerald-400',
    timelineBorder: 'border-[#17312e]',
    menuBtn: 'text-slate-300 hover:text-emerald-400',
    mobileMenu: 'bg-[#050a0a]/95 border-[#112422] backdrop-blur-lg',
    mobileMenuActive: 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white',
    mobileMenuInactive: 'text-slate-300 hover:bg-white/5 hover:text-emerald-400',
    arrowBtn: 'bg-white/5 border border-[#17312e] text-emerald-400 hover:bg-emerald-600 hover:text-white',
    selectorDot: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.4)'
  },
  'light-orange': {
    name: 'Warm Light',
    bg: 'bg-white text-gray-800',
    textMain: 'text-gray-900',
    textMuted: 'text-gray-500',
    headerBg: 'bg-white/80 border-orange-100',
    navButtonActive: 'bg-orange-500 text-white shadow-lg shadow-orange-500/25',
    navButtonInactive: 'text-gray-600 hover:text-orange-500 hover:bg-orange-50',
    card: 'bg-orange-50/70 border border-orange-100 hover:border-orange-200 shadow-xl hover:shadow-orange-500/5',
    pill: 'bg-white border border-orange-100 text-gray-700 hover:border-orange-300 hover:bg-orange-50/30',
    techBadge: 'bg-orange-100/70 text-orange-700 border border-orange-200/50',
    timelineBullet: 'bg-orange-500 text-white border-white',
    accentText: 'bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent',
    accentBtn: 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/25',
    accentBtnMuted: 'bg-white text-orange-600 border border-orange-200 hover:bg-orange-50',
    iconBg: 'bg-white text-orange-500 border border-orange-100 shadow-md shadow-orange-100/50',
    footerBg: 'bg-orange-50/50 border-orange-100',
    blob1: 'bg-orange-500/5',
    blob2: 'bg-amber-500/5',
    badgeText: 'text-orange-600 bg-orange-50 border border-orange-200',
    divider: 'border-orange-100/50',
    accentSvg: 'text-orange-500',
    timelineBorder: 'border-orange-200',
    menuBtn: 'text-gray-600 hover:text-orange-500',
    mobileMenu: 'bg-white border-orange-100',
    mobileMenuActive: 'bg-orange-500 text-white',
    mobileMenuInactive: 'text-gray-700 hover:bg-orange-50 hover:text-orange-500',
    arrowBtn: 'bg-orange-50 border border-orange-200 text-orange-600 hover:bg-orange-500 hover:text-white',
    selectorDot: '#f97316',
    glowColor: 'rgba(249, 115, 22, 0.2)'
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [direction, setDirection] = useState(0); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('sunset-dark');
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  const activeTheme = THEMES[theme];

  // Set page titles dynamically
  useEffect(() => {
    document.title = `Baavith Reddy | ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`;
  }, [activeTab]);

  const handleTabChange = (newTab) => {
    const currentIndex = SECTIONS.findIndex(s => s.id === activeTab);
    const newIndex = SECTIONS.findIndex(s => s.id === newTab);
    
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveTab(newTab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextTab = () => {
    const currentIndex = SECTIONS.findIndex(s => s.id === activeTab);
    if (currentIndex < SECTIONS.length - 1) {
      handleTabChange(SECTIONS[currentIndex + 1].id);
    }
  };

  const prevTab = () => {
    const currentIndex = SECTIONS.findIndex(s => s.id === activeTab);
    if (currentIndex > 0) {
      handleTabChange(SECTIONS[currentIndex - 1].id);
    }
  };

  // Keyboard navigation controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextTab();
      if (e.key === 'ArrowLeft') prevTab();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab]);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (dir) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  return (
    <div className={`min-h-screen ${activeTheme.bg} flex flex-col font-sans transition-theme relative overflow-hidden`}>
      {/* Background Floating Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`absolute top-10 left-1/4 w-[30rem] h-[30rem] md:w-[45rem] md:h-[45rem] rounded-full blur-[120px] animate-blob filter ${activeTheme.blob1} opacity-70`}></div>
        <div className={`absolute bottom-10 right-1/4 w-[30rem] h-[30rem] md:w-[45rem] md:h-[45rem] rounded-full blur-[120px] animate-blob animation-delay-2000 filter ${activeTheme.blob2} opacity-70`}></div>
      </div>

      {/* Navigation Header */}
      <header className={`sticky top-0 z-40 backdrop-blur-md border-b ${activeTheme.headerBg} transition-theme`}>
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-white font-black text-lg shadow-md shadow-orange-500/25">
              B
            </span>
            <span className={`font-extrabold text-xl tracking-tight ${activeTheme.textMain}`}>
              Baavith<span className="text-orange-500">Reddy</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 items-center">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => handleTabChange(section.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all ${
                  activeTab === section.id
                    ? activeTheme.navButtonActive
                    : activeTheme.navButtonInactive
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            {/* Theme Selector */}
            <div className="relative">
              <button 
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-full border text-xs font-bold transition-theme bg-white/5 border-white/10 hover:bg-white/10 select-none cursor-pointer"
                style={{
                  borderColor: theme === 'light-orange' ? '#e2e8f0' : 'rgba(255,255,255,0.1)',
                  color: theme === 'light-orange' ? '#4b5563' : '#e5e7eb'
                }}
              >
                <Palette size={14} className="text-orange-500 animate-spin" style={{ animationDuration: '6s' }} />
                <span>{activeTheme.name}</span>
              </button>
              
              <AnimatePresence>
                {themeDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-44 rounded-2xl p-1.5 shadow-2xl border z-50 overflow-hidden flex flex-col space-y-1 backdrop-blur-xl"
                    style={{
                      backgroundColor: theme === 'light-orange' ? 'rgba(255,255,255,0.95)' : 'rgba(15,23,42,0.95)',
                      borderColor: theme === 'light-orange' ? '#fed7aa' : 'rgba(255,255,255,0.1)'
                    }}
                  >
                    {Object.entries(THEMES).map(([key, t]) => (
                      <button
                        key={key}
                        onClick={() => {
                          setTheme(key);
                          setThemeDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center space-x-2.5 ${
                          theme === key 
                            ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold' 
                            : 'text-gray-700 hover:bg-orange-50 dark:text-gray-300 dark:hover:bg-white/5'
                        }`}
                      >
                        <span className="w-2.5 h-2.5 rounded-full border border-white/20 inline-block shrink-0"
                          style={{ backgroundColor: t.selectorDot }}
                        ></span>
                        <span>{t.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className={`md:hidden p-2 transition-colors ${activeTheme.menuBtn}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-b px-4 py-4 space-y-2 overflow-hidden shadow-2xl relative z-30 transition-theme ${activeTheme.mobileMenu}`}
          >
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => handleTabChange(section.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all ${
                  activeTab === section.id
                    ? activeTheme.mobileMenuActive
                    : activeTheme.mobileMenuInactive
                }`}
              >
                {section.title}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide Navigation Arrows (Desktop) */}
      <div className="hidden lg:block">
        {activeTab !== 'home' && (
          <button 
            onClick={prevTab}
            className={`fixed left-6 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all shadow-xl z-30 ${activeTheme.arrowBtn} cursor-pointer`}
          >
            <ChevronLeft size={24} />
          </button>
        )}
        {activeTab !== 'contact' && (
          <button 
            onClick={nextTab}
            className={`fixed right-6 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all shadow-xl z-30 ${activeTheme.arrowBtn} cursor-pointer`}
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>

      {/* Main Pages Container */}
      <main className="flex-grow max-w-5xl w-full mx-auto px-4 py-12 flex flex-col justify-center relative z-10">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeTab}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full min-h-[60vh] flex flex-col justify-center"
          >
            {activeTab === 'home' && <HomeView activeTheme={activeTheme} handleTabChange={handleTabChange} />}
            {activeTab === 'education' && <EducationView activeTheme={activeTheme} />}
            {activeTab === 'skills' && <SkillsView activeTheme={activeTheme} />}
            {activeTab === 'projects' && <ProjectsView activeTheme={activeTheme} />}
            {activeTab === 'experience' && <ExperienceView activeTheme={activeTheme} />}
            {activeTab === 'certifications' && <CertificationsView activeTheme={activeTheme} />}
            {activeTab === 'contact' && <ContactView activeTheme={activeTheme} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className={`border-t py-6 text-center text-xs tracking-wider font-semibold uppercase transition-theme ${activeTheme.footerBg}`}>
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 text-gray-400">
          <p>© {new Date().getFullYear()} Anugu Baavith Reddy. All rights reserved.</p>
          <p className="flex items-center justify-center">
            Designed with <Heart size={14} className="text-orange-500 mx-1.5 fill-orange-500" /> & deployed on Vercel
          </p>
        </div>
      </footer>
    </div>
  );
}

// ----------------------------------------------------
// HOME VIEW
// ----------------------------------------------------
function HomeView({ activeTheme, handleTabChange }) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-6">
      {/* Enlarged Profile Picture */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', duration: 0.8 }}
        className="relative flex-shrink-0"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-amber-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-orange-500 via-amber-400 to-orange-500 shadow-2xl">
          {/* Profile Photo */}
          <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center relative shadow-inner">
            <img src={profileImg} alt="Anugu Baavith Reddy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent"></div>
          </div>
        </div>
      </motion.div>

      {/* Info & Intro */}
      <div className="flex-1 text-center lg:text-left space-y-6">
        <div className="space-y-3">
          <span className={`inline-flex items-center space-x-1 px-3 py-1 bg-orange-500/10 border border-orange-500/25 text-orange-400 rounded-full text-xs font-bold uppercase tracking-wider`}>
            <Sparkles size={12} className="animate-pulse mr-1" />
            <span>Welcome to my universe</span>
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none pt-2">
            Hi, I'm Anugu <br/>
            <span className={activeTheme.accentText}>
              Baavith Reddy
            </span>
          </h1>
          <p className="text-lg md:text-2xl font-bold tracking-wide">
            AI & Machine Learning Student | Developer
          </p>
        </div>

        <p className={`leading-relaxed max-w-xl mx-auto lg:mx-0 text-sm md:text-base ${activeTheme.textMuted}`}>
          I am a B.Tech student in Artificial Intelligence and Machine Learning from Hyderabad, Telangana. 
          I specialize in building intelligent applications, log monitoring systems, and automated pipelines, 
          combining deep learning, analysis tools, and modern software development practices.
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <button 
            onClick={() => handleTabChange('projects')}
            className={`px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all transform hover:-translate-y-0.5 cursor-pointer ${activeTheme.accentBtn}`}
          >
            View Projects
          </button>
          <button 
            onClick={() => handleTabChange('contact')}
            className={`px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all transform hover:-translate-y-0.5 border border-orange-500/20 cursor-pointer ${activeTheme.accentBtnMuted}`}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// EDUCATION VIEW
// ----------------------------------------------------
function EducationView({ activeTheme }) {
  const education = [
    {
      degree: 'B.Tech - Artificial Intelligence and Machine Learning',
      institution: 'Hyderabad Institute of Technology and Management',
      period: '11 2022 – 02 2026',
      location: 'Hyderabad, India',
      grade: 'CGPA - 8.5'
    },
    {
      degree: 'Intermediate',
      institution: 'Sri Chaitanya Jr college',
      period: '05 2020 – 08 2022',
      location: 'Hyderabad, India',
      grade: 'CGPA - 8.75'
    },
    {
      degree: '10th Class',
      institution: 'Dr.KKR Gowtham High School',
      period: '05 2019 – 04 2020',
      location: 'Hyderabad, India',
      grade: 'CGPA - 10'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-3xl md:text-5xl font-black">Education Timeline</h2>
        <p className={activeTheme.textMuted}>My academic journey and scholastic accomplishments</p>
      </div>

      <div className={`relative border-l-2 ${activeTheme.timelineBorder} max-w-3xl mx-auto pl-6 md:pl-8 py-2 space-y-12`}>
        {education.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="relative"
          >
            {/* Timeline bullet */}
            <span className={`absolute -left-[35px] md:-left-[43px] top-1.5 rounded-full p-2 border-4 ${theme === 'light-orange' ? 'border-white' : 'border-[#060814]'} shadow-lg shadow-orange-500/10 ${activeTheme.timelineBullet}`}>
              <GraduationCap size={16} />
            </span>

            {/* Custom Shade Card */}
            <div className={`p-6 rounded-3xl transition-theme ${activeTheme.card}`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold">{item.degree}</h3>
                  <p className="text-orange-500 font-bold text-sm mt-1">{item.institution}</p>
                </div>
                <span className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider ${activeTheme.badgeText}`}>
                  {item.period}
                </span>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                <span className="flex items-center"><MapPin size={13} className="mr-1 text-orange-500" /> {item.location}</span>
                <span className="flex items-center font-extrabold text-orange-500">Grade: {item.grade}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ----------------------------------------------------
// SKILLS VIEW
// ----------------------------------------------------
function SkillsView({ activeTheme }) {
  const skillGroups = [
    {
      category: 'Languages',
      icon: <Terminal size={20} />,
      skills: ['Python', 'R', 'SQL', 'C', 'Java']
    },
    {
      category: 'Machine Learning & AI',
      icon: <Layers size={20} />,
      skills: ['Supervised Learning', 'Unsupervised Learning', 'Deep Learning (ANN, CNN)', 'NLP', 'Model Deployment']
    },
    {
      category: 'Libraries & Frameworks',
      icon: <Code size={20} />,
      skills: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Keras', 'Matplotlib', 'OpenCV', 'DeepFace']
    },
    {
      category: 'Tools & Platforms',
      icon: <Settings size={20} />,
      skills: ['Git', 'GitHub', 'Docker', 'CI/CD', 'Linux']
    },
    {
      category: 'Data Analytics & BI',
      icon: <Database size={20} />,
      skills: ['Data Cleaning', 'Exploratory Data Analysis (EDA)', 'Power BI']
    },
    {
      category: 'Web Technologies',
      icon: <Activity size={20} />,
      skills: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-3xl md:text-5xl font-black">Technical Skills</h2>
        <p className={activeTheme.textMuted}>The tools, languages, and frameworks I use to solve real-world problems</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className={`p-6 rounded-3xl transition-theme flex flex-col justify-between ${activeTheme.card}`}
          >
            <div className="flex items-center space-x-3 mb-5">
              <span className={`p-2.5 rounded-xl ${activeTheme.iconBg}`}>
                {group.icon}
              </span>
              <h3 className="font-bold text-base md:text-lg">{group.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {group.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold ${activeTheme.pill}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ----------------------------------------------------
// PROJECTS VIEW
// ----------------------------------------------------
function ProjectsView({ activeTheme }) {
  const projects = [
    {
      title: 'AI-Based Missing Person Identification System',
      tech: ['Python', 'OpenCV', 'DeepFace', 'TensorFlow'],
      details: [
        'Developed an AI-powered facial recognition application for identifying missing persons using OpenCV Haar Cascade and DeepFace with the VGG-Face model.',
        'Implemented real-time face matching, image processing workflows, and facial embedding comparison.',
        'Designed a scalable detection pipeline to reduce manual verification efforts and improve identification speed.'
      ],
      link: 'https://github.com/Baavith',
      linkText: 'View on GitHub'
    },
    {
      title: 'TalentScout – AI-Powered Hiring Assistant Chatbot',
      tech: ['Python', 'Streamlit', 'Groq API', 'Llama 3.3', 'NLP'],
      details: [
        'Developed a conversational AI screening chatbot conducting initial technical screening for software candidate placement.',
        'Implemented a Python-controlled state machine ensuring strict conversational transitions and isolated API calls for question generation and real-time sentiment analysis.',
        'Deployed on Streamlit with a clean UI, custom CSS, stateful session handling, and robust JSON parsing error handling.'
      ],
      link: 'https://github.com/Baavith',
      linkText: 'View on GitHub'
    },
    {
      title: 'ATLAS – AI-Powered Career Guidance System',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'NLP'],
      details: [
        'Developed an AI-powered recommendation system for career and higher education guidance using NLP and ML.',
        'Implemented preprocessing, feature logic, and evaluation pipelines, improving recommendation accuracy by 12%.',
        'Enhancing with Masters, country, scholarship, and university recommendation features.'
      ],
      link: 'https://github.com/Baavith',
      linkText: 'View on GitHub'
    },
    {
      title: 'Log Monitoring & Data Visualization System',
      tech: ['Python', 'Pandas', 'Prometheus', 'Grafana', 'Loki'],
      details: [
        'Built an end-to-end monitoring and alerting system to track application behavior and system health.',
        'Implemented real-time log aggregation, dashboard visualization, and automated alerts.',
        'Observed system behavior using Loki log flows and Prometheus metrics.'
      ],
      link: 'https://github.com/Baavith',
      linkText: 'View Observability Stack'
    },
    {
      title: 'Medicine Recommendation System',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Collaborative Filtering'],
      details: [
        'Developed an intelligent recommendation engine using collaborative filtering to generate personalized medicine suggestions.',
        'Conducted robust data cleaning, feature engineering, and similarity-based matching to maximize recommendation relevance.',
        'Designed an automated evaluation pipeline to validate matching quality and performance metrics.'
      ],
      link: 'https://github.com/Baavith',
      linkText: 'View on GitHub'
    },
    {
      title: 'Handwritten Digit Recognition System',
      tech: ['Python', 'TensorFlow', 'Keras', 'CNN', 'MNIST'],
      details: [
        'Conducted data exploration, preprocessing, and augmentation on the MNIST handwritten digit image dataset.',
        'Built and trained a Convolutional Neural Network (CNN) achieving a 98% validation accuracy.',
        'Implemented hyperparameter tuning and dropout regularization to optimize training and reduce model overfitting.'
      ],
      link: 'https://github.com/Baavith',
      linkText: 'View on GitHub'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-3xl md:text-5xl font-black">Featured Projects</h2>
        <p className={activeTheme.textMuted}>Showcasing systems built with modern artificial intelligence, machine learning, and monitoring tools</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`p-6 md:p-8 rounded-3xl transition-theme flex flex-col justify-between ${activeTheme.card}`}
          >
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, tIdx) => (
                  <span 
                    key={tIdx}
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${activeTheme.techBadge}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <ul className={`space-y-2.5 text-xs md:text-sm list-disc pl-4 leading-relaxed ${activeTheme.textMuted}`}>
                {project.details.map((detail, dIdx) => (
                  <li key={dIdx}>{detail}</li>
                ))}
              </ul>
            </div>
            
            <div className={`pt-4 mt-6 border-t ${activeTheme.divider} flex items-center justify-between`}>
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-orange-500 hover:text-orange-600 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                {project.linkText}
                <ExternalLink size={13} className="ml-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ----------------------------------------------------
// EXPERIENCE VIEW
// ----------------------------------------------------
function ExperienceView({ activeTheme }) {
  const experiences = [
    {
      role: 'Student Registrar (SSG)',
      org: 'Hyderabad Institute of Technology and Management',
      period: '04 2025 – 04 2026',
      location: 'Hyderabad, India',
      details: [
        'Coordinated student administration, communication, grievances, and event operations.',
        'Managed organizational workflows in alignment with faculty, SSG team, and students.'
      ]
    },
    {
      role: 'AIML Intern',
      org: 'Elevate Labs',
      period: '01 2024 – 04 2024',
      location: 'Hyderabad, India',
      details: [
        'Designed and executed robust data preprocessing pipelines to clean, normalize, and tokenize unstructured user inputs for NLP recommendation models.',
        'Developed and optimized classification algorithms for the AI Career Counsellor project using Python, Pandas, Scikit-learn, and NLP preprocessing.',
        'Conducted extensive performance evaluations, hyperparameter tuning, and error analyses to boost recommendation accuracy by 12%.',
        'Gained hands-on experience designing end-to-end Machine Learning pipelines and packing model artifacts into deployment-ready AI solutions.'
      ]
    },
    {
      role: 'Team Lead (Internship)',
      org: 'Veenero Solutions',
      period: '11 2023 – 01 2024',
      location: 'Hyderabad, India',
      details: [
        'Led a 6-member team to design an IoT-based automatic water pumping mechanism using ultrasonic sensors.',
        'Oversaw hardware-software integration and testing phases successfully.'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-3xl md:text-5xl font-black">Experience & Leadership</h2>
        <p className={activeTheme.textMuted}>My internship background and organizational leadership roles</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`p-6 md:p-8 rounded-3xl transition-theme ${activeTheme.card}`}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold">{exp.role}</h3>
                <p className="text-orange-500 font-bold text-sm mt-1">{exp.org}</p>
              </div>
              <span className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider ${activeTheme.badgeText}`}>
                {exp.period}
              </span>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center mb-4">
              <MapPin size={13} className="mr-1 text-orange-500" /> {exp.location}
            </p>
            <ul className={`space-y-2.5 text-xs md:text-sm list-disc pl-4 leading-relaxed ${activeTheme.textMuted}`}>
              {exp.details.map((detail, dIdx) => (
                <li key={dIdx}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ----------------------------------------------------
// CERTIFICATIONS VIEW
// ----------------------------------------------------
function CertificationsView({ activeTheme }) {
  const certifications = [
    { name: 'PowerBI', provider: 'Simplilearn' },
    { name: 'R Programming', provider: 'Infosys Springboard' },
    { name: 'Python Fundamentals', provider: 'Infosys Springboard' },
    { name: 'Artificial Intelligence', provider: 'IUCEE' },
    { name: 'Entrepreneurship', provider: 'Simplilearn' }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-3xl md:text-5xl font-black">Certifications</h2>
        <p className={activeTheme.textMuted}>Validating my technical domain knowledge and expertise</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {certifications.map((cert, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            className={`p-6 rounded-3xl transition-theme text-center flex flex-col justify-center items-center space-y-4 ${activeTheme.card}`}
          >
            <span className={`p-3 rounded-full ${activeTheme.iconBg}`}>
              <Award size={24} />
            </span>
            <div>
              <h3 className="font-bold text-base md:text-lg">{cert.name}</h3>
              <p className="text-xs font-bold uppercase tracking-wider text-orange-500 mt-1">{cert.provider}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ----------------------------------------------------
// CONTACT VIEW
// ----------------------------------------------------
function ContactView({ activeTheme }) {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-3xl md:text-5xl font-black">Get In Touch</h2>
        <p className={activeTheme.textMuted}>Feel free to reach out for collaborations or opportunities</p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Contact Info Cards */}
        <div className="space-y-4 flex flex-col justify-between">
          <div className={`p-6 rounded-3xl flex items-center space-x-4 transition-theme ${activeTheme.card}`}>
            <span className={`p-3 rounded-2xl ${activeTheme.iconBg}`}>
              <Mail size={24} />
            </span>
            <div>
              <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider">Email Me</p>
              <a href="mailto:baavithreddyanugu07@gmail.com" className="text-sm md:text-base hover:text-orange-500 font-bold transition-colors">
                baavithreddyanugu07@gmail.com
              </a>
            </div>
          </div>

          <div className={`p-6 rounded-3xl flex items-center space-x-4 transition-theme ${activeTheme.card}`}>
            <span className={`p-3 rounded-2xl ${activeTheme.iconBg}`}>
              <Phone size={24} />
            </span>
            <div>
              <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider">Call Me</p>
              <a href="tel:+919100793219" className="text-sm md:text-base hover:text-orange-500 font-bold transition-colors">
                +91-9100793219
              </a>
            </div>
          </div>

          <div className={`p-6 rounded-3xl flex items-center space-x-4 transition-theme ${activeTheme.card}`}>
            <span className={`p-3 rounded-2xl ${activeTheme.iconBg}`}>
              <MapPin size={24} />
            </span>
            <div>
              <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider">Location</p>
              <p className="text-sm md:text-base font-bold">Hyderabad, Telangana, India</p>
            </div>
          </div>
        </div>

        {/* Social Links & Resume Card */}
        <div className={`p-8 rounded-3xl flex flex-col justify-between items-center text-center transition-theme ${activeTheme.card}`}>
          <div className="space-y-3">
            <h3 className="text-xl font-bold">Connect Online</h3>
            <p className={`text-xs md:text-sm ${activeTheme.textMuted}`}>Visit my social profiles or check out my work repositories</p>
          </div>

          <div className="flex gap-4 my-6">
            <a 
              href="https://github.com/Baavith" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-white/5 hover:bg-orange-500 hover:text-white text-gray-300 border border-white/10 hover:border-orange-500 rounded-2xl transition-all shadow-sm hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center cursor-pointer"
            >
              <GithubIcon size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/in/baavith-reddy-anugu-062655317/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-white/5 hover:bg-orange-500 hover:text-white text-gray-300 border border-white/10 hover:border-orange-500 rounded-2xl transition-all shadow-sm hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center cursor-pointer"
            >
              <LinkedinIcon size={28} />
            </a>
          </div>

          <p className="text-[10px] text-gray-400 max-w-xs font-semibold uppercase tracking-wider leading-relaxed">
            Open for full-time roles, internships, and collaborative AI/ML research projects.
          </p>
        </div>
      </div>
    </div>
  );
}
