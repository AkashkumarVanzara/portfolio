"use client";

import { useState, useEffect } from "react";
import { ArrowDown, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const roles = [
  "Full-Stack Developer",
  "Security Enthusiast",
  "Software Developer",
  "Future Founder",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(124,58,237,0.1) 0%, transparent 60%)" }} />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ff88]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Terminal prompt line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Terminal size={14} className="text-[#00ff88]" />
          <span className="font-mono text-sm text-[#00ff88]">
            ~/akashkumar<span className="text-[#64748b]"> $</span>{" "}
            <span className="text-[#e2e8f0]">whoami</span>
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          <span className="text-[#e2e8f0]">Akashkumar</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#7c3aed]">
            Vanzara
          </span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="h-10 flex items-center justify-center mb-8"
        >
          <span className="font-mono text-xl md:text-2xl text-[#64748b]">
            &gt; {displayed}
            <span className="cursor-blink text-[#00ff88]">_</span>
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-[#64748b] text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Building web apps, exploring security, and working toward founding something of my own.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-md bg-[#00ff88] text-[#0a0a0f] font-mono font-semibold text-sm hover:bg-[#00ff88]/90 transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-md border border-[#1e1e2e] text-[#e2e8f0] font-mono text-sm hover:border-[#7c3aed]/60 hover:text-[#a78bfa] transition-all duration-200"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll down">
          <ArrowDown
            size={20}
            className="text-[#64748b] hover:text-[#00ff88] transition-colors animate-bounce"
          />
        </a>
      </motion.div>
    </section>
  );
}
