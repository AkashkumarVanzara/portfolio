"use client";

import { motion } from "framer-motion";
import { Code2, Shield, Rocket, Users } from "lucide-react";

const learning = [
  { label: "Next.js", color: "text-[#00ff88] border-[#00ff88]/20 bg-[#00ff88]/5" },
  { label: "Cybersecurity", color: "text-[#a78bfa] border-[#7c3aed]/20 bg-[#7c3aed]/5" },
  { label: "Linux", color: "text-[#00ff88] border-[#00ff88]/20 bg-[#00ff88]/5" },
  { label: "Networking", color: "text-[#a78bfa] border-[#7c3aed]/20 bg-[#7c3aed]/5" },
  { label: "System Design", color: "text-[#64748b] border-[#1e1e2e] bg-[#0f0f1a]" },
];

const traits = [
  { icon: Code2, label: "Web & App Dev", desc: "Building full-stack web apps and websites" },
  { icon: Shield, label: "Security", desc: "Learning offensive & defensive security" },
  { icon: Users, label: "Leadership", desc: "Leading teams and taking initiative" },
  { icon: Rocket, label: "Entrepreneurship", desc: "Working toward founding my own company" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Section label */}
          <p className="font-mono text-sm text-[#00ff88] mb-3">01. about</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e2e8f0] mb-10">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-[#94a3b8] leading-relaxed mb-5 text-base">
              I&apos;m Akashkumar Vanzara — a developer who builds web apps and websites while diving deep into cybersecurity and software development. I believe in learning by building, and I&apos;m always working on something new.
            </p>
            <p className="text-[#94a3b8] leading-relaxed mb-8 text-base">
              I have a leader&apos;s mindset and a founder&apos;s ambition. My goal is to start my own tech company — and every project, every skill, and every line of code is a step toward that.
            </p>

            {/* Currently learning */}
            <div>
              <p className="font-mono text-xs text-[#64748b] mb-3 uppercase tracking-widest">
                Currently Learning
              </p>
              <div className="flex flex-wrap gap-2">
                {learning.map((item) => (
                  <span
                    key={item.label}
                    className={`font-mono text-xs px-3 py-1 rounded-full border ${item.color}`}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Trait cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {traits.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i }}
                className="p-4 rounded-lg border border-[#1e1e2e] bg-[#0f0f1a] hover:border-[#00ff88]/20 transition-colors duration-300 group"
              >
                <Icon
                  size={18}
                  className="text-[#00ff88] mb-3 group-hover:scale-110 transition-transform"
                />
                <p className="font-mono text-sm text-[#e2e8f0] font-medium mb-1">{label}</p>
                <p className="text-xs text-[#64748b] leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
