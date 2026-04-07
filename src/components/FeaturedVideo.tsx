import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { useState } from 'react';
import { WORKS, VideoWork } from '../constants';

export const FeaturedVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const featureVideo:VideoWork = WORKS?.filter(f=>f?.feature)?.[0]; 

  return (
    <section className="py-24 bg-brand-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-col md:items-start justify-between gap-8">
            <div>
              <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Featured Project</span>
              <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter">
                <span className="text-brand-red italic">{featureVideo?.title}</span>
              </h2>
            </div>
            <p className="max-w-md text-white/40 text-sm leading-relaxed">
              A high-octane action series by Rohit Shetty. This trailer showcases our expertise in fast-paced editing and visual storytelling.
            </p>
          </div>

          <div className="relative aspect-video w-full bg-zinc-900 overflow-hidden group border border-white/5 shadow-2xl">
            {!isPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <img 
                  src={`https://img.youtube.com/vi/${featureVideo?.youtubeId}/maxresdefault.jpg`} 
                  alt="Featured Video"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-red/10 transition-colors duration-500" />
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="relative w-24 h-24 rounded-full bg-brand-red flex items-center justify-center text-white shadow-2xl transition-transform duration-500 hover:scale-110 active:scale-95"
                >
                  <Play fill="currentColor" size={32} className="ml-1" />
                </button>
              </div>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${featureVideo?.youtubeId}?autoplay=1`}
                title="Featured Video"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
