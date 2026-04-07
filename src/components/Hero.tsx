import { motion } from 'motion/react';
import { Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between px-6 pt-32 pb-12 overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-[0.02] whitespace-nowrap font-display font-black text-[30vw] uppercase leading-none">
        CREATOR
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-grow">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-3 py-1 bg-brand-red text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
              4+ Years Experience
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black uppercase leading-[0.9] tracking-tighter mb-8">
              AAkash <br />
              <span className="text-brand-red">Jethwa</span>
            </h1>
            <p className="max-w-xl text-lg text-white/60 leading-relaxed font-light">
              Crafting high-impact visual narratives for the biggest names in cinema. 
              Specializing in high-octane teasers and trailers that define the first look of blockbuster stories.
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col gap-4 w-full max-w-sm"
          >
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 bg-white/5 hover:bg-brand-red transition-all duration-500 border border-white/10"
            >
              <div className="flex items-center gap-4">
                <Instagram size={24} />
                <span className="font-display font-bold uppercase tracking-widest text-sm">Instagram</span>
              </div>
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a 
              href="https://in.linkedin.com/in/aakash-jethwa-ab02821ab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 bg-white/5 hover:bg-brand-red transition-all duration-500 border border-white/10"
            >
              <div className="flex items-center gap-4">
                <Linkedin size={24} />
                <span className="font-display font-bold uppercase tracking-widest text-sm">LinkedIn</span>
              </div>
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Contact Info - Fixed Overlap by using relative container and margin */}
      {/* <div className="max-w-7xl mx-auto w-full mt-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col gap-2"
        >
          <a href="mailto:aakashjethwa2000@gmail.com" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold hover:text-brand-red transition-colors tracking-tight break-all">
            aakashjethwa2000@gmail.com
          </a>
          <a href="tel:+917045483931" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold hover:text-brand-red transition-colors tracking-tight">
            +91 70454 83931
          </a>
        </motion.div>
      </div> */}
    </section>
  );
};
