import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { VideoWork } from './constants';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedVideo } from './components/FeaturedVideo';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { MagneticMosaic } from './components/MagneticMosaic';

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState<VideoWork | null>(null);

  return (
    <div className="min-h-screen selection:bg-brand-red selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <FeaturedVideo />
      <MagneticMosaic onVideoSelect={setSelectedVideo} />
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

