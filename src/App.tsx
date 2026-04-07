import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { VideoWork } from './constants';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedVideo } from './components/FeaturedVideo';
import { HorizontalWorkScroll } from './components/HorizontalWorkScroll';
import { WorkSection } from './components/WorkSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState<VideoWork | null>(null);
  const [filter, setFilter] = useState<'All' | 'Teaser' | 'Trailer' | 'Shortfilm'>('All');

  return (
    <div className="min-h-screen selection:bg-brand-red selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <FeaturedVideo />

      <HorizontalWorkScroll onVideoSelect={setSelectedVideo} />

      {/* <WorkSection 
        filter={filter} 
        setFilter={setFilter} 
        onVideoSelect={setSelectedVideo} 
      /> */}
      <Footer />

      <AnimatePresence>
        {selectedVideo && (
          <VideoModal 
            video={selectedVideo} 
            onClose={() => setSelectedVideo(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

