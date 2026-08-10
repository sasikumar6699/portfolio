import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, Server, Bot, Briefcase } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return <Code2 className="w-4 h-4 text-[#39FF14]" />;
      case 1: return <Server className="w-4 h-4 text-[#39FF14]" />;
      case 2: return <Bot className="w-4 h-4 text-[#39FF14]" />;
      case 3: return <Briefcase className="w-4 h-4 text-[#39FF14]" />;
      default: return <Code2 className="w-4 h-4 text-[#39FF14]" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#39FF14]/30 text-xs font-mono text-[#39FF14] mb-4">
            <span>CAPABILITIES MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical & Professional Expertise
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-3">
            Proven competencies across full-stack software development, ERP architecture, artificial intelligence, and strategic business consulting.
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex flex-wrap gap-3 mb-10 pb-4 border-b border-white/10">
          {SKILL_CATEGORIES.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === idx
                  ? 'bg-[#39FF14] text-black shadow-[0_0_20px_rgba(57,255,20,0.4)]'
                  : 'bg-[#0D0D0D] text-gray-300 border border-white/10 hover:border-[#39FF14]/40 hover:text-white'
              }`}
            >
              {getCategoryIcon(idx)}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Skill Category Grid */}
        <div className="bg-[#0D0D0D] rounded-2xl border border-white/10 p-8 shadow-xl">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
            <h3 className="text-xl font-bold text-white flex items-center gap-3">
              {getCategoryIcon(activeTab)}
              <span>{SKILL_CATEGORIES[activeTab].title}</span>
            </h3>
            <span className="text-xs font-mono text-[#39FF14]">
              {SKILL_CATEGORIES[activeTab].skills.length} SPECIALIZED COMPETENCIES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SKILL_CATEGORIES[activeTab].skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#050505] border border-white/10 hover:border-[#39FF14]/60 hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-base font-bold text-white group-hover:text-[#39FF14] transition-colors">
                    {skill.name}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#39FF14] opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all"></span>
                </div>
                <span className="text-xs font-mono text-gray-400 group-hover:text-gray-300">
                  {skill.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
