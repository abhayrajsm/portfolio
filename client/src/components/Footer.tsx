import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-display font-bold mb-4">ABHAYRAJ<span className="text-primary">.</span>DEV</h3>
            <p className="text-muted-foreground max-w-sm">
              Crafting high-performance digital experiences that rank.
              Bridging the gap between stunning code and strategic visibility.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Services</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Web Development</li>
              <li className="hover:text-primary transition-colors cursor-pointer">SEO Strategy</li>
              <li className="hover:text-primary transition-colors cursor-pointer">WordPress Solutions</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Performance Audits</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Connect</h4>
            <div className="flex gap-4">
              {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ABHAYRAJ.DEV Portfolio. All rights reserved.</p>
          <p>Designed with <span className="text-primary">React</span> & <span className="text-secondary">Tailwind</span></p>
        </div>
      </div>
    </footer>
  );
}
