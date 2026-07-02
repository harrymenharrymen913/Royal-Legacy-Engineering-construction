import { motion } from 'motion/react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { TEAM_DATA } from '../data';

export default function Team() {
  return (
    <section id="team" className="relative bg-slate-950 py-24 sm:py-32 font-sans overflow-hidden">
      {/* Decorative Blur elements */}
      <div className="absolute top-1/4 left-[-10%] h-96 w-96 rounded-full bg-amber-500/[0.01] blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 font-mono">
            Leadership
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mt-2">
            The Minds Behind the Landmarks
          </h2>
          <p className="mt-4 text-sm text-slate-400">
            Our multi-disciplinary team consists of structural designers, geologists, material scientists, and safety auditors focused on pushing the frontier of engineering.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_DATA.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass group flex flex-col rounded-sm overflow-hidden hover:border-amber-500/50 transition-all duration-300 shadow-xl"
            >
              {/* Photo Container with overlay */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Social hover drawer overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-center gap-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-sm bg-slate-950/90 border border-white/10 p-2 text-slate-300 hover:text-amber-500 hover:border-amber-500 transition-all"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-sm bg-slate-950/90 border border-white/10 p-2 text-slate-300 hover:text-amber-500 hover:border-amber-500 transition-all"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  {member.socials.email && (
                    <a
                      href={`mailto:${member.socials.email}`}
                      className="rounded-sm bg-slate-950/90 border border-white/10 p-2 text-slate-300 hover:text-amber-500 hover:border-amber-500 transition-all"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Text Information */}
              <div className="p-6 text-center">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-sans leading-tight">
                  {member.name}
                </h3>
                <p className="text-[10px] text-amber-500 mt-1.5 font-mono uppercase tracking-widest">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
