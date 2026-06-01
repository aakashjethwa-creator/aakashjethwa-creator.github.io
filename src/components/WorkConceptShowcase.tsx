import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { WORKS, VideoWork } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MagneticMosaic } from './MagneticMosaic';

interface WorkConceptShowcaseProps {
  onVideoSelect: (video: VideoWork) => void;
}

const concepts = [
  'Kinetic Filmstrip',
  'Stack Peel Gallery',
  'Magnetic Mosaic',
  'Story Chapters',
  'Spotlight Stage',
  'Split Reveal',
] as const;

const thumb = (video: VideoWork) => `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;

export const WorkConceptShowcase = ({ onVideoSelect }: WorkConceptShowcaseProps) => {
  const [activeConcept, setActiveConcept] = useState<(typeof concepts)[number]>('Kinetic Filmstrip');
  const [activeIndex, setActiveIndex] = useState(0);
  const works = useMemo(() => WORKS.slice(0, 10), []);
  const activeWork = works[activeIndex % works.length];

  const next = () => setActiveIndex((p) => (p + 1) % works.length);
  const prev = () => setActiveIndex((p) => (p - 1 + works.length) % works.length);

  return (
    <section id="work" className="px-6 py-24 bg-brand-black border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 mb-10">
          <p className="text-brand-red text-[10px] uppercase tracking-[0.3em] font-bold">Creative Lab</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-[0.9]">
              Work <span className="text-brand-red italic">Concepts</span>
            </h2>
            <p className="text-white/45 text-sm max-w-md">
              Awwwards-inspired directions with motion, but without forcing users to finish a pinned horizontal section.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {concepts.map((concept) => (
            <button
              key={concept}
              onClick={() => setActiveConcept(concept)}
              className={`px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] border transition-colors ${activeConcept === concept ? 'bg-brand-red border-brand-red text-white' : 'bg-white/5 border-white/10 text-white/70 hover:text-white hover:border-white/30'}`}
            >
              {concept}
            </button>
          ))}
        </div>

        {activeConcept === 'Kinetic Filmstrip' && (
          <div className="overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-6 min-w-max pr-12">
              {works.map((work, idx) => (
                <motion.button
                  key={work.id}
                  onClick={() => onVideoSelect(work)}
                  whileHover={{ y: -10, scale: 1.01 }}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.45 }}
                  viewport={{ once: true }}
                  className="text-left w-[320px] md:w-[420px] shrink-0 bg-white/[0.03] border border-white/10 overflow-hidden"
                >
                  <img src={thumb(work)} alt={work.title} className="w-full aspect-video object-cover" referrerPolicy="no-referrer" />
                  <div className="p-4">
                    <p className="text-brand-red text-[10px] uppercase tracking-[0.25em] mb-2">{work.category}</p>
                    <p className="font-display font-bold uppercase tracking-tight line-clamp-2">{work.title}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {activeConcept === 'Stack Peel Gallery' && (
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative h-[420px] md:h-[520px]">
              {works.slice(0, 5).map((work, idx) => {
                const offset = (idx - (activeIndex % 5) + 5) % 5;
                return (
                  <motion.button
                    key={work.id}
                    onClick={() => onVideoSelect(work)}
                    animate={{
                      x: offset * 22,
                      y: offset * 16,
                      rotate: offset * -2,
                      scale: 1 - offset * 0.05,
                      opacity: 1 - offset * 0.18,
                      zIndex: 10 - offset,
                    }}
                    transition={{ type: 'spring', stiffness: 180, damping: 22 }}
                    className="absolute inset-0 w-full h-full border border-white/10 bg-zinc-900 overflow-hidden text-left"
                  >
                    <img src={thumb(work)} alt={work.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 p-6">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-brand-red mb-2">{work.category}</p>
                      <h3 className="text-2xl md:text-3xl font-display font-black uppercase">{work.title}</h3>
                    </div>
                  </motion.button>
                );
              })}
            </div>
            <div className="lg:col-span-5 flex flex-col gap-6">
              <p className="text-white/55 text-sm leading-relaxed">Poster-stack motion where each scroll tap peels the next card to the front.</p>
              <div className="flex gap-3">
                <button onClick={prev} className="p-3 border border-white/20 hover:border-brand-red"><ChevronLeft size={18} /></button>
                <button onClick={next} className="p-3 border border-white/20 hover:border-brand-red"><ChevronRight size={18} /></button>
              </div>
            </div>
          </div>
        )}

        {activeConcept === 'Magnetic Mosaic' && (
          <MagneticMosaic works={works} onVideoSelect={onVideoSelect} />
        )}

        {activeConcept === 'Story Chapters' && (
          <div className="grid lg:grid-cols-12 gap-7 items-start">
            <div className="lg:col-span-4 flex flex-col gap-2">
              {works.slice(0, 6).map((work, idx) => (
                <button
                  key={work.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`text-left p-4 border transition-colors ${activeIndex === idx ? 'border-brand-red bg-white/[0.03]' : 'border-white/10 hover:border-white/30'}`}
                >
                  <p className="text-[10px] tracking-[0.25em] uppercase text-brand-red mb-1">Chapter {String(idx + 1).padStart(2, '0')}</p>
                  <p className="font-display uppercase font-bold">{work.title}</p>
                </button>
              ))}
            </div>
            <motion.button
              key={activeWork.id}
              onClick={() => onVideoSelect(activeWork)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-8 relative overflow-hidden border border-white/10"
            >
              <img src={thumb(activeWork)} alt={activeWork.title} className="w-full aspect-video object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-6 text-left">
                <p className="text-brand-red text-[10px] uppercase tracking-[0.25em] mb-2">{activeWork.category}</p>
                <h3 className="text-3xl md:text-5xl font-display font-black uppercase">{activeWork.title}</h3>
              </div>
            </motion.button>
          </div>
        )}

        {activeConcept === 'Spotlight Stage' && (
          <div className="relative overflow-hidden border border-white/10 bg-white/[0.02] p-6 md:p-10">
            <div className="grid md:grid-cols-12 gap-5 items-center">
              <div className="md:col-span-2 flex md:flex-col gap-3">
                {works.slice(0, 3).map((work, idx) => (
                  <button key={work.id} onClick={() => setActiveIndex(idx)} className="overflow-hidden border border-white/10">
                    <img src={thumb(work)} alt={work.title} className="w-20 h-20 md:w-full md:h-24 object-cover opacity-65 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
              <motion.button
                key={activeWork.id}
                onClick={() => onVideoSelect(activeWork)}
                whileHover={{ scale: 1.01 }}
                className="md:col-span-8 relative overflow-hidden border border-brand-red/50"
              >
                <img src={thumb(activeWork)} alt={activeWork.title} className="w-full aspect-video object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-0 p-6 text-left">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-brand-red mb-2">Spotlight</p>
                  <h3 className="text-3xl md:text-4xl font-display font-black uppercase">{activeWork.title}</h3>
                </div>
              </motion.button>
              <div className="md:col-span-2 flex md:flex-col gap-3">
                {works.slice(3, 6).map((work, idx) => (
                  <button key={work.id} onClick={() => setActiveIndex(idx + 3)} className="overflow-hidden border border-white/10">
                    <img src={thumb(work)} alt={work.title} className="w-20 h-20 md:w-full md:h-24 object-cover opacity-65 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeConcept === 'Split Reveal' && (
          <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 border border-white/10">
              {works.slice(0, 7).map((work, idx) => (
                <button
                  key={work.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onFocus={() => setActiveIndex(idx)}
                  onClick={() => onVideoSelect(work)}
                  className={`w-full text-left p-4 border-b border-white/10 transition-colors ${activeIndex === idx ? 'bg-white/[0.06]' : 'hover:bg-white/[0.03]'}`}
                >
                  <p className="text-[10px] uppercase tracking-[0.25em] text-brand-red mb-1">{work.category}</p>
                  <p className="font-display font-bold uppercase">{work.title}</p>
                </button>
              ))}
            </div>
            <motion.button
              key={activeWork.id}
              onClick={() => onVideoSelect(activeWork)}
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-7 overflow-hidden border border-white/10"
            >
              <img src={thumb(activeWork)} alt={activeWork.title} className="w-full aspect-video object-cover" referrerPolicy="no-referrer" />
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};