import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ArrowRight, Layers, Terminal } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  onInquireProject: (projectTitle: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onInquireProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'ERP', 'Web', 'AI', 'Automation', 'Data', 'Design'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Ambient Backdrop Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#39FF14]/5 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#39FF14]/30 text-xs font-mono text-[#39FF14] mb-4">
            <span>PORTFOLIO & CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Selected Projects
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-3">
            Some of the solutions I've worked on or can build for clients. Engineered for scalability, reliability, and business impact.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#39FF14] text-black shadow-[0_0_20px_rgba(57,255,20,0.4)]'
                  : 'bg-[#0D0D0D] text-gray-300 border border-white/10 hover:border-[#39FF14]/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0D0D0D] rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#39FF14]/70 hover:shadow-[0_0_30px_rgba(57,255,20,0.2)] hover:-translate-y-2 group"
            >
              <div>
                {/* Visual Graphics Header Container */}
                <div className={`h-48 bg-gradient-to-br ${project.gradientFrom} p-5 relative flex flex-col justify-between border-b border-white/10 group-hover:border-[#39FF14]/40 transition-colors`}>
                  <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                  
                  {/* Top Badges */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#050505]/90 border border-[#39FF14]/40 text-[11px] font-mono text-[#39FF14]">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-[#39FF14]" /> SOLUTION ARCHITECTURE
                    </span>
                  </div>

                  {/* Center Visual Mock Graphic */}
                  <div className="relative z-10 text-center py-2">
                    <div className="inline-block px-4 py-2 rounded-lg bg-[#050505]/90 border border-white/10 group-hover:border-[#39FF14]/50 transition-colors">
                      <span className="text-xs font-mono font-bold text-gray-200 group-hover:text-[#39FF14] tracking-wider transition-colors">
                        {project.imagePlaceholderText}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Info Bar */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-gray-400">
                    <span>TECHYORA</span>
                    <span>FREELANCE PROJECT</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#39FF14] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies Stack Chips */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-[#050505] border border-white/10 text-[11px] font-mono text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-md bg-[#050505] text-[11px] font-mono text-gray-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 py-4 bg-[#08080A] border-t border-white/10">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="w-full flex items-center justify-between text-xs font-mono font-semibold text-gray-300 group-hover:text-[#39FF14] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#39FF14]" /> View Project Case Study
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onInquire={onInquireProject}
      />
    </section>
  );
};
