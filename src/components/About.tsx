import { motion } from 'motion/react';

const metrics = [
  { value: '4+', label: 'Years Of Experience' },
  { value: '100+', label: 'Edits Delivered' },
  { value: '24/7', label: 'Creative Obsession' },
];

export const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-brand-black px-6 py-24">
      <div className="pointer-events-none absolute inset-x-0 top-10 text-center font-display text-[20vw] font-black uppercase leading-none text-white/[0.03]">
        Studio
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-8"
        >
          <span className="mb-6 inline-block bg-brand-red px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-white">
            About
          </span>

          <h2 className="max-w-5xl font-display text-5xl font-black uppercase leading-[0.95] tracking-tighter md:text-7xl">
            Video Creator
         
            <div className="text-brand-red italic">Just Right Studioz NX</div>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
            For over 4+ years, I have been shaping trailers, teasers, promos, and short-form edits that hit fast and stay memorable. At Just Right Studioz NX, the focus is clear: sharp pacing, cinematic rhythm, and visuals that make every frame feel intentional.
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/40 md:text-base">
            From first-look campaigns to high-energy cutdowns, I build edits that serve the story and the audience at the same time. The goal is not just clean post-production, but a distinct screen presence that gives a project its own identity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="grid gap-4 lg:col-span-4"
        >
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="border border-white/10 bg-white/[0.03] px-6 py-6 backdrop-blur-sm transition-colors duration-300 hover:border-brand-red/60 hover:bg-white/[0.05]"
            >
              <p className="text-4xl font-display font-black uppercase tracking-tight text-white md:text-5xl">
                {metric.value}
              </p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};