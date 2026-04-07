import { Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-black pt-32 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div>
            <h2 className="text-6xl md:text-8xl font-display font-black uppercase leading-none tracking-tighter mb-12">
              Let's make <br />
              something <br />
              <span className="text-brand-red italic">iconic.</span>
            </h2>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/5 hover:bg-brand-red transition-colors font-bold uppercase tracking-widest text-xs flex items-center gap-3"
              >
                <Instagram size={16} /> Instagram
              </a>
              <a 
                href="https://in.linkedin.com/in/aakash-jethwa-ab02821ab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/5 hover:bg-brand-red transition-colors font-bold uppercase tracking-widest text-xs flex items-center gap-3"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
          
          <div className="flex flex-col justify-end lg:items-end">
            <div className="space-y-8 text-left lg:text-right">
              <div>
                <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold mb-2">Email Me</p>
                <a href="mailto:aakashjethwa2000@gmail.com" className="text-3xl md:text-5xl font-display font-bold hover:text-brand-red transition-colors break-all uppercase">
                  aakashjethwa2000@gmail.com
                </a>
              </div>
              <div>
                <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold mb-2">Call Me</p>
                <a href="tel:+917045483931" className="text-3xl md:text-5xl font-display font-bold hover:text-brand-red transition-colors">
                  +91 70454 83931
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">
          <p>© 2026 Akash Jethwa. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
