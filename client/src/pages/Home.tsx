import { motion } from "framer-motion";
import { ArrowRight, Code, Search, Zap, Layout, BarChart, Globe } from "lucide-react";
import { Link } from "wouter";
import { NeonCard } from "@/components/NeonCard";
import { SectionHeader } from "@/components/SectionHeader";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-20" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 blur-[120px] rounded-full opacity-20" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold uppercase tracking-tighter leading-none mb-6">
                Code <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Meets</span> <br />
                Strategy
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-light">
                I build blazing fast modern websites and engineer the SEO strategies that make them found.
                Expert in React, Node, and WordPress ecosystems.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/projects" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-primary transition-colors flex items-center justify-center gap-2">
                  View Work <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/contact" className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-colors flex items-center justify-center">
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* Skills Marquee */}
      <div className="border-y border-white/5 bg-white/[0.02] py-8 overflow-hidden">
        <div className="flex gap-12 animate-scroll whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              {["React", "TypeScript", "Next.js", "WordPress", "Technical SEO", "Google Analytics", "Node.js", "TailwindCSS"].map((skill) => (
                <span key={skill} className="text-2xl font-display font-bold text-white/20 uppercase">
                  {skill}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Expertise Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <SectionHeader title="Expertise" subtitle="Bridging the gap between technical execution and market visibility." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NeonCard variant="primary" delay={0.1}>
              <Code className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-3">Modern Development</h3>
              <p className="text-muted-foreground">
                Building scalable, performant web applications using React, Next.js, and modern CSS architectures. Focus on speed and interactivity.
              </p>
            </NeonCard>

            <NeonCard variant="secondary" delay={0.2}>
              <Layout className="w-12 h-12 text-secondary mb-6" />
              <h3 className="text-2xl font-bold mb-3">WordPress Solutions</h3>
              <p className="text-muted-foreground">
                Custom theme development and plugin integration. Turning the world's most popular CMS into a powerhouse for your business.
              </p>
            </NeonCard>

            <NeonCard variant="accent" delay={0.3}>
              <Search className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold mb-3">SEO Strategy</h3>
              <p className="text-muted-foreground">
                Technical audits, on-page optimization, and content strategy. I ensure search engines love your code as much as users do.
              </p>
            </NeonCard>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-32 bg-white/[0.02] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <SectionHeader title="Selected Work" />
            <Link href="/projects" className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors mb-16 font-bold uppercase tracking-widest text-sm">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/projects">
              <div className="group relative aspect-video bg-muted overflow-hidden cursor-pointer border border-white/10">
                {/* landscape mountains abstract */}
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                  alt="Project 1"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-8 flex flex-col justify-end">
                  <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Development</span>
                  <h3 className="text-3xl font-bold uppercase">Neon Dashboard</h3>
                </div>
              </div>
            </Link>
            <Link href="/projects">
              <div className="group relative aspect-video bg-muted overflow-hidden cursor-pointer border border-white/10">
                {/* modern architecture dark */}
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                  alt="Project 2"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-8 flex flex-col justify-end">
                  <span className="text-secondary text-sm font-bold uppercase tracking-widest mb-2">SEO & WordPress</span>
                  <h3 className="text-3xl font-bold uppercase">Tech Corp Scale</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl md:text-8xl font-display font-bold uppercase mb-8">
            Ready to <br /><span className="text-outline-white text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>Level Up?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Whether you need a full-stack application or an SEO overhaul, I bring the technical edge your project needs.
          </p>
          <Link href="/contact" className="inline-block px-12 py-5 bg-primary text-black font-bold uppercase tracking-widest hover:bg-white transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,243,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]">
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
}
