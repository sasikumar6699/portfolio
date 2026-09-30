import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ArrowRight, Layers, Terminal } from 'lucide-react';
import { ProjectModal } from './ProjectModal';
import { useCyberDoor } from '../context/CyberDoorContext';

interface ProjectsProps {
  onInquireProject: (projectTitle: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onInquireProject }) => {
  const { currentTheme } = useCyberDoor();
  const { primary, secondary, rgb } = currentTheme;

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'ERP', 'Custom Software', 'Web', 'AI', 'Design'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Ambient Backdrop Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[180px] pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: `rgba(${rgb}, 0.06)` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border text-xs font-mono mb-4 transition-colors"
            style={{
              borderColor: `rgba(${rgb}, 0.35)`,
              color: secondary,
            }}
          >
            <span>PORTFOLIO & CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Selected Projects & Solutions
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-3">
            Enterprise digital systems engineered and deployed by our team. Built for scalability, high security, and measurable business growth.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="px-5 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 border"
                style={{
                  backgroundColor: isSelected ? primary : '#0D0D0D',
                  color: isSelected ? '#000000' : '#d1d5db',
                  borderColor: isSelected ? primary : 'rgba(255, 255, 255, 0.1)',
                  boxShadow: isSelected ? `0 0 20px rgba(${rgb}, 0.45)` : 'none',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0D0D0D] rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = primary;
                e.currentTarget.style.boxShadow = `0 0 30px rgba(${rgb}, 0.25)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                {/* Visual Graphics Header Container */}
                <div className={`h-48 bg-gradient-to-br ${project.gradientFrom} p-5 relative flex flex-col justify-between border-b border-white/10 group-hover:border-white/20 transition-colors`}>
                  <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                  
                  {/* Top Badges */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span
                      className="px-3 py-1 rounded-full bg-[#050505]/90 border text-[11px] font-mono transition-colors"
                      style={{
                        borderColor: `rgba(${rgb}, 0.4)`,
                        color: primary,
                      }}
                    >
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 flex items-center gap-1">
                      <Terminal className="w-3 h-3" style={{ color: primary }} /> SOLUTION ARCHITECTURE
                    </span>
                  </div>

                  {/* Center Visual Mock Graphic */}
                  <div className="relative z-10 text-center py-2">
                    <div className="inline-block px-4 py-2 rounded-lg bg-[#050505]/90 border border-white/10 group-hover:border-white/30 transition-colors">
                      <span className="text-xs font-mono font-bold text-gray-200 tracking-wider transition-colors">
                        {project.imagePlaceholderText}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Info Bar */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-gray-400">
                    <span>TECHYORA</span>
                    <span>ENTERPRISE CASE STUDY</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white transition-colors">
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
                  className="w-full flex items-center justify-between text-xs font-mono font-semibold text-gray-300 transition-colors group-hover:text-white"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '';
                  }}
                >
                  <span className="flex items-center gap-2">
                    <Layers className="w-4 h-4" style={{ color: primary }} /> View Project Case Study
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
