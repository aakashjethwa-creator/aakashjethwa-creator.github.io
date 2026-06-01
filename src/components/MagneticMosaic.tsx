import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { VideoWork, WORKS } from '../constants';

interface MagneticMosaicProps {
  onVideoSelect: (video: VideoWork) => void;
}

const thumb = (video: VideoWork) => `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;

export const MagneticMosaic = ({ onVideoSelect }: MagneticMosaicProps) => {
  const [mobileVisibleCount, setMobileVisibleCount] = useState(4);
  const mosaicWorks = useMemo(() => WORKS.filter(w => !w?.feature), []);
  const mobileMosaicWorks = useMemo(
    () => mosaicWorks.slice(0, Math.min(mobileVisibleCount, mosaicWorks.length)),
    [mobileVisibleCount, mosaicWorks],
  );

  const showMoreMobile = () => {
    if (mobileVisibleCount >= mosaicWorks.length) {
      return;
    }

    setMobileVisibleCount((prev) => Math.min(prev + 4, mosaicWorks.length));
  };

  return (
    <section id="work" className="py-24 bg-brand-black px-6">
    <div className="max-w-7xl mx-auto">
         <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter">
            Work <span className="text-brand-red italic">Showcase</span>
          </h2>
          <p className="text-white/20 text-xs mt-4 uppercase tracking-widest">Scroll down to explore</p>
        </div>
      <div className="md:hidden grid grid-cols-1 auto-rows-[180px] gap-4">
        {mobileMosaicWorks.map((work, idx) => (
          <motion.button
            key={`${work.id}-${idx}`}
            onClick={() => onVideoSelect(work)}
            whileHover={{ scale: 1.03 }}
            className="group relative overflow-hidden border border-white/10 text-left"
          >
            <img src={thumb(work)} alt={work.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/75">
              <p className="text-[10px] tracking-[0.25em] uppercase text-brand-red mb-1">{work.category}</p>
              <p className="font-display font-bold uppercase leading-tight text-sm line-clamp-2">{work.title}</p>
            </div>
          </motion.button>
        ))}
      </div>

      {mobileVisibleCount < mosaicWorks.length && (
        <div className="md:hidden flex">
          <button
            onClick={showMoreMobile}
            className="px-4 py-3 border border-white/20 hover:border-brand-red text-[10px] font-bold uppercase tracking-[0.2em]"
            aria-label="Show more mosaic items"
          >
            Show More
          </button>
        </div>
      )}

      <div className="hidden md:grid md:grid-cols-4 auto-rows-[200px] gap-4">
        {mosaicWorks.map((work, idx) => (
          <motion.button
            key={work.id}
            onClick={() => onVideoSelect(work)}
            whileHover={{ scale: 1.03 }}
            className={`group relative overflow-hidden border border-white/10 text-left ${idx % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
          >
            <img src={thumb(work)} alt={work.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/75">
              <p className="text-[10px] tracking-[0.25em] uppercase text-brand-red mb-1">{work.category}</p>
              <p className="font-display font-bold uppercase leading-tight">{work.title}</p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
    </section>
  );
};