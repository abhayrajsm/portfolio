import { useState } from "react";
import { useProjects } from "@/hooks/use-projects";
import { SectionHeader } from "@/components/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Loader2 } from "lucide-react";
import { type Project } from "@shared/schema";

export default function Projects() {
  const { data: projects, isLoading } = useProjects();
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Work" },
    { id: "development", label: "Development" },
    { id: "wordpress", label: "WordPress" },
    { id: "seo", label: "SEO Strategy" },
  ];

  const filteredProjects = projects?.filter(p => 
    filter === "all" ? true : p.category === filter
  ) || [];

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        <SectionHeader title="Projects" subtitle="A collection of technical solutions and creative implementations." />

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`
                px-6 py-2 text-sm font-bold uppercase tracking-widest border transition-all
                ${filter === cat.id 
                  ? 'bg-white text-black border-white' 
                  : 'bg-transparent text-muted-foreground border-white/10 hover:border-white/50 hover:text-white'
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group bg-card border border-white/10 overflow-hidden hover:border-primary/50 transition-colors"
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.imageUrl || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop"} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.projectUrl && (
            <a 
              href={project.projectUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white text-black rounded-full hover:bg-primary transition-colors"
              title="View Live"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-1 block">
              {project.category}
            </span>
            <h3 className="text-xl font-bold font-display uppercase">{project.title}</h3>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-white/5 border border-white/10 text-xs text-white/70 rounded-none">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
