"use client";

import { motion } from "framer-motion";
import { ExternalLink, Lock, Globe, Terminal } from "lucide-react";
import { GitHubIcon } from "./icons";

const projects = [
  {
    icon: Globe,
    title: "Web Application",
    description: "A full-stack web app built with Next.js and Node.js. More details coming soon.",
    tags: ["Next.js", "Node.js", "Tailwind"],
    accent: "#00ff88",
  },
  {
    icon: Terminal,
    title: "CLI Tool",
    description: "A developer utility / command-line tool. Project in progress.",
    tags: ["Node.js", "TypeScript", "CLI"],
    accent: "#a78bfa",
  },
  {
    icon: Lock,
    title: "Security Project",
    description: "A cybersecurity-focused project from my learning journey. Coming soon.",
    tags: ["Security", "Linux", "Networking"],
    accent: "#00ff88",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm text-[#00ff88] mb-3">03. projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e2e8f0] mb-3">What I&apos;ve Built</h2>
          <p className="text-[#64748b] text-sm font-mono mb-12">
            Projects are being added — check back soon.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative p-6 rounded-xl border border-[#1e1e2e] bg-[#0f0f1a] transition-all duration-300 hover:border-[#00ff88]/20 cursor-default"
                style={{
                  ["--accent" as string]: project.accent,
                }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top left, ${project.accent}08 0%, transparent 60%)`,
                  }}
                />

                {/* Coming Soon badge */}
                <div className="flex items-center justify-between mb-5">
                  <Icon
                    size={20}
                    className="transition-transform duration-300 group-hover:scale-110"
                    style={{ color: project.accent }}
                  />
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-[#1e1e2e] text-[#64748b] uppercase tracking-widest">
                    Coming Soon
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-mono font-semibold text-[#e2e8f0] mb-2 text-base group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2 py-0.5 rounded border border-[#1e1e2e] text-[#64748b]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Greyed-out links */}
                <div className="flex items-center gap-4">
                  <button
                    disabled
                    className="flex items-center gap-1.5 text-xs font-mono text-[#374151] cursor-not-allowed"
                    aria-label="GitHub (not available yet)"
                  >
                    <GitHubIcon size={13} />
                    Code
                  </button>
                  <button
                    disabled
                    className="flex items-center gap-1.5 text-xs font-mono text-[#374151] cursor-not-allowed"
                    aria-label="Live demo (not available yet)"
                  >
                    <ExternalLink size={13} />
                    Live
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
