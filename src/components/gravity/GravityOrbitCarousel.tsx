import React, { useState, useRef, useEffect } from 'react';
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useMotionValueEvent 
} from 'framer-motion';
import { 
  Database, 
  Cpu, 
  Globe, 
  BarChart3, 
  Code, 
  PenTool, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  MousePointer
} from 'lucide-react';

interface GravityOrbitCarouselProps {
  onSelectProject?: (projectTitle: string) => void;
  onSelectService?: (serviceTitle: string) => void;
}

interface OrbitCardData {
  id: string;
  title: string;
  category: string;
  description: string;
  impact: string;
  tech: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const CAROUSEL_CARDS: OrbitCardData[] = [
  {
    id: 'erp-platform',
    title: 'Business ERP & CRM Platform',
    category: 'ERPNext & Frappe Solutions',
    description: 'Customized ERPNext deployment unifying multi-branch sales, inventory, accounting, and supply chain into one single source of truth.',
    impact: '65% faster financial reconciliation',
    tech: ['ERPNext', 'Frappe', 'Python', 'MariaDB'],
    icon: Database
  },
  {
    id: 'ai-agent',
    title: 'Autonomous AI Development Agent',
    category: 'AI & Workflow Automation',
    description: 'Autonomous LLM agent system converting high-level business specs into architecture schemas, API endpoints, and executable code plans.',
    impact: 'Accelerated technical scoping by 80%',
    tech: ['Python', 'FastAPI', 'LangChain', 'OpenAI'],
    icon: Cpu
  },
  {
    id: 'web-portal',
    title: 'High-Performance Corporate SaaS',
    category: 'Web Development & Design',
    description: 'Sub-second speed Jamstack corporate web portal with dynamic lead calculators, SEO-optimized markup, and interactive visual storytelling.',
    impact: '140% surge in qualified inbound B2B inquiries',
    tech: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    icon: Globe
  },
  {
    id: 'data-mgmt',
    title: 'Data Management & Record Systems',
    category: 'Data Entry & Analytics',
    description: 'Structured enterprise data cleaning, automated Excel/Sheets ETL pipelines, OCR document conversion, and database record management.',
    impact: 'Over 100,000+ data rows validated at 99.8%',
    tech: ['Excel ETL', 'Sheets API', 'Python', 'SQL'],
    icon: BarChart3
  },
  {
    id: 'custom-software',
    title: 'Scalable Microservices Software',
    category: 'Custom Software Architecture',
    description: 'Event-driven backend services, distributed APIs, and cloud-native databases engineered specifically for reliable high-concurrency scaling.',
    impact: 'Zero-downtime handling 10k+ daily transactions',
    tech: ['Node.js', 'PostgreSQL', 'Docker', 'Redis'],
    icon: Code
  },
  {
    id: 'brand-identity',
    title: 'Creative Brand Systems & Assets',
    category: 'Graphic Design & Branding',
    description: 'End-to-end visual identity, bespoke corporate logos, packaging, visiting cards, and high-impact marketing brochures that elevate brand trust.',
    impact: 'Unified digital & physical brand presence',
    tech: ['Figma', 'Illustrator', 'Design Systems'],
    icon: PenTool
  }
];

export const GravityOrbitCarousel: React.FC<GravityOrbitCarouselProps> = ({
  onSelectProject,
  onSelectService
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [radius, setRadius] = useState(310);
  const [viewMode, setViewMode] = useState<'orbit' | 'filmstrip'>('orbit');

  const containerRef = useRef<HTMLDivElement>(null);
  const cardCount = CAROUSEL_CARDS.length;

  // Responsive radius adjustment - tuned for compact 3D cylinder
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 640) {
          setRadius(210);
        } else if (window.innerWidth < 1024) {
          setRadius(260);
        } else {
          setRadius(310);
        }
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // SCROLL-LINKED ROTATION: As user scrolls down the page, every scroll gesture rotates the 3D cylinder
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress (0 to 1) directly to total angular rotation (0 to 300 degrees)
  const rawAngle = useTransform(scrollYProgress, [0, 1], [0, (cardCount - 1) * 60]);
  const smoothAngle = useSpring(rawAngle, { stiffness: 110, damping: 22, mass: 0.4 });
  const negativeAngle = useTransform(smoothAngle, (val) => -val);

  // Synchronize active card index with scroll rotation
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const step = 1 / (cardCount - 1);
    const index = Math.min(cardCount - 1, Math.max(0, Math.round(latest / step)));
    setActiveIndex(index);
  });

  // Smooth programmatic scroll to any specific card
  const scrollToCard = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const sectionTop = rect.top + scrollTop;
    const totalScroll = rect.height - window.innerHeight;

    if (totalScroll > 0) {
      const targetScroll = sectionTop + (index / (cardCount - 1)) * totalScroll;
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const nextCard = () => {
    const nextIdx = Math.min(cardCount - 1, activeIndex + 1);
    scrollToCard(nextIdx);
  };

  const prevCard = () => {
    const prevIdx = Math.max(0, activeIndex - 1);
    scrollToCard(prevIdx);
  };

  const activeCard = CAROUSEL_CARDS[activeIndex] || CAROUSEL_CARDS[0];

  return (
    <section
      id="orbit-showcase"
      ref={containerRef}
      className={`relative w-full bg-[#050505] text-white select-none ${
        viewMode === 'orbit' ? 'min-h-[260vh]' : 'py-16'
      }`}
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-[#39FF14]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      {viewMode === 'orbit' ? (
        /* =========================================================================
            STICKY COMPACT 3D CYLINDRICAL ORBIT (GUARANTEED ZERO OVERLAP ON ALL SCREENS)
            ========================================================================= */
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between items-center py-4 sm:py-6 px-4 sm:px-6 lg:px-8 overflow-hidden z-20">
          
          {/* Top Header & Telemetry Bar (Compact & High-Clearance) */}
          <div className="text-center max-w-2xl mx-auto space-y-1 relative z-30 shrink-0">
            <div className="flex items-center justify-center gap-2.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#0D0D0D] border border-[#39FF14]/40 text-[11px] font-mono text-[#39FF14]">
                <Sparkles className="w-3 h-3 animate-pulse" />
                <span>3D CYLINDRICAL ORBIT · SCROLL ROTATION</span>
              </div>

              {/* View Switcher Toggle */}
              <div className="hidden sm:inline-flex items-center gap-1 p-0.5 rounded-full bg-[#0D0D0D] border border-white/10 text-[11px] font-mono">
                <button
                  onClick={() => setViewMode('orbit')}
                  className="px-2.5 py-0.5 rounded-full bg-[#39FF14] text-black font-bold"
                >
                  3D ORBIT
                </button>
                <button
                  onClick={() => setViewMode('filmstrip')}
                  className="px-2.5 py-0.5 rounded-full text-gray-400 hover:text-white"
                >
                  LIST
                </button>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
              Our Core{' '}
              <span className="text-[#39FF14] inline-block neon-glow-text">
                Deliverables & Systems
              </span>
            </h2>
            <p className="text-[11px] sm:text-xs text-gray-400 font-light flex items-center justify-center gap-1.5">
              <MousePointer className="w-3 h-3 text-[#39FF14] animate-bounce" />
              <span>Scroll down to automatically rotate through each system.</span>
            </p>
          </div>

          {/* Center 3D Cylindrical Orbit Stage (Ample Vertical Clearance) */}
          <div className="relative w-full h-[280px] sm:h-[300px] flex items-center justify-center perspective-1200 my-auto">
            
            {/* The 3D Preserved World Rotating on Y-Axis */}
            <motion.div
              style={{
                transformStyle: 'preserve-3d',
                rotateY: negativeAngle
              }}
              className="relative w-0 h-0 flex items-center justify-center preserve-3d"
            >
              {CAROUSEL_CARDS.map((card, i) => {
                const cardAngle = i * (360 / cardCount);
                const isCurrent = i === activeIndex;
                const IconComp = card.icon;

                return (
                  <div
                    key={card.id}
                    onClick={() => {
                      if (!isCurrent) scrollToCard(i);
                    }}
                    style={{
                      transform: `rotateY(${cardAngle}deg) translateZ(${radius}px)`,
                      transformStyle: 'preserve-3d',
                      width: radius < 250 ? '220px' : '260px',
                      height: '250px',
                      marginLeft: radius < 250 ? '-110px' : '-130px',
                      marginTop: '-125px',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden'
                    }}
                    className={`absolute top-0 left-0 rounded-2xl bg-[#0D0D0D] border transition-all duration-300 overflow-hidden flex flex-col justify-between p-3.5 sm:p-4 cursor-pointer select-none ${
                      isCurrent
                        ? 'border-[#39FF14] shadow-[0_0_40px_rgba(57,255,20,0.35)] scale-[1.02] z-30 opacity-100'
                        : 'border-white/10 shadow-lg opacity-40 hover:opacity-75 z-10 hover:border-white/30'
                    }`}
                  >
                    {/* Inactive Darkness Vignette */}
                    <div
                      className={`absolute inset-0 bg-[#050505] pointer-events-none transition-opacity duration-300 ${
                        isCurrent ? 'opacity-0' : 'opacity-65'
                      }`}
                    />

                    {/* Card Header Top */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between pb-2 border-b border-white/10">
                        <div className="w-7 h-7 rounded-lg bg-[#050505] border border-[#39FF14]/40 flex items-center justify-center text-[#39FF14] shadow-[0_0_10px_rgba(57,255,20,0.2)]">
                          <IconComp className="w-3.5 h-3.5" />
                        </div>
                        <span className={`text-[8.5px] font-mono tracking-wider px-1.5 py-0.5 rounded border ${
                          isCurrent
                            ? 'bg-[#39FF14]/15 border-[#39FF14] text-[#39FF14] font-bold shadow-[0_0_6px_rgba(57,255,20,0.3)]'
                            : 'bg-white/5 border-white/10 text-gray-400'
                        }`}>
                          0{i + 1} // {isCurrent ? 'ACTIVE' : 'NODE'}
                        </span>
                      </div>

                      <span className="text-[8.5px] font-mono text-gray-400 block tracking-wider uppercase mt-1.5">
                        {card.category}
                      </span>
                      <h3 className="text-sm sm:text-[15px] font-bold text-white mt-0.5 leading-snug line-clamp-1">
                        {card.title}
                      </h3>

                      <p className="text-[10px] sm:text-[10.5px] text-gray-300 mt-1 font-light leading-relaxed line-clamp-2">
                        {card.description}
                      </p>
                    </div>

                    {/* Card Bottom Details & Inquire CTA */}
                    <div className="relative z-10 pt-2 border-t border-white/10">
                      <div className="text-[9px] font-mono text-[#39FF14] flex items-center gap-1 mb-1.5">
                        <Sparkles className="w-3 h-3 shrink-0" />
                        <span className="truncate">{card.impact}</span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-2">
                        {card.tech.slice(0, 3).map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[7.5px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onSelectService) onSelectService(card.title);
                          else if (onSelectProject) onSelectProject(card.title);
                        }}
                        className="w-full py-1.5 rounded-lg bg-[#39FF14] text-black font-mono text-[10px] font-bold uppercase tracking-wider hover:bg-[#45ff24] shadow-[0_0_12px_rgba(57,255,20,0.3)] transition-all flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <span>Inquire Solution</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Left / Right Arrow Quick Controls */}
            <button
              onClick={(e) => { e.stopPropagation(); prevCard(); }}
              disabled={activeIndex === 0}
              className={`absolute left-2 sm:left-6 z-40 p-2 rounded-full bg-[#0D0D0D]/90 border shadow-2xl transition-all ${
                activeIndex === 0
                  ? 'border-white/10 text-gray-600 opacity-40 cursor-not-allowed'
                  : 'border-white/20 text-white hover:text-[#39FF14] hover:border-[#39FF14]'
              }`}
              aria-label="Previous card"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextCard(); }}
              disabled={activeIndex === cardCount - 1}
              className={`absolute right-2 sm:right-6 z-40 p-2 rounded-full bg-[#0D0D0D]/90 border shadow-2xl transition-all ${
                activeIndex === cardCount - 1
                  ? 'border-white/10 text-gray-600 opacity-40 cursor-not-allowed'
                  : 'border-white/20 text-white hover:text-[#39FF14] hover:border-[#39FF14]'
              }`}
              aria-label="Next card"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom Telemetry Strip & Indicator Dots */}
          <div className="w-full max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 px-4 pt-1.5 border-t border-white/10 relative z-30 shrink-0">
            {/* Direct Select Indicator Dots */}
            <div className="flex items-center gap-1.5">
              {CAROUSEL_CARDS.map((card, idx) => (
                <button
                  key={card.id}
                  onClick={() => scrollToCard(idx)}
                  className={`transition-all rounded-full cursor-pointer ${
                    activeIndex === idx
                      ? 'w-6 h-1.5 bg-[#39FF14] shadow-[0_0_8px_#39FF14]'
                      : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Scroll to system ${idx + 1}`}
                />
              ))}
            </div>

            <div className="text-center sm:text-right">
              <span className="text-[11px] font-mono text-[#39FF14] uppercase tracking-wider block">
                FOCUS: {activeCard.title}
              </span>
              <span className="text-[9.5px] font-mono text-gray-400 block">
                SYSTEM [0{activeIndex + 1} / 0{cardCount}] · SCROLL TO ROTATE
              </span>
            </div>
          </div>

        </div>
      ) : (
        /* =========================================================================
           ALTERNATIVE FILMSTRIP / LIST MODE
           ========================================================================= */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-[#39FF14] tracking-widest uppercase">
                SYSTEMS ARCHIVE
              </span>
              <h3 className="text-3xl font-extrabold text-white mt-1">
                Full Core Deliverables
              </h3>
            </div>
            <button
              onClick={() => setViewMode('orbit')}
              className="px-4 py-2 rounded-full bg-[#39FF14] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#45ff24] transition-all"
            >
              Return to 3D Orbit
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAROUSEL_CARDS.map((card, i) => {
              const IconComp = card.icon;
              return (
                <div
                  key={card.id}
                  className="rounded-2xl bg-[#0D0D0D] border border-white/10 hover:border-[#39FF14] p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,255,20,0.2)]"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="w-8 h-8 rounded-xl bg-[#050505] border border-[#39FF14]/40 flex items-center justify-center text-[#39FF14]">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono text-[#39FF14]">
                        SYSTEM 0{i + 1}
                      </span>
                    </div>

                    <span className="text-xs font-mono text-gray-400 block tracking-wider uppercase mt-3">
                      {card.category}
                    </span>
                    <h3 className="text-base font-bold text-white mt-1">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-300 mt-1.5 font-light leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/10">
                    <div className="text-xs font-mono text-[#39FF14] flex items-center gap-1.5 mb-2.5">
                      <Sparkles className="w-3.5 h-3.5 shrink-0" />
                      <span>{card.impact}</span>
                    </div>
                    <button
                      onClick={() => {
                        if (onSelectService) onSelectService(card.title);
                        else if (onSelectProject) onSelectProject(card.title);
                      }}
                      className="w-full py-2 rounded-lg bg-[#39FF14] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#45ff24] transition-all flex items-center justify-center gap-2"
                    >
                      <span>Inquire System</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};
