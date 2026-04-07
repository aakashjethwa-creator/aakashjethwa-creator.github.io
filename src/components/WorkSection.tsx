import { motion, AnimatePresence } from 'motion/react';
import { WORKS, VideoWork } from '../constants';
import { WorkCard } from './WorkCard';

interface WorkSectionProps {
  filter: 'All' | 'Teaser' | 'Trailer' | 'Shortfilm';
  setFilter: (filter: 'All' | 'Teaser' | 'Trailer' | 'Shortfilm') => void;
  onVideoSelect: (video: VideoWork) => void;
}

export const WorkSection = ({ filter, setFilter, onVideoSelect }: WorkSectionProps) => {
  const filteredWorks = filter === 'All' ? WORKS : WORKS.filter(w => w.category === filter);

  return (
    <section id="work" className="py-32 bg-[#050505] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-4">
              Selected <span className="text-brand-red">Works</span>
            </h2>
            <div className="w-24 h-1 bg-brand-red" />
          </div>
          
          <div className="flex items-center gap-4 p-1 bg-white/5 rounded-full border border-white/10 overflow-x-auto custom-scrollbar">
            {(['All', 'Teaser', 'Trailer', 'Shortfilm'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${filter === cat ? 'bg-brand-red text-white shadow-lg' : 'text-white/40 hover:text-white'}`}
              >
                {cat === 'Shortfilm' ? 'Short Films' : `${cat}s`}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work) => (
              <WorkCard 
                key={work.id} 
                work={work} 
                onClick={() => onVideoSelect(work)} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
