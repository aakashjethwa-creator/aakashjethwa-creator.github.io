import { motion } from 'motion/react';
import { Play, ChevronRight } from 'lucide-react';
import { VideoWork } from '../constants';

interface WorkCardProps {
  work: VideoWork;
  onClick: () => void;
  key?: string;
}

export const WorkCard = ({ work, onClick }: WorkCardProps) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative cursor-pointer overflow-hidden bg-zinc-900 work-card"
      onClick={onClick}
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={`https://img.youtube.com/vi/${work.youtubeId}/maxresdefault.jpg`} 
          alt={work.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-red/20 transition-colors duration-500" />
        
        {/* Resolution Badge */}
        <div className="absolute top-4 right-4 z-10 px-1.5 py-0.5 bg-black/60 backdrop-blur-md border border-white/10 text-[7px] font-bold tracking-widest uppercase text-white/60">
          4K Ultra HD
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-16 h-16 rounded-full bg-brand-red flex items-center justify-center text-white shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
            <Play fill="currentColor" size={24} className="ml-1" />
          </div>
        </div>
      </div>
      <div className="p-4 border-l-2 border-transparent group-hover:border-brand-red transition-all duration-300">
        <div className="flex justify-between items-start gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-red font-bold mb-1 block">
              {work.category}
            </span>
            <h3 className="text-sm font-display font-bold uppercase tracking-tight group-hover:text-brand-red transition-colors line-clamp-1">
              {work.title}
            </h3>
          </div>
          <ChevronRight size={16} className="text-white/20 group-hover:text-brand-red transition-colors" />
        </div>
      </div>
    </motion.div>
  );
};
