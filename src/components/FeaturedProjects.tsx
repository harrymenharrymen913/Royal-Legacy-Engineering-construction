import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Calendar, MapPin, Eye, X, HardHat } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';

export default function FeaturedProjects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Commercial', 'Residential', 'Infrastructure', 'Roads', 'Bridges'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="projects" className="relative bg-slate-950 py-24 sm:py-32 font-sans overflow-hidden">
      {/* Dynamic Lighting */}
      <div className="absolute top-1/4 left-0 h-[400px] w-[400px] rounded-full bg-amber-500/[0.01] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 h-[400px] w-[400px] rounded-full bg-orange-500/[0.01] blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500 font-mono">
              Portfolio
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mt-2">
              Featured Engineering Masterpieces
            </h2>
            <p className="mt-4 text-sm text-slate-400">
              Explore our landmark projects, constructed to meet rigorous tensile specifications, energy codes, and environmental demands.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono uppercase mr-2 border-r border-white/10 pr-3">
              <Filter className="h-3.5 w-3.5 text-amber-500" />
              <span>Filter</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-sm px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/10'
                    : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group relative h-[380px] w-full overflow-hidden rounded-sm border border-white/5 bg-slate-900 shadow-xl cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-750 group-hover:scale-105 bg-no-referrer"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/10 z-10 transition-all duration-300 group-hover:via-slate-950/60" />

                {/* Details Container */}
                <div className="absolute inset-x-6 bottom-6 z-20 flex flex-col justify-end text-white">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-amber-500 font-mono mb-2 inline-block bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-sm w-max">
                    {project.category}
                  </span>
                  
                  <h3 className="text-sm font-bold uppercase tracking-wide leading-tight group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Meta Indicators */}
                  <div className="flex items-center gap-4 mt-3 text-[11px] text-slate-300 font-sans font-medium">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-amber-500" />
                      <span className="truncate max-w-[150px]">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-amber-500" />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  {/* Reveal button on Hover */}
                  <div className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Eye className="h-4 w-4" />
                    <span>View Specifications</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Project Specifications Lightbox / Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-sm border border-white/10 bg-slate-950 text-white shadow-2xl"
            >
              {/* Cover Image */}
              <div className="relative h-64 w-full md:h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 rounded-sm bg-slate-950/80 p-2 text-white hover:text-amber-500 border border-white/10 backdrop-blur-sm transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Information */}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-amber-500 font-mono border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 rounded-sm">
                    {selectedProject.category}
                  </span>
                  <div className="flex gap-4 text-[10px] font-mono uppercase text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-amber-500" />
                      {selectedProject.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-amber-500" />
                      {selectedProject.year}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-bold uppercase tracking-wider mt-4 text-white">
                  {selectedProject.title}
                </h3>
                
                <p className="mt-3 text-xs text-slate-300 leading-relaxed font-sans">
                  {selectedProject.description}
                </p>

                {/* Engineering Standards specs section */}
                <div className="mt-6 border-t border-white/10 pt-6 grid grid-cols-2 gap-4 text-[10px] font-mono uppercase tracking-wider">
                  <div className="rounded-sm bg-slate-900/60 p-3.5 border border-white/5">
                    <span className="block text-slate-500 tracking-wider">Testing Standards</span>
                    <span className="block text-white font-bold mt-1">ASTM / ISO Compliant</span>
                  </div>
                  <div className="rounded-sm bg-slate-900/60 p-3.5 border border-white/5">
                    <span className="block text-slate-500 tracking-wider">Structural Rating</span>
                    <span className="block text-white font-bold mt-1">Load-Bearing Class-A</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
