"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Web & Frontend",
    color: "text-[#00ff88]",
    borderColor: "border-[#00ff88]/20",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend & Dev",
    color: "text-[#a78bfa]",
    borderColor: "border-[#7c3aed]/20",
    skills: ["Node.js", "Express", "REST APIs", "Git", "GitHub", "VS Code", "npm"],
  },
  {
    category: "Security & Tools",
    color: "text-[#64748b]",
    borderColor: "border-[#64748b]/20",
    skills: ["Linux", "Networking", "Cybersecurity (learning)", "CLI / Bash", "Vercel", "Firebase"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0f0f1a]/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm text-[#00ff88] mb-3">02. skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e2e8f0] mb-3">What I Work With</h2>
          <p className="text-[#64748b] text-sm font-mono mb-12">
            Tools and technologies I use to build things.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.1 }}
              className="p-6 rounded-xl border border-[#1e1e2e] bg-[#0a0a0f] hover:border-[#1e1e2e]/80 transition-colors"
            >
              {/* Category header */}
              <p className={`font-mono text-xs font-semibold uppercase tracking-widest mb-5 ${group.color}`}>
                {group.category}
              </p>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 + si * 0.04 }}
                    className="font-mono text-xs px-2.5 py-1 rounded border text-[#94a3b8] border-[#1e1e2e] bg-[#0f0f1a] hover:border-[#e2e8f0]/20 hover:text-[#e2e8f0] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
