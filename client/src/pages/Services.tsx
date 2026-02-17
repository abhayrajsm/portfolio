import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { NeonCard } from "@/components/NeonCard";
import { Check, Code, Search, Database, Globe, BarChart, Server } from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      title: "Web Development",
      icon: Code,
      variant: "primary" as const,
      description: "Custom web applications built with modern technologies.",
      items: [
        "React / Next.js Applications",
        "Custom WordPress Themes",
        "E-commerce Solutions (Shopify/Woo)",
        "API Integration & Development",
        "Performance Optimization",
        "Accessible (WCAG) UI/UX"
      ]
    },
    {
      title: "SEO Strategy",
      icon: Search,
      variant: "secondary" as const,
      description: "Data-driven strategies to increase organic visibility.",
      items: [
        "Technical SEO Audits",
        "Keyword Research & Strategy",
        "On-Page Optimization",
        "Content Strategy",
        "Local SEO",
        "Competitor Analysis"
      ]
    },
    {
      title: "Maintenance & Growth",
      icon: Server,
      variant: "accent" as const,
      description: "Long-term partnership for sustained success.",
      items: [
        "Website Maintenance",
        "Security Updates & Monitoring",
        "Performance Monitoring",
        "Monthly SEO Reporting",
        "Conversion Rate Optimization",
        "Analytics Configuration"
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Services" 
          subtitle="Comprehensive digital solutions tailored to your business goals. I handle the technical complexity so you can focus on growth."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceCategories.map((service, index) => (
            <NeonCard 
              key={service.title} 
              variant={service.variant} 
              delay={index * 0.1}
              className="h-full flex flex-col"
            >
              <div className={`w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10`}>
                <service.icon className={`w-8 h-8 ${
                  service.variant === 'primary' ? 'text-primary' : 
                  service.variant === 'secondary' ? 'text-secondary' : 'text-accent'
                }`} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 font-display uppercase">{service.title}</h3>
              <p className="text-muted-foreground mb-8">{service.description}</p>
              
              <ul className="space-y-4 mt-auto">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${
                      service.variant === 'primary' ? 'text-primary' : 
                      service.variant === 'secondary' ? 'text-secondary' : 'text-accent'
                    }`} />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </NeonCard>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-32">
          <SectionHeader title="Process" centered />
          
          <div className="relative mt-20">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", desc: "Understanding your goals and technical requirements." },
                { step: "02", title: "Strategy", desc: "Planning the architecture and SEO roadmap." },
                { step: "03", title: "Execution", desc: "Clean coding and content implementation." },
                { step: "04", title: "Growth", desc: "Launch, monitor, and iterative optimization." }
              ].map((item, i) => (
                <div key={item.step} className="relative bg-background z-10 p-6 border border-white/10 hover:border-primary/50 transition-colors group">
                  <span className="text-6xl font-display font-bold text-white/5 absolute -top-8 right-4 group-hover:text-primary/10 transition-colors">
                    {item.step}
                  </span>
                  <h4 className="text-xl font-bold uppercase mb-2 text-primary">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
