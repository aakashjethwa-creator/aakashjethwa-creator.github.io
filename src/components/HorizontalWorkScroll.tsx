import { useRef, useEffect } from 'react';
import { WORKS, VideoWork } from '../constants';
import { WorkCard } from './WorkCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HorizontalWorkScrollProps {
  onVideoSelect: (video: VideoWork) => void;
}

export const HorizontalWorkScroll = ({ onVideoSelect }: HorizontalWorkScrollProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollContainer.current || !targetRef.current) return;

    let tween: gsap.core.Tween | null = null;
    let resizeTimer: ReturnType<typeof setTimeout> | null = null;

    const ctx = gsap.context(() => {
      const initScroll = () => {
        tween?.scrollTrigger?.kill();
        tween?.kill();

        const totalWidth = scrollContainer.current?.scrollWidth ?? 0;
        const viewportWidth = targetRef.current?.clientWidth ?? window.innerWidth;
        const translateX = Math.min(0, viewportWidth - totalWidth);

        gsap.set(scrollContainer.current, { x: 0 });

        tween = gsap.to(scrollContainer.current, {
          x: translateX,
          ease: 'none',
          overwrite: true,
          scrollTrigger: {
            trigger: targetRef.current,
            start: 'top top',
            end: `+=${Math.abs(translateX) || 1}`,
            scrub: 1.5,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      };

      const handleResize = () => {
        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          initScroll();
          ScrollTrigger.refresh();
        }, 150);
      };

      initScroll();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, targetRef);

    return () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      tween?.scrollTrigger?.kill();
      tween?.kill();
      ctx.revert();
    };
  }, []);

  return (
    <section id="work" ref={targetRef} className="relative w-full overflow-hidden bg-brand-black">
      <div className="flex min-h-screen w-full flex-col justify-center overflow-hidden">
        <div className="px-12 mb-8">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter opacity-40">
            Work <span className="text-brand-red italic">Showcase</span>
          </h2>
          <p className="text-white/20 text-xs mt-4 uppercase tracking-widest">Scroll down to explore</p>
        </div>

        <div ref={scrollContainer} className="flex w-max gap-8 px-12 will-change-transform">
          {WORKS.map((work) => (
            <WorkCard
              key={work.id}
              work={work}
              onClick={() => onVideoSelect(work)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
